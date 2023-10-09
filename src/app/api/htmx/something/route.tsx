const ReactDOMServer = (await import("react-dom/server")).default;

export async function POST(request: Request) {
    return new Response(ReactDOMServer.renderToStaticMarkup(something()), {
        headers: {
            "content-type": "text/html; charset=utf-8",
        },
        status: 200,
    });
}

const something = () => <div className="penis">something</div>;
