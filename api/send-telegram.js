export default async function handler(req, res) {
  // Дозволяємо лише POST запити
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, phone, message } = req.body;
  
  // Ті самі токен та ID, але тепер вони будуть у безпеці
  const TOKEN = process.env.TELEGRAM_TOKEN;
  const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

  const text = `
🌟 <b>Нова заявка з Глобус КО</b>
👤 <b>Ім'я:</b> ${name}
📞 <b>Телефон:</b> ${phone}
💬 <b>Повідомлення:</b> ${message}
  `.trim();

  try {
    const response = await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: text,
        parse_mode: 'HTML',
      }),
    });

    if (response.ok) {
      return res.status(200).json({ success: true });
    } else {
      return res.status(500).json({ success: false });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}