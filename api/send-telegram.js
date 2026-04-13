export default async function handler(req, res) {
  // 1. Дозволяємо лише POST запити
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, phone, message } = req.body;
    const token = process.env.TELEGRAM_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    // Перевірка, чи завантажилися змінні
    if (!token || !chatId) {
      throw new Error('Telegram tokens are missing in environment variables');
    }

    const text = `
🚀 <b>Нова заявка з сайту!</b>
👤 <b>Ім'я:</b> ${name}
📞 <b>Телефон:</b> ${phone}
💬 <b>Повідомлення:</b> ${message || '—'}
    `.trim();

    // 2. Відправляємо запит до Telegram
    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: 'HTML',
      }),
    });

    const data = await response.json();

    if (response.ok) {
      return res.status(200).json({ success: true });
    } else {
      return res.status(response.status).json({ error: data.description });
    }
  } catch (error) {
    console.error('Server Error:', error);
    return res.status(500).json({ error: error.message });
  }
}