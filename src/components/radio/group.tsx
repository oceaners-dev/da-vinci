import React, { forwardRef, useEffect, useState } from 'react';
import { RadioProps } from './Radio';

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  (props, ref) => {
    const {
      children, // ✅
      defaultValue, // ✅
      description, // ✅
      label, // ✅
      onChange, // ✅
      orientation, // ✅
      required, // TODO 🚨
      listClassName, // ✅,
      name, // ✅ TODO: needs test
    } = props;

    const [values, setValues] = useState<{ name: string; value: boolean }[]>(
      defaultValue ? defaultValue : [],
    );

    useEffect(() => {
      if (!values) return;
      if (onChange) {
        onChange(values);
      }
    }, [values]);

    const customChildren = React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(
          child as { key: string; props: RadioProps; type: string },
          {
            name: name,
            defaultChecked: defaultValue
              ? defaultValue.find((e) => e.name === child.props.name)?.value
              : values.find((e) => e.name === child.props.name)?.value,
            onChangeEvent: (e: React.ChangeEvent<HTMLInputElement>) => {
              const name = e.target.name;
              const value = e.target.checked;
              if (e.target.checked) {
                setValues((prev) => [...prev, { name, value }]);
              } else {
                setValues((prev) => prev.filter((v) => v.name !== name));
              }
            },
            // TODO: complete other functions
          },
        );
      }
      return child;
    });

    return (
      <div ref={ref} className="flex flex-col gap-2">
        {(label || description) && (
          <div className="flex flex-col">
            {label && (
              <label className="text-sm font-medium text-gray-700">
                {label}
              </label>
            )}
            {description && (
              <p className="text-sm text-gray-500">{description}</p>
            )}
          </div>
        )}
        <div
          className={`flex ${
            orientation === 'horizontal'
              ? 'flex-row  gap-4'
              : 'flex-col gap-[2px]'
          } ${listClassName || ''}`}
        >
          {customChildren}
        </div>
      </div>
    );
  },
);

RadioGroup.defaultProps = {
  orientation: 'vertical',
};

export interface RadioGroupProps {
  children: React.ReactNode;
  /**
   * The default value of the Radio group.
   * This value overrides the default value of the Radio.
   */
  defaultValue?: { name: string; value: boolean }[];
  description?: React.ReactNode;
  label?: React.ReactNode;
  listClassName?: React.HTMLAttributes<HTMLDivElement>['className'];
  /**
   * @description `HTML name attribute` for radio inputs.
   */
  name: string;
  onChange?: (value: { name: string; value: boolean }[]) => void;
  /**
   * If vertical, gap is 2px. If horizontal, gap is 4.
   */
  orientation?: 'horizontal' | 'vertical';
  required?: boolean;
}
