import Promise from 'bluebird'

async function invoice() {
  console.log('preparing invoice')
}

async function pay() {
  await Promise.delay(3000)
  console.log('doing payment')
}

async function doBusiness() {
  await invoice()
  pay()
}

async function main() {
  console.log('--- business start ---')
  await doBusiness()
  console.log('--- business end ---')
}

main()
