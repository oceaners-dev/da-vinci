/* eslint-disable no-prototype-builtins */
import * as React from 'react'
import { styles } from '../../utils'

interface Props {
  colors?: { primary: string }
  showPanel?: boolean
  // Add any props your component may need here
}

// TODO: don't add css variables to head
// TODO: merge prop settings with styles

const Theme = ({ colors, showPanel = false }: Props) => {
  const [isPanelOpen, setIsPanelOpen] = React.useState(false)

  React.useEffect(() => {
    if (!styles) return
    // generate css variables
    createCssVars(styles)
  }, [styles])

  // for play with values live from a panel
  React.useEffect(() => {
    setIsPanelOpen(showPanel)
  }, [showPanel])

  return <></>
}

export { Theme }

function createCssVars(cssVars: object, parentKey?: string) {
  for (const key in cssVars) {
    if (cssVars.hasOwnProperty(key)) {
      const value = cssVars[key]
      const varName = parentKey ? `${parentKey}-${key}` : key
      if (typeof value === 'object') {
        createCssVars(value, varName)
      } else {
        document.documentElement.style.setProperty(
          `--da-vinci-${varName}`,
          value,
        )
      }
    }
  }
}
