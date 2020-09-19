import { VNode } from 'snabbdom/build/package/vnode'
import { state, onStateChange } from './store/state'
import { patch } from './patch'
import { view } from './view'

let vnode: VNode

export function render (): void {
  if (vnode === undefined) vnode = document.getElementById('container') as unknown as VNode
  vnode = patch(vnode, view(state))
}

onStateChange(render)
