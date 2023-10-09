const ReactDOMServer = (await import("react-dom/server")).default;

export async function GET(request: Request) {
    return new Response(ReactDOMServer.renderToStaticMarkup(<Index />), {
        headers: {
            "content-type": "text/html; charset=utf-8",
        },
        status: 200,
    });
}

export async function POST(request: Request) {
    return new Response(
        ReactDOMServer.renderToStaticMarkup(<PostRequest request={request} />),
        {
            headers: {
                "content-type": "text/html; charset=utf-8",
            },
            status: 200,
        }
    );
}

const Index = () => (
    <html>
        <head>
            <script src="https://unpkg.com/htmx.org@1.9.6" defer></script>
        </head>
        <body>
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                    <button hx-post="/" hx-swap="outerHTML transition:true">
                        Click Me
                    </button>
                </div>
            </main>
        </body>
    </html>
);

const PostRequest = ({ request }: { request: Request }) => (
    <button hx-post="/" hx-swap="outerHTML transition:true">
        {Date.now()}
    </button>
);
