import { state } from './state'

export const scoreMessage = (): string => {
  return `Your Score Is: ${state.score}`
}
