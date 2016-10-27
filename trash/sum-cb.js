
function sum(a, b, cb) {
  setTimeout(() => cb(a + b), 500)
}

sum(1, 2, (val1) => {
  console.log('val1: ', val1)
  sum(val1, 3, (val2) => {
    console.log('result: ', val2)
  })
})
