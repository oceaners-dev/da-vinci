import chroma from 'chroma-js'
import React, { useEffect, useState } from 'react'
import { ColorVariants } from '../../utils/types'

// TODO: #134 Use Avatar with next/image or similar (Link)
// TODO: Color calculations need contrast check.

export function Avatar(props: AvatarProps) {
  const {
    alt, // ✅
    className, // 🚨
    color = 'primary',
    size, // ✅ / 🚨
    radius, // ✅
    imgSrc, // ✅
    value, // ✅
    randomColor, // ✅
    withBorder, // ✅
  } = props

  // type checkings
  if (value && imgSrc) {
    throw new Error(
      'You are using name and imgSrc props together. You can use only one of them.',
    )
  }

  // states
  const [bgHexColor, setBgHexColor] = useState<string>()
  const [colorPalette, setColorPalette] = useState<string[]>()

  // effects

  useEffect(() => {
    // create color palette to get right color for text. run only if it's text
    if (!color || !document) return
    const bgHex = document.documentElement.style.getPropertyValue(
      `--da-vinci-colors-${color}-base`,
    )
    if (!randomColor) {
      if (bgHex !== '') {
        setBgHexColor(bgHex)
        const isLight = (chroma(bgHex).luminance() as number) > 0.5
        const palette = isLight
          ? chroma.scale([bgHex, 'black']).colors(12)
          : chroma.scale([bgHex, 'white']).colors(12)

        setColorPalette(palette)
      }
    } else {
      const randomHex = chroma.random()
      setBgHexColor(randomHex)
      const isLight = (chroma(randomHex).luminance() as number) > 0.5
      const palette = isLight
        ? chroma.scale([randomHex, 'black']).colors(12)
        : chroma.scale([randomHex, 'white']).colors(12)

      setColorPalette(palette)
    }
  }, [color, randomColor])

  // classNames
  const borderRadius = `rounded-${radius}`
  const avatarSize = `h-${size} w-${size}`
  const hasBorder = withBorder ? `outline` : ''

  return (
    <>
      <div
        className={
          `text-semibold flex cursor-pointer items-center justify-center overflow-hidden box-border` +
          (avatarSize ? ' ' + avatarSize : '') +
          (borderRadius ? ' ' + borderRadius : '') +
          (hasBorder ? ' ' + hasBorder : '') +
          (className ? ' ' + className : '')
        }
        style={{
          backgroundColor: bgHexColor && bgHexColor, // @ts-ignore
          color: colorPalette && colorPalette[6],
        }}
      >
        {value && getLetters(value)}
        {imgSrc && (
          <img
            src={imgSrc}
            alt={alt || 'avatar'}
            className={`h-full w-full object-cover object-center ${borderRadius}`}
          />
        )}
      </div>
    </>
  )
}

Avatar.defaultProps = { color: 'primary', radius: 'lg',
  size: '8',
}
export interface AvatarProps {
  /**
   * Enter value for `alt` attribute of `img` tag. Use it if you are using `imgSrc` prop.
   */
  alt?: string
  /**
   * Enter value for `bg-*` class.
   * Also, you can pass `HEX` value like `#000000` or `#fff`
   * Example: `red-500
   * @default "green-500"
   */
  bgClassName?: string
  className?: React.HTMLAttributes<HTMLElement>['className']
  color?: ColorVariants
  imgSrc?: string
  /**
   * Enter value for `rounded-*` class. Default value is `md`. You can't add px values.
   * @default "md"
   */
  radius?: string
  randomColor?: boolean
  /**
   * Enter value for `h-*` and `w-*` class.
   * @default "8"
   */
  size?: string
  /**
   * We will parse the string and get the `first letter of first two words`. If it's only one word, `we will get the first two letters`.
   */
  value?: string
  /**
   * Adds a border to the avatar with the same color as the text's color
   */
  withBorder?: boolean
}

function getLetters(name: string) {
  const words = name.split(' ')
  if (words.length === 1) {
    return name.slice(0, 2).toUpperCase()
  } else {
    return words[0][0] + words[1][0]
  }
}
