
if (module && module.hot) {
  module.hot.accept()
}

export const getString = (): string => {
  return 'a string'
}
