import { SVGProps } from 'react'

export function SvgSuccess(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        d="M16 2H8C4.691 2 2 4.691 2 8v13a1 1 0 0 0 1 1h13c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6zm-5 14.414l-3.707-3.707l1.414-1.414L11 13.586l4.793-4.793l1.414 1.414L11 16.414z"
        fill="currentColor"
      ></path>
    </svg>
  )
}

export function SvgError(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        d="M16 2H8C4.691 2 2 4.691 2 8v13a1 1 0 0 0 1 1h13c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6zm-3 16h-2v-2h2v2zm0-4h-2V6h2v8z"
        fill="currentColor"
      ></path>
    </svg>
  )
}

export function SvgWarning(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        d="M16 2H8C4.691 2 2 4.691 2 8v13a1 1 0 0 0 1 1h13c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6zm.706 13.293l-1.414 1.414L12 13.415l-3.292 3.292l-1.414-1.414l3.292-3.292l-3.292-3.292l1.414-1.414L12 10.587l3.292-3.292l1.414 1.414l-3.292 3.292l3.292 3.292z"
        fill="currentColor"
      ></path>
    </svg>
  )
}

export function SvgInfo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        d="M16 2H8C4.691 2 2 4.691 2 8v13a1 1 0 0 0 1 1h13c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6zm-2 13H7v-2h7v2zm3-4H7V9h10v2z"
        fill="currentColor"
      ></path>
    </svg>
  )
}

export const NotificationIcons = {
  success: <SvgSuccess className="text-[#4BB543] w-5 h-5" />,
  error: <SvgError className="text-red-600 w-5 h-5" />,
  warning: <SvgWarning className="text-[#FFCC00] w-5 h-5" />,
  info: <SvgInfo className="text-sky-600 w-5 h-5" />,
}
