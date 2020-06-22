import React, { Component, Fragment } from "react"

import Child from './Child'
import Girl from './Girl'


export default class Father extends Component {

    static defaultProps = {
        childName: '哈哈哈'
    }

    render () {
        const { childName } = this.props
        return (
            <Fragment>
                <h4>组件通信</h4>
                <p>父组件</p>
                <hr />
                <Child ref='child' name={childName}></Child>
                {/* // 父组件里绑定了一个girl属性 */}
                <Girl ref={ref => this.girl = ref}></Girl>
            </Fragment>
        )
    }
}