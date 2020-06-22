import React, { Component, Fragment } from "react"
import Child from './Child'


export default class Father extends Component {
    render () {
        return (
            <Fragment>
                <h4>组件通信</h4>
                <p>父组件</p>
                <hr />
                <Child></Child>
            </Fragment>
        )
    }
}