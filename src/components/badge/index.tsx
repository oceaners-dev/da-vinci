import React from 'react'

export default function Badge(props: BadgeProps) {
  const { children, className, size, color, textColor, shape, style, type } =
    props

  const badgeColor = badgeStyle(type, color)
  const badgeSize =
    size === 'sm'
      ? 'text-xs leading-4 px-1 py-0.5'
      : size === 'md'
      ? ' text-sm px-2 py-1'
      : ' text-md px-4 py-2'
  return (
    <div
      className={`text box-content flex h-fit w-fit cursor-pointer items-center justify-center gap-2 font-semibold
      ${className || ' '}${badgeSize + ' '}${badgeColor + ' '}${
        shape === 'square'
          ? type === 'ghost'
            ? ''
            : 'border-classes '
          : 'rounded-full'
      }${' !' + textColor}`}
      style={style}
    >
      {children}
    </div>
  )
}

Badge.defaultProps = {
  size: 'md',
  shape: 'square',
  type: 'light',
  color: 'brand',
}
export interface BadgeProps {
  children?: React.ReactNode
  className?: React.HTMLAttributes<HTMLElement>['className']
  size?: 'sm' | 'md' | 'lg'
  shape: 'square' | 'circle'
  color?:
    | 'brand'
    | 'danger'
    | 'important'
    | 'informative'
    | 'severe'
    | 'subtle'
    | 'success'
    | 'warning'
  textColor?: string
  type: 'light' | 'ghost' | 'solid'
  style?: React.CSSProperties
}
// TODO:@fers4t @habibokumus #133 ui badge renk function optimize edilecek renkler yeni renkler ile değişecek
function badgeStyle(type, color) {
  if (type === 'light') {
    if (color === 'brand') {
      return ' bg-blue-100 text-blue-500 '
    }
    if (color === 'danger') {
      return ' bg-red-100 text-red-500 '
    }
    if (color === 'important') {
      return ' bg-black text-white '
    }
    if (color === 'informative') {
      return ' bg-gray-100 text-gray-500 '
    }
    if (color === 'severe') {
      return ' bg-pink-100 text-pink-500 '
    }
    if (color === 'subtle') {
      return ' bg-white text-black '
    }
    if (color === 'success') {
      return ' bg-gren-100 text-grenn-500 '
    }
    if (color === 'warning') {
      return ' bg-yellow-100 text-yellow-500 '
    }
  } else if (type === 'ghost') {
    if (color === 'brand') {
      return 'border-solid rounded-[4px] border border-blue-500 text-blue-500 '
    }
    if (color === 'danger') {
      return ' border-solid rounded-[4px] border border-red-500 text-red-500 '
    }
    if (color === 'important') {
      return ' border-solid rounded-[4px] border border-black text-black '
    }
    if (color === 'informative') {
      return ' border-solid rounded-[4px] border border-gray-500 text-gray-500 '
    }
    if (color === 'severe') {
      return ' border-solid rounded-[4px] border border-pink-500 text-pink-500 '
    }
    if (color === 'subtle') {
      return ' border-solid rounded-[4px] border border-white text-white '
    }
    if (color === 'success') {
      return ' border-solid rounded-[4px] border border-green-500 text-green-500'
    }
    if (color === 'warning') {
      return ' border-solid rounded-[4px] border border-yellow-500 text-yellow-500'
    }
  } else if (type === 'solid') {
    if (color === 'brand') {
      return ' bg-blue-500 text-white '
    }
    if (color === 'danger') {
      return ' bg-red-500 text-white '
    }
    if (color === 'important') {
      return ' bg-black text-white '
    }
    if (color === 'informative') {
      return ' bg-gray-500 text-white '
    }
    if (color === 'severe') {
      return ' bg-pink-500 text-white '
    }
    if (color === 'subtle') {
      return ' bg-white text-white '
    }
    if (color === 'success') {
      return ' bg-green-500 text-white '
    }
    if (color === 'warning') {
      return ' bg-yellow-500 text-white'
    }
  }
}
