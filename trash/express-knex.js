import express from 'express'
import {register, runApp} from 'yacl/expressHelpers'
import {run, zone} from 'yacl'
import bodyParser from 'body-parser'

const knex = require('knex')(require('./knexfile'))

const app = express()
app.use(bodyParser.urlencoded({extended: false}))

register(app, 'post', '*', withTransaction)
register(app, 'post', '/update', update)

function* update(req, res, next) {
  if (req.body.name === 'john') {
    res.send('no johns, I said!')
    throw new Error('no johns')
  }
  yield getKnexTrx().insert(req.body).into('yacl')
  res.send('OK')
}

function getKnexTrx() {
  return zone.get('request').trx
}

function* withTransaction(req, res, next) {
  const trx = yield openTransaction()
  req.trx = trx
  run(function*() {
    yield run(next)
    trx.commit()
  }).catch((e) => {trx.rollback(e)})
}

function openTransaction() {
  return new Promise((resolve, reject) => {
    knex.transaction((trx) => {
      resolve(trx)
    })
  })
}

run(function* () {
  run(runApp, app)
  app.listen(3000, () => {
    console.log('server started')
  })
})
