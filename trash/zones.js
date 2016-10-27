import {run, zone} from 'yacl'

run(function*() {

  zone.set('hello', 'world')

  run(function*() {
    console.log(zone.get('hello')) // world
    zone.set('hello', 'sunshine')
    console.log(zone.get('hello')) // sunshine
  })

})
