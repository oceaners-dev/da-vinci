import '../public/styles/globals.css'
import '../public/styles/da-vinci-ui.css'
import * as NextImage from 'next/image'
import Inspect from 'inspx'

const OriginalNextImage = NextImage.default

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
})

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <Inspect>
      <Story />
    </Inspect>
  ),
]
