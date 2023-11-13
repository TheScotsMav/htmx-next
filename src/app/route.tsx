import { Body, Page } from '../components/Page'
import Markdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import dark from '../codeTheme'
import markdown from './content.md'
import { NextApiRequest } from 'next'
import { setCookie } from 'cookies-next'
import { ToggleView } from '@/components/ToggleView'

export const runtime = 'edge'

export async function GET(request: NextApiRequest, response: Response) {
  const ReactDOMServer = (await import('react-dom/server')).default

  setCookie('key', 'value')

  const headers = request.headers
  const responeHeaders = new Headers({
    'content-type': 'text/html; charset=utf-8',
  })

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
      <button
        hx-post='/'
        hx-swap='innerHTML transition:true'
        className='rounded p-10 bg-red-700 hover:bg-red-800 w-full'
        type='button'
      >
        Click Me
      </button>
      <article className='prose prose-invert max-w-none'>
        <Markdown
          children={markdown}
          components={{
            code(props) {
              const { children, className, node, ...rest } = props
              const match = /language-(\w+)/.exec(className || '')
              return match ? (
                <SyntaxHighlighter
                  className='rounded'
                  {...rest}
                  children={String(children).replace(/\n$/, '')}
                  style={dark}
                  language={match[1]}
                  PreTag='div'
                />
              ) : (
                <code {...rest} className={className}>
                  {children}
                </code>
              )
            },
          }}
        />
      </article>
    </main>
  )
}

const Post = ({ request }: { request: Request }) => `${Date.now()} is the time!`
