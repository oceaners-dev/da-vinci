import React, { useEffect, useId, useRef, useState } from 'react'
import { Card } from '../card-UNFINISHED/Card'
import { Collapse } from '../collapse/Collapse'

export interface FlyProps {
  bar: React.ReactNode
  children: React.ReactNode
}

const Fly: React.FunctionComponent<FlyProps> = (props) => {
  const { bar, children } = props
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const ref = useRef<HTMLDivElement>(null)
  const flyId = useId()

  useEffect(() => {
    if (position.x === 0 && position.y === 0) {
      const storedPosition = window.localStorage.getItem('fly-' + flyId)
      if (storedPosition) {
        const { x, y } = JSON.parse(storedPosition)
        setPosition({ x, y })
      }
    }
  }, [position])

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    const current = ref.current
    if (!current) return

    const startX = event.clientX - current.offsetLeft
    const startY = event.clientY - current.offsetTop

    const handleMouseMove = (event: MouseEvent) => {
      const newX = event.clientX - startX
      const newY = event.clientY - startY
      setPosition({ x: newX, y: newY })
      // save to localStorage
      window.localStorage.setItem(
        'fly-' + flyId,
        JSON.stringify({ x: newX, y: newY }),
      )

      event.stopPropagation()
      event.preventDefault()
    }

    document.addEventListener('mousemove', handleMouseMove)

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }

    document.addEventListener('mouseup', handleMouseUp)
  }

  return (
    <Card
      ref={ref} // @ts-ignore
      onMouseDown={handleMouseDown}
      className="!p-0 max-w-[250px] w-full"
      style={{
        left: position.x,
        position: 'fixed',
        top: position.y,
      }}
    >
      <Collapse
        classNames={{
          button: 'text-sm',
        }}
        label={<div>{bar}</div>}
      >
        {children}
      </Collapse>
    </Card>
  )
}

export { Fly }
