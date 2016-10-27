import Promise from 'bluebird'

function sum(a, b) {
  return Promise.delay(500)
    .then(() => a + b)
}

sum(1, 2)
.then((val1) => {
  console.log('val1: ', val1)
  return sum(val1, 3)
})
.then((res) => {
  console.log('res: ', res)
})
