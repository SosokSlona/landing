export async function onRequestPost(context) {
  try {
    const { request, env } = context;
    const data = await request.json();

    const name = data.name ? String(data.name).trim() : 'Аноним';
    const contact = data.contact ? String(data.contact).trim() : 'Не указан';
    const service = data.service ? String(data.service).trim() : 'Общий запрос';
    const message = data.message ? String(data.message).trim() : 'Без описания';

    const token = env && env.TELEGRAM_BOT_TOKEN;
    const chatId = env && env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      return new Response(JSON.stringify({ 
        success: false, 
        fallback: true,
        message: 'Telegram env vars not set, fallback to client redirect'
      }), {
        headers: { 'Content-Type': 'application/json' },
        status: 200
      });
    }

    const text = `🔔 *Новая заявка с сайта shahotko.tech*\n\n👤 *Имя:* ${name}\n📱 *Контакт:* ${contact}\n⚙️ *Направление:* ${service}\n💬 *Сообщение:* ${message}`;

    const tgUrl = `https://api.telegram.org/bot${token}/sendMessage`;
    const tgRes = await fetch(tgUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: 'Markdown'
      })
    });

    if (!tgRes.ok) {
      const errText = await tgRes.text();
      return new Response(JSON.stringify({ success: false, error: errText }), {
        headers: { 'Content-Type': 'application/json' },
        status: 502
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { 'Content-Type': 'application/json' },
      status: 200
    });
  } catch (err) {
    return new Response(JSON.stringify({ success: false, error: err.message }), {
      headers: { 'Content-Type': 'application/json' },
      status: 500
    });
  }
}
