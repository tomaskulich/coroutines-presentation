import express from 'express'
import {expressHelpers, run} from 'yacol'
import Promise from 'bluebird'

const {register, runApp} = expressHelpers
const app = express()

app.get('/helloStandard', (req, res, next) => {
  /* compute the response here */
  res.send('world')
})

register(app, 'use', '*', middleware)
register(app, 'get', '/hello', hello)

function* hello(req, res) {
  yield Promise.delay(500)
  res.send('hello')
}

function* middleware(req, res, next) {
  const timeBefore = getTime()
  yield next
  const timeAfter = getTime()
  console.log(`request processing
    took ${timeAfter - timeBefore} millis`)
}

run(function* () {
  run(runApp, app)
  app.listen(3000, () => {
    console.log('server started')
  })
})

function getTime() {
  return (new Date()).getTime()
}
