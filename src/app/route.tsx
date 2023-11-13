import { Body, Page } from '../components/Page'
import markdown from './content.md'
import { NextApiRequest } from 'next'
import { setCookie } from 'cookies-next'
import { ToggleView } from '@/components/ToggleView'
import { Markdown } from '@/components/ui/Markdown'
import { Button } from '@/components/ui/Button'

export const runtime = 'edge'

export async function GET(request: NextApiRequest, response: Response) {
  const ReactDOMServer = (await import('react-dom/server')).default

  setCookie('key', 'value')

  const headers = request.headers
  const responeHeaders = new Headers({
    'content-type': 'text/html; charset=utf-8',
  })
  const foo = <div hx->bar</div>

  if (headers['HX-Boosted'] && headers['HX-Boosted'] === 'true') {
    response = new Response(
      ReactDOMServer.renderToStaticMarkup(
        <Body>
          <Index />
        </Body>
      ),
      {
        headers: responeHeaders,
        status: 200,
        statusText: 'OK',
      }
    )
  } else {
    response = new Response(
      ReactDOMServer.renderToStaticMarkup(
        <Page>
          <Index />
          <ToggleView />
        </Page>
      ),
      {
        headers: {
          'content-type': 'text/html; charset=utf-8',
        },
        status: 200,
        statusText: 'OK',
      }
    )
  }
  return response
}

export async function POST(request: Request) {
  return new Response(Post({ request }), {
    headers: {
      'content-type': 'text/html; charset=utf-8',
    },
    status: 200,
  })
}

function Index(): JSX.Element {
  return (
    <main className='container'>
      <Button
        hx-post='/'
        hx-swap='innerHTML transition:true'
        type='button'
        variant={'default'}
      >
        Click Me
      </Button>
      <article className='prose prose-invert max-w-none'>
        <Markdown>{markdown}</Markdown>
      </article>
    </main>
  )
}

const Post = ({ request }: { request: Request }) => `${Date.now()} is the time!`
