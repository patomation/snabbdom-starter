import { h, ArrayOrElement, VNodeChildElement } from 'snabbdom/h'
import { VNodeStyle } from 'snabbdom/modules/style'
import { VNode } from 'snabbdom/vnode'

export interface Props {
  click?: EventListener
}

export const Modal = ({
  click
}: Props,
children?: ArrayOrElement<VNodeChildElement>
): VNode => h('div', {
  props: { className: 'Modal' },
  style: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    background: '#222',
    opacity: '0',
    transition: 'opacity 1s',
    delayed: { opacity: '1' },
    remove: { opacity: '0' }
  } as unknown as VNodeStyle
}, [
  h('div', {
    props: { className: 'Modal__content' },
    style: {
      position: 'relative',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      textAlign: 'center'
    }
  }, children),
  click ? h('div', {
    props: { className: 'Modal__close-button' },
    style: {
      position: 'absolute',
      right: '0.5rem',
      top: '0.5rem',
      userSelect: 'none',
      cursor: 'pointer',
      fontWeight: 'bold'
    },
    on: { click }
  }, 'X') : null,
  click ? h('div', {
    props: { className: 'Modal__close-overlay' },
    style: {
      position: 'absolute',
      left: '0',
      top: '0',
      width: '100%',
      height: '100%',
      zIndex: '-1'
    },
    on: { click }
  }) : null
])
