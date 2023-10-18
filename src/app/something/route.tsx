import type { ReactElement } from 'react'
import { Page } from '../../components/Page'
import { setCookie } from 'cookies-next'

export const runtime = 'edge'

export async function GET(req: Request, res: Response) {
  const ReactDOMServer = (await import('react-dom/server')).default
  res = new Response(ReactDOMServer.renderToStaticMarkup(<Index />), {
    headers: {
      'content-type': 'text/html; charset=utf-8',
    },
    status: 200,
  })
  return res
}

export async function POST(request: Request) {
  const ReactDOMServer = (await import('react-dom/server')).default

  return new Response(
    ReactDOMServer.renderToStaticMarkup(<Post request={request} />),
    {
      headers: {
        'content-type': 'text/html; charset=utf-8',
      },
      status: 200,
    }
  )
}

function Index(): ReactElement {
  return (
    <Page>
      <main className='container'>
        <button
          hx-post='/'
          hx-swap='innerHTML transition:true'
          className='rounded p-10 bg-blue-700 hover:bg-blue-800 w-full'
        >
          Click Me
        </button>
      </main>
    </Page>
  )
}

const Post = ({ request }: { request: Request }) => `${Date.now()} is the time!`
