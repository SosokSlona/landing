export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const errorPage = await env.ASSETS.fetch(new Request(new URL('/404.html', url.origin)));
  return new Response(errorPage.body, {
    status: 404,
    headers: {
      'content-type': 'text/html; charset=utf-8'
    }
  });
}
