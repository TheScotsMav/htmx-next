import { ToggleButton, ToggleDiv } from '@/components/ToggleView'

export const runtime = 'edge'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const hidden = searchParams.get('hidden') === 'true'
  const ReactDOMServer = (await import('react-dom/server')).default

  const something = request.headers.get('Cookie')?.split('; ')

  console.log(something)

  return new Response(
    ReactDOMServer.renderToStaticMarkup(
      <>
        <ToggleButton hidden={hidden} />
        <ToggleDiv hidden={hidden} outOfBand={true} />
      </>
    ),
    {
      headers: {
        'content-type': 'text/html; charset=utf-8',
        'Set-Cookie': 'session=something; path=/; HttpOnly; SameSite=Lax',
      },
      status: 200,
    }
  )
}
