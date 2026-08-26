export async function onRequest(context) {
  const { request, env } = context;
  try {
    const errorPage = await env.ASSETS.fetch(new Request(new URL('/404/index.html', request.url)));
    if (errorPage.ok) {
      return new Response(errorPage.body, {
        status: 404,
        headers: {
          'content-type': 'text/html; charset=utf-8'
        }
      });
    }
  } catch (e) {}

  return new Response('404 Not Found', { status: 404 });
}
