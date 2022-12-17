import React, { forwardRef, useEffect, useState } from 'react'
import { ForwardRefWithStaticComponents } from '../../utils/ts/forward-ref-with-static-component'

export type TabsComponent = ForwardRefWithStaticComponents<
  TabProps,
  { Content: typeof Content }
>

export type TabProps = {
  /**
   * The active tab's label
   */
  active?: string
  onChange: (value: string) => void
  options: TabOption[]
}

export type TabOption = {
  [key: string]: any
  content?: React.ReactNode
  icon?: React.ReactNode
  label: string
}

const Tabs: TabsComponent = forwardRef<HTMLDivElement, TabProps>(
  (props, ref) => {
    const { active, options, onChange } = props
    const [activeOption, setActiveOption] = useState(
      active ? active : options[0].label,
    )

    useEffect(() => {
      if (!active) return
      setActiveOption(active)
    }, [active])

    return (
      <div ref={ref} className="relative w-fit">
        <div className="flex rounded bg-gray-100 w-fit p-1 gap-1">
          {options.map((option, index) => (
            <>
              <button
                key={option.label}
                className={
                  `w-fit px-3 py-1 text-sm text-gray-600 hover:text-black flex flex-row items-center gap-1 leading-[normal]` +
                  (activeOption === option.label ? ' bg-white rounded ' : '')
                }
                onClick={() => {
                  setActiveOption(option.label)
                  onChange(option.label)
                }}
              >
                {option.icon && (
                  <div className="[&>svg]:w-[1.3em] [&>svg]:h-[1.3em]">
                    {option.icon}
                  </div>
                )}
                {option.label}
              </button>
              {index < options.length - 1 && (
                <div className="h-auti w-[1px] bg-gray-300" />
              )}
            </>
          ))}
        </div>
      </div>
    )
  },
) as any

// TODO: Tabs.Content not working
const Content = ({
  active,
  children,
}: {
  active: string
  children: React.ReactNode
}) => {
  return <div />
}

Tabs.Content = Content

export { Tabs }
