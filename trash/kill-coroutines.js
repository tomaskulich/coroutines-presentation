import Promise from 'bluebird'

function* inc(a, b) {
  yield Promise.delay(100)
  return a + b
}

run(function*() {
  const taskCo = run(inc, 1, 2)
  run(function*() {
    yield Promise.delay(1000)
    kill(taskCo)
  })
  yield taskCo
})

