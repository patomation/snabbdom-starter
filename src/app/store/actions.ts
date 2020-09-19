import { incrementScore, toggleStartScreen } from './mutations'

export const scoreButtonClick = (): void => {
  incrementScore()
}

export const pauseGameClick = (): void => {
  console.log('pause game')

  toggleStartScreen()
}

export const startGameClick = (): void => {
  toggleStartScreen()
}
