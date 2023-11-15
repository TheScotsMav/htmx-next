export function ToggleView(props: { hidden?: boolean }) {
  const hidden = props.hidden ?? false
  return (
    <>
      <div className='container flex items-center justify-center gap-3 py-4'>
        <ToggleButton hidden={hidden} />
      </div>
      <ToggleDiv hidden={hidden} />
    </>
  )
}

export function ToggleButton(props: { hidden?: boolean }) {
  const newParams = new URLSearchParams({
    hidden: props.hidden ? 'false' : 'true',
  } satisfies {
    hidden: 'true' | 'false'
  })
  return (
    <button
      id='toggle'
      className='rounded bg-red-300 p-6 text-red-900'
      hx-get={`/api/toggle?${newParams.toString()}`}
      hx-swap='outerHTML'
      preload='mouseover'
    >
      Swap?
    </button>
  )
}

export function ToggleDiv(props: { hidden?: boolean; outOfBand?: boolean }) {
  const hidden = props.hidden ?? false
  let outOfBand = props.outOfBand ?? false
  return (
    <div
      id='modal'
      hx-swap-oob={outOfBand ? 'true' : undefined}
      className={`${
        hidden
          ? 'scale-0 opacity-0'
          : 'scale-100 rounded bg-red-300 p-6 text-red-900 opacity-100'
      } transition duration-500 ease-in-out`}
    >
      {`${hidden ? '' : 'swap swap swap'}`}
    </div>
  )
}
