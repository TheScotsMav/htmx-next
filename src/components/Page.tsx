/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-head-element */
import type { Metadata } from 'next'
import '@/globals.css'

export function Page({
  metadata,
  children,
}: {
  metadata?: Metadata
  children: JSX.Element
}) {
  return (
    <html>
      <head>
        {metadata?.colorScheme && (
          <meta name='color-scheme' content={metadata.colorScheme} />
        )}
        {metadata?.description && (
          <meta name='description' content={metadata.description} />
        )}
        {metadata?.keywords && (
          <meta
            name='keywords'
            content={
              Array.isArray(metadata.keywords)
                ? metadata.keywords.join()
                : metadata.keywords
            }
          />
        )}
        {metadata?.title && <title>{metadata.title as string}</title>}
        <script src='htmx.min.js' defer></script>
        <link rel='stylesheet' href='global.css' />
      </head>
      <body>{children}</body>
    </html>
  )
}
