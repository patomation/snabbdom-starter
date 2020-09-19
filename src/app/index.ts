import { render } from './render'

export const getString = (): string => {
  return 'a string'
}

export const App = (frame: Window): void => {
  frame.addEventListener('DOMContentLoaded', render)
}
