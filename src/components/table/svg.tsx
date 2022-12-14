import React, { SVGProps } from 'react'

export function SvgSort(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M18.2 9.3L12 3L5.8 9.3c-.2.2-.3.4-.3.7s.1.5.3.7c.2.2.4.3.7.3h11c.3 0 .5-.1.7-.3c.2-.2.3-.5.3-.7s-.1-.5-.3-.7zM5.8 14.7L12 21l6.2-6.3c.2-.2.3-.5.3-.7s-.1-.5-.3-.7c-.2-.2-.4-.3-.7-.3h-11c-.3 0-.5.1-.7.3c-.2.2-.3.5-.3.7s.1.5.3.7z"
      ></path>
    </svg>
  )
}

export function SvgSearch(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <path
        fill="currentColor"
        d="M5 1a4 4 0 1 0 2.248 7.31l2.472 2.47a.75.75 0 1 0 1.06-1.06L8.31 7.248A4 4 0 0 0 5 1ZM2.5 5a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0Z"
      ></path>
    </svg>
  )
}
