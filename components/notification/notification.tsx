import React, { useCallback } from 'react'
import { SvgX } from '../../utils/svg'
import { Card } from '../card-UNFINISHED/Card'
import { ToastProps } from './provider'
import { NotificationIcons } from './svg'

export default function NotificationCard({
  data,
  id,
}: {
  data: ToastProps
  id: string
}) {
  const closeNotification = useCallback(() => {
    return document.querySelector('[data-id="' + id + '"]')?.remove()
  }, [])

  return (
    <Card className={`min-w-[300px] ${data.className}`}>
      <div className="w-full h-fit flex flex-row items-start gap-5">
        <div className="leading-none text-lg">
          {data.icon ? data.icon : NotificationIcons[data.type]}
        </div>
        <div className="flex flex-col gap-1 w-full">
          <div className="flex flex-row items-center justify-between w-full">
            <div className="leading-none font-semibold text-base">
              {data.title}
            </div>
            <button
              onClick={() => {
                closeNotification()
              }}
            >
              <SvgX className="w-4 h-4" />
            </button>
          </div>
          <div className="text-sm">{data.content}</div>
        </div>
      </div>
    </Card>
  )
}
