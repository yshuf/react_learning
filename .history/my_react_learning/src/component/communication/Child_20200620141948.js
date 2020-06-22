import React, { Component, Fragment } from "react"


export default class Child extends Component {
    render () {
        const { name } = this.props
        return (
            <Fragment>
                <p>子组件</p>
                <br />
                <p>{name}</p>
            </Fragment>
        )
    }
}