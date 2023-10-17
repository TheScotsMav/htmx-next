import type { ReactElement } from "react";
import { Page } from "../components/Page";

export const runtime = "edge";

export async function GET(request: Request) {
    const ReactDOMServer = (await import("react-dom/server")).default;

    return new Response(ReactDOMServer.renderToStaticMarkup(<Index />), {
        headers: {
            "content-type": "text/html; charset=utf-8",
        },
        status: 200,
    });
}

export async function POST(request: Request) {
    const ReactDOMServer = (await import("react-dom/server")).default;

    return new Response(
        ReactDOMServer.renderToStaticMarkup(<Post request={request} />),
        {
            headers: {
                "content-type": "text/html; charset=utf-8",
            },
            status: 200,
        }
    );
}

function Index(): ReactElement {
    return (
        <Page>
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <button hx-post="/" hx-swap="outerHTML transition:true">
                    Click Me
                </button>
            </main>
        </Page>
    );
}

const Post = ({ request }: { request: Request }) => (
    <button hx-post="/" hx-swap="outerHTML transition:true">
        {Date.now()} is the time!
    </button>
);
