/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-head-element */
import type { Metadata } from "next";

export function Page({
    metadata,
    children,
}: {
    metadata?: Metadata;
    children: JSX.Element;
}) {
    return (
        <html>
            <head>
                {metadata?.colorScheme && (
                    <meta name="color-scheme" content={metadata.colorScheme} />
                )}
                {metadata?.description && (
                    <meta name="description" content={metadata.description} />
                )}
                {metadata?.keywords && (
                    <meta
                        name="keywords"
                        content={
                            Array.isArray(metadata.keywords)
                                ? metadata.keywords.join()
                                : metadata.keywords
                        }
                    />
                )}
                {metadata?.title && <title>{metadata.title as string}</title>}
                <script src="https://unpkg.com/htmx.org@1.9.6" defer></script>
                <script src="https://cdn.tailwindcss.com" defer></script>
            </head>
            <body>{children}</body>
        </html>
    );
}
