import { Link } from './ui/Link'

export function Navigation(): JSX.Element {
  return (
    <nav
      hx-boost='true'
      hx-swap='innerHTML transition:true'
      className='container flex items-center justify-end gap-3 py-4'
      //@ts-expect-error
      preload='mousedown'
    >
      <Link href='/'>Home</Link>
      <Link href='/something'>Something</Link>
    </nav>
  )
}
