export interface State {
  score: number,
  showStartScreen: boolean
}

export type NewState = {
  [S in keyof State]?: State[S]
}

type Callback = () => void

export let state: State = {
  score: 5000,
  showStartScreen: true
}

let stateChangedCallback: Callback

export const onStateChange = (callback: Callback): void => {
  stateChangedCallback = callback
}

const stateChanged = (): void => {
  if (stateChangedCallback !== undefined) stateChangedCallback()
}

export const setState = (newState: NewState): void => {
  state = { ...state, ...newState }
  stateChanged()
}
