
import state from './state'
import { EventEmitter } from 'events'

const store = {
    ...EventEmitter.prototype,
    state,
    getState () {
        return this.state
    }
}

export default store;