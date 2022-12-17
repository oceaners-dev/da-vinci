import React from 'react'
import 'da-vinci-ui/dist/styles.css'
import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import { Notification } from 'da-vinci-ui'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Notification.Provider
        defaultSettings={{
          success: {
            title: 'Success',
            // className: 'bg-red-500',
          },
        }}
      />
    </>
  )
}
