import { ToggleButton, ToggleDiv } from '@/components/ToggleView'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const hidden = searchParams.get('hidden') === 'true'
  const ReactDOMServer = (await import('react-dom/server')).default

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
      },
      status: 200,
    }
  )
}
