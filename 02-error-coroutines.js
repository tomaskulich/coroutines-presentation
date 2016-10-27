import {run} from 'yacol'

function* invoice() {
  console.log('preparing invoice')
}

function* pay() {
  throw new Error('catch me if you can')
}

function* doBusiness() {
  yield run(invoice)
  run(pay)
}

run(doBusiness).catch((e) => {console.log('Yes, I can')})
