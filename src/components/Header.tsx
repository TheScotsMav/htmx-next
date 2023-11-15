import type { ReactElement } from 'react'
import { Navigation } from './Navigation'

export function Header(): ReactElement {
  return (
    <header
      hx-boost='true'
      hx-swap='innerHTML transition:true'
      className='container flex items-center justify-end gap-6 py-4'
    >
      <Navigation />
    </header>
  )
}
