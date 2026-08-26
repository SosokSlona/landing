export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);

  if (url.pathname.startsWith('/api/')) {
    return context.next();
  }

  const res = await env.ASSETS.fetch(request);
  if (res.status === 404) {
    const custom404 = await env.ASSETS.fetch(new Request(new URL('/404.html', request.url)));
    return new Response(custom404.body, {
      status: 404,
      headers: {
        'content-type': 'text/html; charset=utf-8'
      }
    });
  }

  return res;
}
