import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  DetailedHTMLProps,
} from 'react'

type HxSwap =
  | 'innerHTML'
  | 'outerHTML'
  | 'afterbegin'
  | 'afterend'
  | 'beforebegin'
  | 'beforeend'
  | 'delete'
  | 'none'

type SwapModifiers =
  | `transition:${boolean}`
  | `${'swap' | 'settle'}:${number}${'ms' | 's'}`
  | 'ignoreTitle:true'
  | `${'scroll' | 'show'}:${'top' | 'bottom'}`
  | `focus-scroll:${boolean}`

type HTMXBase = {
  'hx-boost'?: `${boolean}`
  'hx-on'?: string
  'hx-push-url'?: string
  'hx-select'?: string
  'hx-select-oob'?: string
  'hx-swap'?: HxSwap | `${HxSwap} ${SwapModifiers}`
  'hx-swap-oob'?: `${boolean}`
  'hx-target'?: string
  'hx-trigger'?: string
  'hx-vals'?: string
} & (
  | {
      'hx-get'?: string
    }
  | {
      'hx-post'?: string
    }
  | {
      'hx-put'?: string
    }
  | {
      'hx-patch'?: string
    }
  | {
      'hx-delete'?: string
    }
)

type HTMXAdditional = {
  'hx-confirm'?: string
  'hx-disable'?: string
  'hx-deiabled-elt'?: string
  'hx-disinherit'?: string
  'hx-encoding'?: string
  'hx-ext'?: string
  'hx-headers'?: string
  'hx-history'?: string
  'hx-history-elt'?: string
  'hx-include'?: string
  'hx-indicator'?: string
  'hx-params'?: string
  'hx-preserve'?: string
  'hx-prompt'?: string
  'hx-replace-url'?: string
  'hx-request'?: string
  'hx-sync'?: string
  'hx-validate'?: string
}

export type HTMX = HTMXBase & HTMXAdditional

export type LinkProps = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> &
  HTMX

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  HTMX
