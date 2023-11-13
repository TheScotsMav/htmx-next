/* eslint-disable @next/next/no-head-element */
import type { Metadata } from 'next'
import { Header } from './Header'
import type { ReactElement } from 'react'

console.log()

export function Page({
  metadata,
  children,
}: {
  metadata?: Metadata
  children?: ReactElement | JSX.Element | JSX.Element[]
}) {
  return (
    <html className='bg-gray-950 text-gray-100'>
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
        <link rel='stylesheet' href='global.css' />
        <script src='htmx.min.js' defer />
        <script
          src='https://unpkg.com/htmx.org/dist/ext/preload.js'
          defer
        ></script>
      </head>
      <Body>{children}</Body>
    </html>
  )
}

export function Body({ children }: { children?: JSX.Element | JSX.Element[] }) {
  return (
    <body hx-ext='preload' className='flex min-h-screen flex-col items-center'>
      <Header />
      {children}
    </body>
  )
}
