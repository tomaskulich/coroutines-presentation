import Promise from 'bluebird'

async function task() {
  await Promise.delay(1000)
  console.log('nunu')
}

async function stopPromise() {
  await Promise.delay(100)
  throw new Error('timeout')
}

Promise.race([task(), stopPromise()])
