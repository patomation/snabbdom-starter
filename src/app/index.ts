// import snabbdom from 'snabbdom'
import { init } from 'snabbdom/build/package/init'
import { classModule } from 'snabbdom/build/package/modules/class'
import { propsModule } from 'snabbdom/build/package/modules/props'
import { styleModule } from 'snabbdom/build/package/modules/style'
import { eventListenersModule } from 'snabbdom/build/package/modules/eventlisteners'
import { h } from 'snabbdom/build/package/h' // helper function for creating vnodes
import { VNode } from 'snabbdom/build/package/vnode'

import { Modal } from './components/Modal'

export const getString = (): string => {
  return 'a string'
}

interface State {
  score: number,
  showStartScreen: boolean
}

export const App = (frame: Window): void => {
  const patch = init([ // Init patch function with chosen modules
    classModule, // makes it easy to toggle classes
    propsModule, // for setting properties on DOM elements
    styleModule, // handles styling on elements with support for animations
    eventListenersModule // attaches event listeners
  ])

  let state: State = {
    score: 1000,
    showStartScreen: true
  }

  const view = ({
    score, showStartScreen
  }: State) => h('section', {
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
            click: () => setState({ score: state.score + 1000 })
          }
        }, 'get points'),
        h('button', {
          on: {
            click: () => setState({ showModal: true })
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
        h('button', { on: { click: () => setState({ showStartScreen: false }) } }, 'Start')
      ]) : null
  ])

  function setState (newState: Record<string, unknown>) {
    state = { ...state, ...newState }
    render()
  }

  let vnode: VNode

  function render () {
    vnode = patch(vnode, view(state))
  }

  frame.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container') as Element
    vnode = patch(container, view(state))
    render()
  })
}
