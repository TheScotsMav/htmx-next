import { ReactElement } from 'react'

export function ToggleView(props: { hidden?: boolean }): ReactElement {
  const hidden = props.hidden ?? false
  return (
    <>
      <div className='flex items-center gap-3 justify-center container py-4'>
        <ToggleButton hidden={hidden} />
      </div>
      <ToggleDiv hidden={hidden} />
    </>
  )
}

export function ToggleButton(props: { hidden?: boolean }): ReactElement {
  const newParams = new URLSearchParams({
    hidden: props.hidden ? 'false' : 'true',
  } satisfies {
    hidden: 'true' | 'false'
  })
  return (
    <button
      className='rounded p-6 bg-red-300 text-red-900'
      hx-get={`/api/toggle?${newParams.toString()}`}
      hx-swap='outerHTML'
      preload='mouseover'
    >
      Swap?
    </button>
  )
}

export function ToggleDiv(props: {
  hidden?: boolean
  outOfBand?: boolean
}): ReactElement {
  const hidden = props.hidden ?? false
  let outOfBand = props.outOfBand ?? false
  return (
    <div
      id='modal'
      hx-swap-oob={outOfBand ? 'true' : undefined}
      className={`${
        hidden ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
      } rounded p-6 bg-red-300 text-red-900 transition duration-500 ease-in-out`}
    >
      Swap swap swap
    </div>
  )
}
