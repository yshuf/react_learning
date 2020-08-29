/* 
    Dispatcher
        1. 修改数据
        2. 直接用户数据
*/

import { Dispatcher } from 'flux'
import * as type from './type'
import state from './state'

let dispathcher = new Dispatcher() // 实例化 Dispather 得到 dispatcher 实例
//  dispatcher 实例进行注册
dispathcher.register((action) => {  // 这里的 action  就是从 actionCreators 中发出来的

    //  判断 用户进行了哪些用户交互
    switch (action.type) {
        case type.INCREMENT:
            //  用户操作
            state.count++
            break;
        default:
            break;
    }

})

export default dispathcher