import React, { useState } from 'react'

interface CollapseProps {
  children?: React.ReactNode
  classNames?: {
    button?: string
    wrapper?: string
  }
  label: React.ReactNode
}

const Collapse: React.FC<CollapseProps> = ({
  label,
  classNames = {
    button: '',
    wrapper: '',
  },
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className={'relative px-4 py-2 flex flex-col gap-4 ' + classNames.wrapper}
    >
      <button
        className={
          'flex flex-row items-center justify-between gap-2 w-full ' +
          classNames.button
        }
      >
        {label}
        <svg
          onClick={() => setIsOpen(!isOpen)}
          className="w-4 h-4"
          viewBox="0 0 20 20"
          fill="currentColor"
          style={{ transform: `rotate(${isOpen ? 180 : 0}deg)` }}
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && <div>{children}</div>}
    </div>
  )
}

export { Collapse }
