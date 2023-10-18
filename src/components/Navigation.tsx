import type { ReactElement } from 'react'

export function Navigation(): ReactElement {
  return (
    <nav
      hx-boost='true'
      hx-swap='innerHTML transition:true'
      className='flex items-center gap-6 justify-end container py-4'
    >
      <a href='/'>Home</a>
      <a href='/something'>Something</a>
    </nav>
  )
}
