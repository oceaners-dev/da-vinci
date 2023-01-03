/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useContext, useEffect, useState } from 'react'
import uuid from 'react-uuid'
import { createRoot } from 'react-dom/client'
import { Alert } from '../alert/Alert'
import useObjectState from './useObjectState'
import { ColorVariants } from '../../utils/types'

const useNotificationContext = () => useContext(NotificationContext)

const NotificationProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useObjectState<{
    bottomLeft?: HTMLElement
    bottomRight?: HTMLElement
    topLeft?: HTMLElement
    topRight?: HTMLElement
  }>({
    topLeft: undefined,
    topRight: undefined,
    bottomLeft: undefined,
    bottomRight: undefined,
  })

  const [notifications, setNotifications] = useState<Notification[]>([])

  useEffect(() => {
    if (!window) return

    notificationPosition.forEach((pst) => {
      const wrapperID = `notification-wrapper-${pst}`
      if (document.getElementById(wrapperID)) return

      const wrapperDiv = document.createElement('div')
      wrapperDiv.setAttribute('id', wrapperID)

      let wrapperClass = 'fixed w-fit z-100 flex flex-col gap-5 '
      switch (pst) {
        case 'topLeft':
          wrapperClass += 'top-dv-baseLoose left-dv-baseLoose'
          break

        case 'topRight':
          wrapperClass += 'top-dv-baseLoose right-dv-baseLoose'
          break

        case 'bottomLeft':
          wrapperClass += 'bottom-dv-baseLoose left-dv-baseLoose'
          break

        case 'bottomRight':
          wrapperClass += 'bottom-dv-baseLoose right-dv-baseLoose'
          break
        default:
          break
      }
      wrapperDiv.setAttribute('class', wrapperClass)
      document.body.appendChild(wrapperDiv)
      setState({ [pst]: wrapperDiv })
    })
  }, [])

  const addNotification = (notification: Notification) => {
    const allWrappersCreated =
      notificationPosition.filter((a) => {
        if (state[a]) return true
      }).length === notificationPosition.length

    if (!allWrappersCreated) {
      setTimeout(() => {
        addNotification(notification)
      }, 300)
    }
    const defaultValues = {
      duration: 4000,
      position: 'bottomRight',
    }
    const _notification = { ...defaultValues, ...notification }
    const { position } = _notification
    const wrapperDiv = state[position]
    if (!wrapperDiv) throw new Error('Invalid position')

    const id = uuid()
    const notificationDiv = document.createElement('div')
    notificationDiv.setAttribute('id', id)

    wrapperDiv.appendChild(notificationDiv)
    const root = createRoot(notificationDiv)
    root.render(
      <Alert
        content={notification.content}
        title={notification.title}
        data-position={notification.position}
        color={notificationColors[notification.type]}
        type={notification.type}
      />,
    )

    setNotifications((notifications) => [
      ...notifications,
      { ...notification, id },
    ])

    setTimeout(() => {
      removeNotification(notification)
      wrapperDiv.removeChild(notificationDiv)
      root.unmount()
    }, notification.duration)
  }

  const removeNotification = (notification: Notification) => {
    setNotifications((notifications) =>
      notifications.filter((n) => n.id !== notification.id),
    )
  }

  return (
    <NotificationContext.Provider
      value={{ notifications, addNotification, removeNotification }}
    >
      {children}
    </NotificationContext.Provider>
  )
}

export { NotificationProvider, useNotificationContext }

export interface Notification {
  content: string
  duration?: number
  id?: string
  position?: NotificationPosition
  title: string
  type: NotificationType
}

export type NotificationPosition =
  | 'topLeft'
  | 'topRight'
  | 'bottomLeft'
  | 'bottomRight'

const notificationPosition: NotificationPosition[] = [
  'topLeft',
  'topRight',
  'bottomLeft',
  'bottomRight',
]

const notificationColors: { [key in NotificationType]: ColorVariants } = {
  success: 'positive',
  error: 'negative',
  warning: 'warning',
  info: 'primary',
}

export type NotificationType = 'success' | 'error' | 'warning' | 'info'

interface NotificationContext {
  addNotification: (notification: Notification) => void
  notifications: Notification[]
  removeNotification: (notification: Notification) => void
}

const NotificationContext = createContext<NotificationContext>({
  notifications: [],
  addNotification: () => {},
  removeNotification: () => {},
})
