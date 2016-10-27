import Promise from 'bluebird'
import {run} from 'yacol'

function* sum(a, b) {
  yield Promise.delay(500)
  return a + b
}

run(function*() {
  const val1 = yield run(sum, 1, 1)
  console.log('val1: ', val1)
  const val2 = yield run(sum, val1, 1)
  console.log('val2: ', val2)
})
