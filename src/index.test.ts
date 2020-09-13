import test from 'ava'
import { getString } from './index'

test('get a string', (t) => {
  t.is(getString(), 'a string')
})
