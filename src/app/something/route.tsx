import type { ReactElement } from 'react'
import { Body, Page } from '../../components/Page'

export const runtime = 'edge'

export async function GET(request: Request, response: Response) {
  const ReactDOMServer = (await import('react-dom/server')).default

  const headers = request.headers

  if (headers.get('HX-Boosted') === 'true') {
    response = new Response(
      ReactDOMServer.renderToStaticMarkup(
        <Body>
          <Index />
        </Body>
      ),
      {
        headers: {
          'content-type': 'text/html; charset=utf-8',
        },
        status: 200,
        statusText: 'OK',
      }
    )
  } else {
    response = new Response(
      ReactDOMServer.renderToStaticMarkup(Page({ children: Index() })),
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
    <main className='container'>
      <button
        hx-post='/'
        hx-swap='innerHTML transition:true'
        className='rounded p-10 bg-blue-700 hover:bg-blue-800 w-full'
      >
        Click Me
      </button>
    </main>
  )
}

const Post = ({ request }: { request: Request }) => `${Date.now()} is the time!`
