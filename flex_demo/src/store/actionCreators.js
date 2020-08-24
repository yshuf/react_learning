/*
    actionCreators
    1. 用于 View 和用戶交互
    2. 用來 创建一个动作，然后发送给 Dispatcher
    3. actionCreators 也是对象，里面存储的是方法
    4.actionCreators 中的动作的发送者要靠 Dis patcher 中的方法来提供
 */
import * as type from './type'
import dispatcher from './dispatcher'


const actionCreators = {
    increment () {
        //  创建 动作
        const action = {
            type: type.INCREMENT
        }

        //  发送动作
        dispatcher.dispatch(action)
    }
}

export default actionCreators