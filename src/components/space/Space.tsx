import React from 'react'
export function Space(props: SpaceProps) {
  const { spacing, direction } = props

  const spaceStyle = spacing
    ? direction === 'vertical'
      ? { height: `${spacing}px` }
      : { width: `${spacing}px` }
    : {}

  return (
    <div
      className={`${
        !spacing
          ? direction === 'vertical'
            ? 'h-dv-baseLoose w-[-webkit-fill-available]'
            : 'w-dv-baseLoose h-auto'
          : ''
      }`}
      style={spaceStyle}
    />
  )
}

Space.defaultProps = {
  direction: 'vertical',
}

interface SpaceProps {
  direction?: 'horizontal' | 'vertical'
  spacing?: number
}
