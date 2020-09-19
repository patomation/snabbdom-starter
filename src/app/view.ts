import { VNode } from 'snabbdom/build/package/vnode'
import { h } from 'snabbdom/build/package/h'
import { Modal } from './components/Modal'
import { scoreButtonClick, startGameClick, pauseGameClick } from './store/actions'
import { State } from './store/state'
import { scoreMessage } from './store/getters'

export const view = ({
  score, showStartScreen
}: State): VNode => h('section', {
  style: {
    background: '#222',
    color: '#fff',
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  }
}, [
  h('nav', {
    style: {
      background: 'purple'
    }
  }, [
    h('div', [
      h('span', 'score'),
      h('span', {}, score),
      'hud',
      h('button', {
        on: {
          click: scoreButtonClick
        }
      }, 'get points'),
      h('button', {
        on: {
          click: pauseGameClick
        }
      }, 'showModal')
    ])
  ]),
  h('main', {
    style: {
      flexGrow: '1',
      background: 'gray'
    }
  }, 'myApp'),
  showStartScreen
    ? Modal({}, [
      h('h1', 'Game Title'),
      h('div', scoreMessage()),
      h('button', { on: { click: startGameClick } }, 'Start')
    ]) : null
])
