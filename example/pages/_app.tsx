import 'tailwindcss/tailwind.css'
import 'da-vinci-ui/dist/styles.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
