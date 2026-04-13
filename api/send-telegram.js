export default async function handler(req, res) {
  // 1. Дозволяємо лише POST
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // 2. Гарантуємо, що дані розпарсено (важливо для Node.js на Vercel)
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    const { name, phone, message } = body;

    const TOKEN = process.env.TELEGRAM_TOKEN;
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    // 3. Перевірка наявності ключів
    if (!TOKEN || !CHAT_ID) {
      console.error("Помилка: Токени не знайдені в ENV");
      return res.status(500).json({ message: 'Server configuration error' });
    }

    // 4. Перевірка обов'язкових полів від юзера
    if (!name || !phone) {
      return res.status(400).json({ message: "Ім'я та телефон обов'язкові" });
    }

    const text = `
🌟 <b>Нова заявка з сайту!</b>
👤 <b>Ім'я:</b> ${name}
📞 <b>Телефон:</b> ${phone}
💬 <b>Питання:</b> ${message || '—'}
    `.trim();

    // 5. Відправка в Telegram
    const response = await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: text,
        parse_mode: 'HTML',
      }),
    });

    const result = await response.json();

    if (response.ok) {
      return res.status(200).json({ success: true });
    } else {
      console.error("Telegram API Error:", result);
      return res.status(500).json({ message: result.description });
    }
  } catch (error) {
    console.error("Global Server Error:", error);
    return res.status(500).json({ message: error.message });
  }
}