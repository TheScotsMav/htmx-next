import type { ReactElement } from 'react'
import { Navigation } from './Navigation'

export function Header(): ReactElement {
  return (
    <header
      hx-boost='true'
      hx-swap='innerHTML transition:true'
      className='flex items-center gap-6 justify-end container py-4'
    >
      <Navigation />
    </header>
  )
}
