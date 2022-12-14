/* eslint-disable react/no-unknown-property */
import chroma from 'chroma-js';
import React, { useEffect, useId, useState } from 'react';
import { SvgX } from '../../utils/svg';
import { Card } from '../card-UNFINISHED/Card';
import { NotificationIcons } from '../notification/svg';

export interface AlertProps {
  className?: string;
  /**
   * Must be a `HEX` value with #.
   * @example #010101
   */
  color?: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
  onClose?: () => void;
  title: React.ReactNode;
  withCloseButton?: boolean;
}

const Alert: React.FunctionComponent<AlertProps> = (props) => {
  const {
    className, // ✅
    color, // ✅
    content, // ✅
    icon, // ✅ TODO: add html support
    onClose, // ✅
    title, // ✅
    withCloseButton, // ✅
    ...rest
  } = props;

  const id = useId().replaceAll(':', '');

  const [bgColor, setBgColor] = useState<string>();

  useEffect(() => {
    if (!color) return;
    setBgColor(chroma.scale([color, 'white']).colors(12)[10]);
  }, [color]);

  return (
    <Card
      className={`min-w-[300px] !w-fit ${className || ''}`}
      style={{
        backgroundColor: bgColor,
      }}
      {...rest}
    >
      <div className="w-full h-fit flex flex-row items-start gap-5 alert">
        <div className={`leading-none text-lg ${id}`}>
          {/* @ts-ignore */}
          <style jsx>{`
            .${id} svg {
              color: ${color} !important;
            }
          `}</style>
          {icon ? icon : NotificationIcons['error']}
        </div>
        <div className="flex flex-col gap-1 w-full">
          <div className="flex flex-row items-center justify-between w-full">
            <div
              className="leading-none font-semibold text-base"
              style={{
                color: color,
              }}
            >
              {title}
            </div>
            {withCloseButton && (
              <button
                onClick={() => {
                  onClose && onClose();
                }}
              >
                <SvgX className="w-4 h-4" />
              </button>
            )}
          </div>
          <div className="text-sm">{content}</div>
        </div>
      </div>
    </Card>
  );
};

Alert.defaultProps = {
  color: '#DC2626',
};

export { Alert };
