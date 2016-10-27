import Promise from 'bluebird'

const a = Promise.delay(1000).then(() => console.log('nunu'))
const b = Promise.delay(100).then(() => 4)
Promise.race([a, b]).then((val) => {console.log(val)})
