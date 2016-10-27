async function invoice() {
  console.log('preparing invoice')
}

async function pay() {
  throw new Error('catch me if you can')
}

async function doBusiness() {
  await invoice()
  pay()
}

try {
  doBusiness()
} catch (e) {console.log('gotcha')}
