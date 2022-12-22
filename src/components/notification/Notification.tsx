import React, { useCallback } from 'react'
import { Alert } from '../alert/Alert'
import { ToastProps } from './Provider'
import { NotificationIcons } from './svg'

export function NotificationCard({
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
    <Alert
      content={data.content}
      title={data.title}
      classNames={{
        // TODO: Share classNames between Notification and Alert
        wrapper: data.className,
      }}
      icon={data.icon ? data.icon : NotificationIcons[data.type]}
      onClose={closeNotification}
      withCloseButton={true}
      color={
        // TODO: notification colors are not safe
        data.type === 'success'
          ? 'positive'
          : data.type === 'error'
          ? 'negative'
          : data.type === 'info'
          ? 'tertiary'
          : 'warning'
      }
    />
  )
}
