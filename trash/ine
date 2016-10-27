import Promise from 'bluebird'

async function sum(a, b) {
  await Promise.delay(500)
  return a + b
}

async function main() {
  const val1 = await sum(1, 1)
  console.log('val1: ', val1)
  const val2 = await sum(val1, 1)
  console.log('val2: ', val2)
}

main()

