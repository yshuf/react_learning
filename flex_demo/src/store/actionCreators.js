/* 
    actionCreators
    1. 用于 View 和用户交互
    2. 用来 创建一个 动作，然后发送给 Dispatcher
    3. actionCreators 也是对象，里面存储的是方法
    4. actionCreators 中的动作的发送者要靠 Dispatcher 中的方法来提供

*/

import * as type from './type'
import dispatcher from './dispatcher'

const actionCreators = {
    increment () {
        const action = {
            type: type.INCREMENT
        }
        dispatcher.dispatch(action)
    }

}

export default actionCreators