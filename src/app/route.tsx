import type { ReactElement } from 'react'
import { Page } from '../components/Page'

export const runtime = 'edge'

export async function GET(request: Request) {
  const ReactDOMServer = (await import('react-dom/server')).default

  return new Response(ReactDOMServer.renderToStaticMarkup(<Index />), {
    headers: {
      'content-type': 'text/html; charset=utf-8',
    },
    status: 200,
  })
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
          className='rounded p-10 bg-red-700 hover:bg-red-800 w-full'
        >
          Click Me
        </button>
        <article className='prose prose-invert max-w-none'>
          <p>
            My money's in that office, right? If she start giving me some
            bullshit about it ain't there, and we got to go someplace else and
            get it, I'm gonna shoot you in the head then and there. Then I'm
            gonna shoot that bitch in the kneecaps, find out where my goddamn
            money is. She gonna tell me too. Hey, look at me when I'm talking to
            you, motherfucker. You listen: we go in there, and that nigga
            Winston or anybody else is in there, you the first motherfucker to
            get shot. You understand?
          </p>

          <p>
            You think water moves fast? You should see ice. It moves like it has
            a mind. Like it knows it killed the world once and got a taste for
            murder. After the avalanche, it took us a week to climb out. Now, I
            don't know exactly when we turned on each other, but I know that
            seven of us survived the slide... and only five made it out. Now we
            took an oath, that I'm breaking now. We said we'd say it was the
            snow that killed the other two, but it wasn't. Nature is lethal but
            it doesn't hold a candle to man.
          </p>

          <p>
            The path of the righteous man is beset on all sides by the
            iniquities of the selfish and the tyranny of evil men. Blessed is he
            who, in the name of charity and good will, shepherds the weak
            through the valley of darkness, for he is truly his brother's keeper
            and the finder of lost children. And I will strike down upon thee
            with great vengeance and furious anger those who would attempt to
            poison and destroy My brothers. And you will know My name is the
            Lord when I lay My vengeance upon thee.
          </p>

          <p>
            Look, just because I don't be givin' no man a foot massage don't
            make it right for Marsellus to throw Antwone into a glass
            motherfuckin' house, fuckin' up the way the nigger talks.
            Motherfucker do that shit to me, he better paralyze my ass, 'cause
            I'll kill the motherfucker, know what I'm sayin'?
          </p>
        </article>
      </main>
    </Page>
  )
}

const Post = ({ request }: { request: Request }) => `${Date.now()} is the time!`
