import React, { Component, Fragment } from "react"
import Child from './Child'


export default class Father extends Component {

    static defaultProps = {
        childName: '哈哈哈'
    }

    render () {
        return (
            <Fragment>
                <h4>组件通信</h4>
                <p>父组件</p>
                <hr />
                <Child name={this.props.childName}></Child>
            </Fragment>
        )
    }
}