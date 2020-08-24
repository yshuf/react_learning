/*
    打造store
    1. 存储数据
    2. 通过事件将新的数据反映到 View 层
*/

import state from './state'
import { EventEmitter } from 'events'

// EventEmitter.prototype 身上有 on emit 事件的发布和订阅的能力
//  将 on emit 两个方法给 store

const store = {
    ...EventEmitter.prototype,
    state,  // 数据存储
    getState () { // 获取 store 中的数据的
        return this.state   // 这里的 this 指的就是 store
    }
}
console.log('store', store)

export default store