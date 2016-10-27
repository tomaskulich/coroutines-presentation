import {run} from 'yacol'
import Promise from 'bluebird'

function* invoice() {
  console.log('preparing invoice')
}

function* pay() {
  yield Promise.delay(3000)
  console.log('doing payment')
}

function* doBusiness() {
  yield run(invoice)
  run(pay)
}

run(function*() {
  console.log('--- business start ---')
  yield run(doBusiness)
  console.log('--- business end ---')
})
