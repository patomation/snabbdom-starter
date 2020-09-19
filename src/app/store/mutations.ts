import { state, setState } from './state'

export function toggleStartScreen (): void {
  setState({ showStartScreen: !state.showStartScreen })
}

export function incrementScore (): void {
  setState({ score: state.score + 1000 })
}
