import test from 'ava'
import { getString } from '../app/index'

test('get a string', (t) => {
  t.is(getString(), 'a string')
})
