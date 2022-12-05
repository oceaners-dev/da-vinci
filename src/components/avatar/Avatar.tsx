import chroma from 'chroma-js';
import React, { useEffect, useState } from 'react';
import colors from 'tailwindcss/colors';

// TODO: #134 Use Avatar with next/image or similar (Link)
// TODO: Color calculations need contrast check.

export function Avatar(props: AvatarProps) {
  const {
    alt, // ✅
    bgClassName, // ✅
    className, // 🚨
    size, // ✅ / 🚨
    radius, // ✅
    imgSrc, // ✅
    value, // ✅
    randomColor, // 🚨
    withBorder, // ✅
  } = props;

  // type checkings
  if (value && imgSrc) {
    throw new Error(
      'You are using name and imgSrc props together. You can use only one of them.',
    );
  }

  // states
  const [bgHexColor, setBgHexColor] = useState<string>();
  const [colorPalette, setColorPalette] = useState<string[]>();

  // effects
  useEffect(() => {
    // get hex color
    if (!bgClassName) return;
    if (bgClassName.startsWith('#')) {
      setBgHexColor(bgClassName.replace('#', ''));
    }
    if (bgClassName.includes('-')) {
      const colorFamily = bgClassName.split('-')[0];
      const colorNumber = bgClassName.split('-')[1];

      // @ts-ignore
      const hex = colors[colorFamily][colorNumber];
      if (hex && hex.startsWith('#')) {
        setBgHexColor(hex.replace('#', ''));
      } else {
        console.warn(
          'Color not found. Please check your color name. (Example: green-500',
        );
      }
    }
  }, []);

  useEffect(() => {
    // create color palette to get right color for text. run only if it's text
    if (!bgHexColor) return;
    const isLight = (chroma('#' + bgHexColor).luminance() as number) > 0.5;
    const palette = isLight
      ? chroma.scale(['#' + bgHexColor, 'black']).colors(12)
      : chroma.scale(['#' + bgHexColor, 'white']).colors(12);

    setColorPalette(palette);
  }, [bgHexColor]);

  // classNames
  const borderRadius = `rounded-${radius}`;
  const avatarSize = `h-${size} w-${size}`;
  const hasBorder = withBorder ? `outline` : '';

  return (
    <>
      {/* {colorPalette && (
        <div className="flex flex-row items-center gap-1">
          {colorPalette.map((color) => {
            return (
              <div
                key={uuid()}
                className="w-5 h-5 flex relative"
                style={{
                  backgroundColor: color,
                }}
              />
            );
          })}
        </div>
      )} */}
      <div
        className={
          `text-semibold flex cursor-pointer items-center justify-center overflow-hidden box-border` +
          (avatarSize ? ' ' + avatarSize : '') +
          (borderRadius ? ' ' + borderRadius : '') +
          (hasBorder ? ' ' + hasBorder : '') +
          (className ? ' ' + className : '')
        }
        style={{
          backgroundColor: bgHexColor && '#' + bgHexColor, // @ts-ignore
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
  );
}

Avatar.defaultProps = {
  bgClassName: 'green-500',
  radius: 'lg',
  size: '8',
};
export interface AvatarProps {
  /**
   * Enter value for `alt` attribute of `img` tag. Use it if you are using `imgSrc` prop.
   */
  alt?: string;
  /**
   * Enter value for `bg-*` class.
   * Also, you can pass `HEX` value like `#000000` or `#fff`
   * Example: `red-500
   * @default "green-500"
   */
  bgClassName?: string;
  className?: React.HTMLAttributes<HTMLElement>['className'];
  imgSrc?: string;
  /**
   * Enter value for `rounded-*` class. Default value is `md`. You can't add px values.
   * @default "md"
   */
  radius?: string;
  randomColor?: boolean;
  /**
   * Enter value for `h-*` and `w-*` class.
   * @default "8"
   */
  size?: string;
  /**
   * We will parse the string and get the `first letter of first two words`. If it's only one word, `we will get the first two letters`.
   */
  value?: string;
  /**
   * Adds a border to the avatar with the same color as the text's color
   */
  withBorder?: boolean;
}

function getLetters(name: string) {
  const words = name.split(' ');
  if (words.length === 1) {
    return name.slice(0, 2).toUpperCase();
  } else {
    return words[0][0] + words[1][0];
  }
}
