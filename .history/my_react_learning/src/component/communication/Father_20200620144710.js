import React, { Component, Fragment } from "react"

import Child from './Child'
import Girl from './Girl'


export default class Father extends Component {

    static defaultProps = {
        childName: '哈哈哈'
    }

    charatChange = () => {
        console.log(this.girl)
    }

    render () {
        console.log(this)
        const { childName } = this.props
        return (
            <Fragment>
                <h4>组件通信</h4>
                <p>父组件</p>
                <button onClick={this.charatChange}>父组件改变子组件的女孩的性格</button>
                <hr />
                <Child ref='child' name={childName}></Child>
                {/* // 父组件里绑定了一个girl属性，ref表示的是girl组件，把girl组件给了父组件 */}
                <Girl ref={ref => this.girl = ref}></Girl>
            </Fragment>
        )
    }
}