// check is dev mode
const isDevMode = () => {
  return process.env.NODE_ENV === 'development'
}

export { isDevMode }
