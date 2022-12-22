/* eslint-disable no-prototype-builtins */
import * as React from 'react'
import { styles } from '../../utils'

interface Props {
  showPanel?: boolean
  tokens?: TokenProps
  // Add any props your component may need here
}

// TODO: don't add css variables to head
// TODO: merge prop settings with styles

const Theme = ({ tokens, showPanel = false }: Props) => {
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

export interface TokenProps {
  colors?: Colors
  radius?: Radius
  shadow?: Shadow2
  spacing?: Spacing
  typography?: Typography
}

export interface Radius {
  full?: number
  large?: number
  medium?: number
  small?: number
  xs?: number
}

export interface Colors {
  danger?: Danger
  negative?: Negative
  positive?: Positive
  primary?: Primary
  secondary?: Secondary
  shadow?: Shadow
  tertiary?: Tertiary
  warning?: Warning
}

export interface Primary {
  active?: string
  base?: string
  disabled?: string
  hover?: string
}

export interface Secondary {
  active?: string
  base?: string
  disabled?: string
  hover?: string
}

export interface Warning {
  active?: string
  base?: string
  hover?: string
}

export interface Danger {
  active?: string
  base?: string
  hover?: string
}

export interface Tertiary {
  active?: string
  base?: string
  hover?: string
}

export interface Positive {
  active?: string
  base?: string
  disabled?: string
  hover?: string
}

export interface Negative {
  active?: string
  base?: string
  hover?: string
}

export interface Shadow {
  base?: string
}

export interface Shadow2 {
  lg?: string
  md?: string
  none?: string
  sm?: string
}

export interface Spacing {
  base?: number
  baseLoose?: number
  baseTight?: number
  extraLoose?: number
  extraTight?: number
  loose?: number
  none?: number
  superLoose?: number
  superTight?: number
  tight?: number
}

export interface Typography {
  h1?: number
  h2?: number
  h3?: number
  h4?: number
  h5?: number
  h6?: number
  regular?: number
  small?: number
}
