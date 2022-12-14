import React, { SVGProps } from 'react'

export function SvgCalendarOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <path
        fill="currentColor"
        d="M3 5.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0ZM3.5 7a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1ZM5 5.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0ZM5.5 7a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1ZM7 5.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0Zm-6-2A2.5 2.5 0 0 1 3.5 1h5A2.5 2.5 0 0 1 11 3.5v5A2.5 2.5 0 0 1 8.5 11h-5A2.5 2.5 0 0 1 1 8.5v-5ZM3.5 2a1.5 1.5 0 0 0-1.415 1h7.83A1.5 1.5 0 0 0 8.5 2h-5ZM10 4H2v4.5A1.5 1.5 0 0 0 3.5 10h5A1.5 1.5 0 0 0 10 8.5V4Z"
      />
    </svg>
  )
}
