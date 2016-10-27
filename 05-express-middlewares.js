/* eslint-disable */


function* withTransaction1(req, res, next) {
  const trx = yield openTransaction()
  yield run(next)
  trx.commit()
}



function* withTransaction2(req, res, next) {
  const trx = yield openTransaction()
  run(function*() {
    yield run(next)
    trx.commit()
  }).catch((e) => {trx.rollback(e)})
}



function* withTransaction3(req, res, next) {
  const trx = yield openTransaction()

  run(function*() {
    context.set('transaction', trx)
    yield run(next)
    trx.commit()
  }).catch((e) => {trx.rollback(e)})
}



function getTrx() {
  return context.get('transaction')
}
