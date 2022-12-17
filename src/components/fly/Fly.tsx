import React, { useRef, useState } from 'react'
import { useDrag, useDrop } from 'react-dnd'

export interface FlyProps {
  children: React.ReactNode
  id: string
  index: number
  isExpanded: boolean
  onExpand: (id: string) => void
  onMove: (id: string, toIndex: number) => void
}

const DraggableExpandable: React.FC<FlyProps> = ({
  id,
  index,
  isExpanded,
  onExpand,
  onMove,
  children,
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const [, drop] = useDrop({
    accept: 'card',
    hover(item: { id: string; index: number }, monitor) {
      if (!ref.current) {
        return
      }
      const dragIndex = item.index
      const hoverIndex = index
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current.getBoundingClientRect()
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      // Determine mouse position
      const clientOffset = monitor.getClientOffset() as { x: number; y: number }
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }
      // Time to actually perform the action
      onMove(item.id, hoverIndex)
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex
    },
  })
  const [{ isDragging }, drag] = useDrag({
    type: 'card',
    item: { type: 'card', id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })
  const [localIsExpanded, setLocalIsExpanded] = useState(isExpanded)
  const handleExpand = () => {
    setLocalIsExpanded((prevExpanded) => !prevExpanded)
    onExpand(id)
  }
  drag(drop(ref))
  return (
    <div
      ref={ref}
      className={
        'bg-white shadow rounded-l-4 py-2 px-2 flex items-center cursor-move hover:bg-gray-200 ' +
        (isDragging ? 'opacity-50' : '')
      }
    >
      <button
        onClick={handleExpand}
        className="px-2 py-1 rounded-full text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200"
      >
        {localIsExpanded ? '-' : '+'}
      </button>
      {children}
    </div>
  )
}

export { DraggableExpandable as Fly }
