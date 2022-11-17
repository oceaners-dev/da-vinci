import { SVGProps } from 'react'

export function SvgExpandToRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 48 48" {...props}>
      <mask id="svgIDa">
        <g fill="none" strokeLinejoin="round" strokeWidth="4">
          <path
            fill="#fff"
            stroke="#fff"
            d="M6 9a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9Z"
          />
          <path
            stroke="#000"
            strokeLinecap="round"
            d="M32 6v36M16 20l4 4l-4 4"
          />
          <path stroke="#fff" strokeLinecap="round" d="M26 6h12M26 42h12" />
        </g>
      </mask>
      <path fill="currentColor" d="M0 0h48v48H0z" mask="url(#svgIDa)" />
    </svg>
  )
}
