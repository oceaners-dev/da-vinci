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

  return (
    <div
      className={
        'hidden h-0 w-0 fixed bottom-0 left-0' +
        ' ' +
        'text-dv-primary-base text-dv-primary-hover text-dv-primary-active text-dv-primary-disabled text-dv-secondary-base text-dv-secondary-hover text-dv-secondary-active text-dv-secondary-disabled text-dv-warning-base text-dv-warning-hover text-dv-warning-active text-dv-danger-base text-dv-danger-hover text-dv-danger-active text-dv-tertiary-base text-dv-tertiary-hover text-dv-tertiary-active text-dv-positive-base text-dv-positive-hover text-dv-positive-active text-dv-positive-disabled text-dv-negative-base text-dv-negative-hover text-dv-negative-active text-dv-shadow-base text-dv-border-base text-dv-text-01 text-dv-text-02 text-dv-text-03 text-dv-text-04 ' +
        ' ' +
        'bg-dv-primary-base bg-dv-primary-hover bg-dv-primary-active bg-dv-primary-disabled bg-dv-secondary-base bg-dv-secondary-hover bg-dv-secondary-active bg-dv-secondary-disabled bg-dv-warning-base bg-dv-warning-hover bg-dv-warning-active bg-dv-danger-base bg-dv-danger-hover bg-dv-danger-active bg-dv-tertiary-base bg-dv-tertiary-hover bg-dv-tertiary-active bg-dv-positive-base bg-dv-positive-hover bg-dv-positive-active bg-dv-positive-disabled bg-dv-negative-base bg-dv-negative-hover bg-dv-negative-active bg-dv-shadow-base bg-dv-border-base bg-dv-bg-01 bg-dv-bg-02 bg-dv-bg-03 bg-dv-bg-04 ' +
        ' ' +
        'border-dv-primary-base border-dv-primary-hover border-dv-primary-active border-dv-primary-disabled border-dv-secondary-base border-dv-secondary-hover border-dv-secondary-active border-dv-secondary-disabled border-dv-warning-base border-dv-warning-hover border-dv-warning-active border-dv-danger-base border-dv-danger-hover border-dv-danger-active border-dv-tertiary-base border-dv-tertiary-hover border-dv-tertiary-active border-dv-positive-base border-dv-positive-hover border-dv-positive-active border-dv-positive-disabled border-dv-negative-base border-dv-negative-hover border-dv-negative-active border-dv-shadow-base border-dv-border-base border-dv-border-01 border-dv-border-02 border-dv-border-03 border-dv-border-04 ' +
        ' ' +
        'rounded-dv-large rounded-dv-small rounded-dv-full rounded-dv-medium rounded-dv-xs ' +
        ' ' +
        'shadow-dv-none shadow-dv-sm shadow-dv-md shadow-dv-lg' +
        ' ' +
        'p-dv-none p-dv-superTight p-dv-extraTight p-dv-tight p-dv-baseTight p-dv-base p-dv-baseLoose p-dv-loose p-dv-extraLoose p-dv-superLoose' +
        ' ' +
        'text-dv-h1 text-dv-h2 text-dv-h3 text-dv-h4 text-dv-h5 text-dv-h6 text-dv-regular text-dv-small'
      }
    ></div>
  )
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
