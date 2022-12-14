import React, { useEffect, useRef, useState } from 'react'
import Cookie from 'cookie-universal'
const cookies = Cookie()
import { createRoot } from 'react-dom/client'
import { useIsomorphicEffect } from '../../hooks/useIsomorphicEffect'
import uuid from 'react-uuid'
import { NotificationCard } from './Notification'

// TODO: add jsx support: https://stackoverflow.com/a/70464490
export function NotificationProvider({
  defaultSettings = {
    error: {
      duration: 3000,
      title: 'Error',
      position: 'top',
    },
    info: {
      duration: 3000,
      title: 'Info',
      position: 'top',
    },
    success: {
      duration: 3000,
      title: 'Success',
      position: 'top',
    },
    warning: {
      duration: 3000,
      title: 'Warning',
      position: 'top',
    },
  },
}: {
  defaultSettings?: NotificationTypeDefaults
}) {
  const [latestCookie, setLatestCookie] = useState<ToastProps | null>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [isWrapperCreated, setIsWrapperCreated] = useState<boolean>(false)

  if (
    JSON.stringify(defaultSettings) !==
    JSON.stringify(cookies.get('da-vinci-notification-settings'))
  ) {
    cookies.set(
      'da-vinci-notification-settings',
      JSON.stringify(defaultSettings),
      {
        path: '/',
        sameSite: true,
        encode: (value) => value,
      },
    )
  }

  useIsomorphicEffect(() => {
    document.addEventListener('cookiechange', () => {
      // TODO: trigger notif.
      const currentCookie = cookies.get('da-vinci-notification', {
        parseJSON: true,
      })
      setLatestCookie(currentCookie)
    })
  })

  useEffect(() => {
    if (!document || !wrapperRef.current) return
    if (isWrapperCreated) return

    document.body.appendChild(wrapperRef.current)

    setIsWrapperCreated(true)
  }, [isWrapperCreated, wrapperRef.current])

  // useEffect(() => {
  //   if (!window) return
  // }, [])

  useEffect(() => {
    if (!latestCookie || Object.entries(latestCookie).length === 0) return
    if (!isWrapperCreated) return
    const div = wrapperRef.current
    if (!div) return

    let innerWrapper = document.querySelector(
      `[data-position="${latestCookie.position}"]`,
    )
    if (!innerWrapper) {
      innerWrapper = document.createElement('div')
      innerWrapper.setAttribute('data-position', latestCookie.position!)

      // TODO: add default styles setting to wrapper
      // TODO: optimize css 👇🏻 (take normal css classes, parse it with position)
      innerWrapper.className =
        'flex flex-col gap-5 fixed w-fit z-100' +
        ' ' +
        'data-[position=bottom]:bottom-hf-side-padding data-[position=bottom]:left-1/2 data-[position=bottom]:-translate-x-1/2' +
        ' ' +
        'data-[position=top]:top-hf-side-padding data-[position=top]:left-1/2 data-[position=top]:-translate-x-1/2' +
        ' ' +
        'data-[position=topLeft]:top-hf-side-padding data-[position=topLeft]:left-hf-side-padding' +
        ' ' +
        'data-[position=bottomLeft]:bottom-hf-side-padding data-[position=bottomLeft]:left-hf-side-padding' +
        ' ' +
        'data-[position=topRight]:top-hf-side-padding data-[position=topRight]:right-hf-side-padding' +
        ' ' +
        'data-[position=bottomRight]:bottom-hf-side-padding data-[position=bottomRight]:right-hf-side-padding'
      wrapperRef.current.appendChild(innerWrapper)
    }

    const id = uuid()
    const notification = document.createElement('div')
    notification.setAttribute('class', 'da-vinci-notification-single')
    notification.setAttribute('role', 'alert')
    notification.setAttribute('data-id', id)
    innerWrapper.appendChild(notification)

    const root = createRoot(notification)
    root.render(<NotificationCard id={id} data={latestCookie} />)

    if (Number(latestCookie.duration) !== Number(0)) {
      setTimeout(() => {
        root.unmount()
        notification.remove()
      }, latestCookie.duration)
    }
  }, [latestCookie, isWrapperCreated])

  return (<div ref={wrapperRef} id="da-vinci-notification" />) as any
}

const toastNotification = (settings: ToastProps) => {
  const defaultSettings = cookies.get(
    'da-vinci-notification-settings',
  ) as NotificationTypeDefaults
  const toastType = settings.type!

  cookies.set(
    'da-vinci-notification',
    JSON.stringify({
      type: settings.type || 'success',
      content: settings.content || 'All is done.',
      /* I couldn't pass 0 directly */
      duration:
        settings.duration === 0
          ? 0
          : settings.duration || defaultSettings[toastType]!.duration || 3000,
      title: settings.title || defaultSettings[toastType]!.title || 'Success',
      position:
        settings.position || defaultSettings[toastType]!.position || 'top',
      icon: settings.icon, // TODO: default icons for each type,
      className: settings.className || defaultSettings[toastType]!.className,
    }),
    {
      path: '/',
      sameSite: true,
    },
  )
  return document.dispatchEvent(new Event('cookiechange'))
}

const success = (settings: NotificationSettings) => {
  toastNotification({ ...settings, type: 'success' })
}

const info = (settings: NotificationSettings) => {
  toastNotification({ ...settings, type: 'info' })
}

const warning = (settings: NotificationSettings) => {
  toastNotification({ ...settings, type: 'warning' })
}

const error = (settings: NotificationSettings) => {
  toastNotification({ ...settings, type: 'error' })
}

export type NotificationPosition =
  | 'top'
  | 'bottom'
  | 'topLeft'
  | 'bottomLeft'
  | 'topRight'
  | 'bottomRight'

/**
 * Type of the notification. Can be `success`, `info`, `warning`, `error`. Default is `success`.
 * */
export type NotificationTypes = 'success' | 'info' | 'warning' | 'error'

/**
 * @description Message type for Notification
 * @author fers4t
 * @param {string} duration - Duration of notification as ms
 * @param {string} title - Title of notification
 * @param {string} content - Content of notification
 * @param {NotificationPosition} position - Position of notification
 */
export interface NotificationSettings {
  /**
   * @description You can pass CSS classes to notification.
   */
  className?: string
  /**
   * @description Duration of notification as ms. Set is `0` for `disable auto closing`.
   */
  /**
   * @description Content of the notification.
   */
  content: React.ReactNode
  duration?: number

  /**
   * @description Title of the notification. Default is `Success`.
   */
  /**
   * @description You can pass `emoji` icon.
   */
  icon?: React.ReactNode
  /**
   * @description Positions of the notification.
   * @enum `top`, `bottom`, `topLeft`, `bottomLeft`, `topRight`, `bottomRight`
   */
  position?: NotificationPosition
  title?: React.ReactNode
}

export interface ToastProps extends NotificationSettings {
  type: NotificationTypes
}

export interface NotificationTypeDefaults {
  error?: Omit<NotificationSettings, 'content'>
  info?: Omit<NotificationSettings, 'content'>
  success?: Omit<NotificationSettings, 'content'>
  warning?: Omit<NotificationSettings, 'content'>
}

export const toast = {
  success,
  info,
  warning,
  error,
}

export const Notification = {
  Provider: NotificationProvider,
  toast,
}
