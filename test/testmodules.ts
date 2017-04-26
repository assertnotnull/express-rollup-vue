import test from 'ava'
import * as mod1 from '../front/scripts/modules/mod1'

test(t => {
    const out = mod1.sayHelloTo('Gus')
    t.is(out, 'Hello, Gus!')
})