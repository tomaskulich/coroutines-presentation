/* eslint-disable */

run(function*() {
  yield knex.insert({name: 'john'}).into('users')
})

it('plays nice with Mocha', () => run(function*() {
  yield run(boom)
  yield run(boom)
  run(bang)
  run(bang)
}))
