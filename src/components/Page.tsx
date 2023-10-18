/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-head-element */
import type { Metadata } from 'next'
import '@/globals.css'
import { Navigation } from './Navigation'
import { Header } from './Header'

export function Page({
  metadata,
  children,
}: {
  metadata?: Metadata
  children: JSX.Element
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
      </head>
      <body className='flex min-h-screen flex-col items-center'>
        <Header />
        {children}
      </body>
    </html>
  )
}
