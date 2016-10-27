import {run} from 'yacol'

  function* blacklistCheck() {
    console.log('do backlist check')
  }

  function* transfer() {
    throw new Error('catch me!')
  }

  function* pay() {
    const isOk = yield run(blacklistCheck)
    if (isOk) {
      run(transfer)
    }
  }

  function* invoice() {
    console.log('preparing invoice')
  }

  function* doBusiness() {
    run(pay)
    run(invoice)
  }


