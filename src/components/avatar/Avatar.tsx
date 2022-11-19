import React from 'react';

// TODO: #134 UI Avatar component in used next image

export function Avatar(props: AvatarProps) {
  const {
    children,
    className,
    size,
    shape,
    srcImg,
    color,
    name,
    textColor,
    randomColor,
    style,
  } = props;
  const avatarSize = AvatarSize(size as string);

  return (
    <div
      className={`text-semibold box-content flex cursor-pointer items-center justify-center 
      ${className || ' '}${avatarSize + ' '}${
        shape === 'square' ? 'border-classes ' : 'rounded-full '
      }${textColor + ' '}${
        randomColor ? avatarColor[colorKey(randomColor)] : color
      }`}
      style={style}
    >
      {children}
      {!srcImg && !children && name && NameFirstandLastName(name)}
      {!children && srcImg && (
        <img
          src={srcImg}
          alt="avatar"
          className={`h-full w-full object-cover object-center 
      ${shape === 'square' ? 'border-classes ' : 'rounded-full '}`}
        />
      )}
    </div>
  );
}
/**
 * @typedef {Object} AvatarProps
 * @property {string} [size] - Size of the avatar (default: md)
 * @property {string} [shape] - Shape of the avatar (default: circle)
 * @property {string} [color] - Color of the avatar (default: bg-gray-700)
 * @property {string} [textColor] - Text color of the avatar (default: text-white)
 * @property {string} [srcImg] - Image source of the avatar
 * @property {string} [name] - Name of the avatar
 */

Avatar.defaultProps = {
  size: 'default',
  shape: 'square',
  color: 'bg-gray-700',
  textColor: 'text-white',
};
export interface AvatarProps {
  children?: React.ReactNode;
  className?: React.HTMLAttributes<HTMLElement>['className'];
  color?: string;
  name?: string;
  randomColor?: number;
  shape: 'square' | 'circle';
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'default';
  srcImg?: string;
  style?: React.CSSProperties;
  textColor?: string;
}

// Todo: Color palete uygun hale getirilecek

const avatarColor = [
  'bg-pink-500',
  'bg-gray-800',
  'bg-yellow-800',
  'bg-purple-500',
  'bg-green-800',
  'bg-indigo-500',
  'bg-pink-800',
  'bg-indigo-800',
  'bg-purple-800',
  'bg-red-500',
  'bg-green-500',
  'bg-gray-500',
  'bg-blue-800',
  'bg-yellow-500',
  'bg-blue-500',
  'bg-red-800',
  'bg-red-300',
  'bg-yellow-300',
  'bg-green-300',
  'bg-blue-300',
  'bg-indigo-300',
  'bg-purple-300',
  'bg-pink-300',
  'bg-gray-300',
];
function AvatarSize(value: string) {
  switch (value) {
    case '2xl':
      return ' w-24 h-24 text-[32px]';
    case 'xl':
      return ' w-20 h-20 text-[32px]';
    case 'lg':
      return ' w-16 h-16 text-[24px]';
    case 'md':
      return ' w-12 h-12 text-[20px]';
    case 'sm':
      return ' w-8 h-8 text-[16px]';
    case 'xs':
      return ' w-6 h-6 text-[14px]';
    case 'xxs':
      return ' w-5 h-5 text-[12px]';
    default:
      return ' w-10 h-10 text-[18px]';
  }
}
function NameFirstandLastName(name: string) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();
}
function colorKey(value: number) {
  const arrayLength = avatarColor.length - 1;
  if (value > arrayLength) {
    return value % arrayLength;
  }
  return value;
}
