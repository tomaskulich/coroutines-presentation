import Promise from 'bluebird'
//import {run} from 'yacol'

async function pay() {
  await Promise.delay(100)
  console.log('making payment')
}

async function invoice() {
  await Promise.delay(100)
  console.log('preparing invoice')
}

async function doBusiness() {
  await invoice()
  await pay()
}

doBusiness()
