import { RadiusVariants, shadowVariants } from './types'

export const dvStyles = ({
  radius,
  shadow,
}: {
  radius?: RadiusVariants
  shadow?: shadowVariants
}) => {
  return {
    borderRadius: radius ? `var(--da-vinci-radius-${radius})` : 'none',
    boxShadow: shadow ? `var(--da-vinci-shadow-${shadow})` : 'none',
  }
}
