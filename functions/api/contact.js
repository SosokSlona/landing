export async function onRequestPost(context) {
  try {
    const { request, env } = context;
    const data = await request.json();

    const name = data.name ? String(data.name).trim() : 'Аноним';
    const contact = data.contact ? String(data.contact).trim() : 'Не указан';
    const service = data.service ? String(data.service).trim() : 'Общий запрос';
    const message = data.message ? String(data.message).trim() : 'Без описания';

    const targetEmail = (env && env.NOTIFICATION_EMAIL) || 'ivan@shahotko.tech';
    const resendKey = env && env.RESEND_API_KEY;
    const resendFrom = (env && env.RESEND_FROM_EMAIL) || 'onboarding@resend.dev';

    const tgToken = env && env.TELEGRAM_BOT_TOKEN;
    const tgChatId = env && env.TELEGRAM_CHAT_ID;

    let emailSent = false;
    let tgSent = false;
    let lastError = null;

    if (resendKey) {
      try {
        const htmlBody = `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; padding: 24px; background-color: #09090b; color: #fafafa; border-radius: 12px; border: 1px solid #27272a;">
            <div style="font-size: 11px; font-family: monospace; color: #10b981; margin-bottom: 12px; text-transform: uppercase;">[NEW LEAD · SHAHOTKO.TECH]</div>
            <h2 style="margin: 0 0 16px 0; font-size: 20px; color: #ffffff;">Новая заявка с сайта</h2>
            <div style="background-color: #141417; padding: 16px; border-radius: 8px; border: 1px solid #27272a; margin-bottom: 16px;">
              <p style="margin: 0 0 8px 0; font-size: 14px;"><strong>Имя / Компания:</strong> ${name}</p>
              <p style="margin: 0 0 8px 0; font-size: 14px;"><strong>Контакт:</strong> <a href="${contact.startsWith('@') ? 'https://t.me/' + contact.replace('@', '') : (contact.includes('@') ? 'mailto:' + contact : '#')}" style="color: #34d399; text-decoration: none;">${contact}</a></p>
              <p style="margin: 0; font-size: 14px;"><strong>Направление:</strong> ${service}</p>
            </div>
            <div style="background-color: #141417; padding: 16px; border-radius: 8px; border: 1px solid #27272a;">
              <div style="font-size: 12px; color: #a1a1aa; margin-bottom: 6px; font-family: monospace;">ОПИСАНИЕ ЗАДАЧИ:</div>
              <p style="margin: 0; font-size: 14px; line-height: 1.5; white-space: pre-wrap; color: #e4e4e7;">${message}</p>
            </div>
            <div style="margin-top: 20px; font-size: 11px; color: #71717a; font-family: monospace;">
              Отправлено через Cloudflare Pages Serverless · shahotko.tech
            </div>
          </div>
        `;

        const emailRes = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${resendKey}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            from: resendFrom,
            to: [targetEmail],
            reply_to: contact.includes('@') ? contact : undefined,
            subject: `🔔 Заявка с сайта: ${name} [${service}]`,
            text: `Новая заявка с shahotko.tech:\n\nИмя: ${name}\nКонтакт: ${contact}\nНаправление: ${service}\n\nЗадача:\n${message}`,
            html: htmlBody
          })
        });

        if (emailRes.ok) {
          emailSent = true;
        } else {
          lastError = await emailRes.text();
        }
      } catch (e) {
        lastError = e.message;
      }
    }

    if (tgToken && tgChatId) {
      try {
        const text = `🔔 *Новая заявка с сайта shahotko.tech*\n\n👤 *Имя:* ${name}\n📱 *Контакт:* ${contact}\n⚙️ *Направление:* ${service}\n💬 *Сообщение:* ${message}`;
        const tgRes = await fetch(`https://api.telegram.org/bot${tgToken}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: tgChatId,
            text: text,
            parse_mode: 'Markdown'
          })
        });
        if (tgRes.ok) {
          tgSent = true;
        }
      } catch (e) {}
    }

    if (!emailSent && !tgSent) {
      return new Response(JSON.stringify({ 
        success: false, 
        fallback: true,
        error: lastError || 'No delivery provider configured'
      }), {
        headers: { 'Content-Type': 'application/json' },
        status: 200
      });
    }

    return new Response(JSON.stringify({ 
      success: true, 
      delivered: { email: emailSent, telegram: tgSent } 
    }), {
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
