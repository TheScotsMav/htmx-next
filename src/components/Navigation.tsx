export function Navigation(): JSX.Element {
  return (
    <nav
      hx-boost='true'
      hx-swap='innerHTML transition:true'
      className='flex items-center gap-3 justify-end container py-4'
      preload='mousedown'
    >
      <a href='/'>Home</a>
      <a href='/something'>Something</a>
    </nav>
  )
}
