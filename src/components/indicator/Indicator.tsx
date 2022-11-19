import React from 'react';

export function Indicator(props: IndicatorProps) {
  const {
    children,
    className,
    size,
    shape,
    style,
    textColor,
    randomColor,
    borderColor,
    position,
    overflowCount,
    bgColor,
    count,
    text,
    dot,
  } = props;
  // TODO: #135 Dot Position asimetrict @habibokumus
  return (
    <div className="relative w-fit">
      {children}
      <div
        className={`absolute text-sm leading-3
        ${className || ' '}
        ${shape === 'square' ? 'border-classes ' : 'rounded-full '}
        ${textColor + ' '}
        ${size ? BadgeSize(size as string) : ''}
        ${borderColor + ' '}
        ${position ? BadgePosition(position) : ''}
        ${bgColor + ' '}
        ${randomColor ? avatarColor[colorKey(randomColor as number)] : ''}`}
        style={style}
      >
        {overflowCount
          ? BadgeOverflowCount(overflowCount as number, count as number)
          : count
          ? count
          : text}
      </div>
    </div>
  );
}

Indicator.defaultProps = {
  size: 'md',
  shape: 'circle',
  bgColor: 'bg-gray-700',
  textColor: 'text-white',
  borderColor: 'border-white',
  position: 'top-left',
};

export interface IndicatorProps {
  bgColor?: string;
  borderColor?: string;
  children?: React.ReactNode;
  className?: React.HTMLAttributes<HTMLElement>['className'];
  count?: number;
  dot?: boolean;
  overflowCount?: number;
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  randomColor?: number;
  shape: 'square' | 'circle';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  style?: React.CSSProperties;
  text?: string;
  textColor?: string;
}

const BadgePosition = (
  value: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right',
) => {
  switch (value) {
    case 'top-right':
      return '-top-[12%] -right-[15%] translate-x-[15%] -translate-y-[10%]';
    case 'bottom-left':
      return '-bottom-[12%] -left-[15%] -translate-x-[15%] -translate-y-[10%]';
    case 'bottom-right':
      return '-bottom-[12%] -right-[15%] translate-x-[15%] -translate-y-[10%]';
    default:
      return '-top-[12%] -left-[15%] -translate-x-[15%] -translate-y-[10%]';
  }
};
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

const BadgeSize = (value: string) => {
  switch (value) {
    case 'sm':
      return 'text-[9px] leading-[9px] border-[1px] border-solid px-[3px] py-[1px] ';
    case 'lg':
      return 'text-[16px] leading-[16px] border-[1px] border-solid px-[6px] py-[2px] ';
    default:
      return 'text-[12px] leading-[12px] border-[1px] border-solid px-[4px] py-[1px]';
  }
};

const BadgeOverflowCount = (overflowCount: number, count: number) => {
  if (count > overflowCount) {
    return `${overflowCount}+`;
  }
  return count;
};

const colorKey = (value: number) => {
  const arrayLength = avatarColor.length - 1;
  if (value > arrayLength) {
    return value % arrayLength;
  }
  return value;
};
