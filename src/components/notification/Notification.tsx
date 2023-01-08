/* eslint-disable @typescript-eslint/no-empty-function */
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import uuid from 'react-uuid'
import { createRoot } from 'react-dom/client'
import { Alert } from '../alert/Alert'
import useObjectState from './useObjectState'
import { ColorVariants } from '../../utils/types'

const useNotificationContext = () => useContext(NotificationContext)

const NotificationProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useObjectState<{
    bottomCenter?: HTMLElement
    bottomLeft?: HTMLElement
    bottomRight?: HTMLElement
    topCenter?: HTMLElement
    topLeft?: HTMLElement
    topRight?: HTMLElement
  }>({
    bottomCenter: undefined,
    bottomLeft: undefined,
    bottomRight: undefined,
    topCenter: undefined,
    topLeft: undefined,
    topRight: undefined,
  })

  const [notifications, setNotifications] = useState<Notification[]>([])
  const [allWrappersCreated, setAllWrappersCreated] = useState<boolean>(false)

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

        case 'bottomCenter':
          wrapperClass += 'bottom-dv-baseLoose left-1/2 -translate-x-1/2'
          break

        case 'topCenter':
          wrapperClass += 'top-dv-baseLoose left-1/2 -translate-x-1/2'
          break

        default:
          break
      }
      wrapperDiv.setAttribute('class', wrapperClass)
      document.body.appendChild(wrapperDiv)
      setState({ [pst]: wrapperDiv })
    })
  }, [])

  useEffect(() => {
    //check if all wrappers are created
    const _allWrappersCreated =
      notificationPosition.filter((a) => {
        if (state[a]) return true
      }).length === notificationPosition.length

    setAllWrappersCreated(_allWrappersCreated)
  }, [state])

  const addNotification = useCallback(
    (notification: Notification) => {
      // wait for all wrappers to be created, then add notification
      let interval: NodeJS.Timeout | undefined
      if (!allWrappersCreated) {
        interval = setInterval(() => {
          if (allWrappersCreated) {
            clearInterval(interval)
            addNotification(notification)
          }
        }, 300)
        return console.log('waiting for all wrappers to be created...')
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
      }, _notification.duration)
    },
    [allWrappersCreated],
  )

  const removeNotification = (notification: Notification) => {
    setNotifications((notifications) =>
      notifications.filter((n) => n.id !== notification.id),
    )
  }

  return (
    <NotificationContext.Provider
      value={{ addNotification, notifications, removeNotification }}
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
  | 'bottomCenter'
  | 'topCenter'
  | 'bottomLeft'
  | 'bottomRight'

const notificationPosition: NotificationPosition[] = [
  'topLeft',
  'topRight',
  'bottomCenter',
  'topCenter',
  'bottomLeft',
  'bottomRight',
]

const notificationColors: { [key in NotificationType]: ColorVariants } = {
  error: 'negative',
  info: 'primary',
  success: 'positive',
  warning: 'warning',
}

export type NotificationType = 'success' | 'error' | 'warning' | 'info'

interface NotificationContext {
  addNotification: (notification: Notification) => void
  notifications: Notification[]
  removeNotification: (notification: Notification) => void
}

const NotificationContext = createContext<NotificationContext>({
  addNotification: () => {},
  notifications: [],
  removeNotification: () => {},
})
