export type ForwardRefWithStaticComponents<
  Props extends Record<string, any>,
  Static extends Record<string, any>,
> = ((props: Props) => React.ReactElement) &
  Static & {
    defaultProps?: Partial<Props>
    displayName?: string
  }
