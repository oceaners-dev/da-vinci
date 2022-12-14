import React from 'react';

export const renderUserInputIcon = (
  direction: 'before' | 'after',
  children: JSX.Element | string,
) => {
  return (
    <div
      className={`flex items-center relative box-border justify-center cursor-text pointer-events-none w-fit [&>*]:cursor-text [&>*]:pointer-events-none  z-10 ${
        direction === 'before' ? 'pr-[10px]' : 'pl-[10px]'
      }`}
    >
      {children}
    </div>
  );
};
