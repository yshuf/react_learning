import React, { Component, Fragment } from "react"


export default class Father extends Component {
    render () {
        return (
            <Fragment>
                <h1>组件通信</h1>
                <p>父组件</p>
                <hr />
                <Child></Child>
            </Fragment>
        )
    }
}