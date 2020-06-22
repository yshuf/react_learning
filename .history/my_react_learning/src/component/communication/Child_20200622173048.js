import React, { Component, Fragment } from "react"
import React, { Component } from 'react';


export default class Child extends Component {
    render () {
        const { name, change } = this.props
        return (
            <Fragment>
                <button onClick={change}>  子组件改变女孩的性格   </button>
                <p>子组件</p>
                <br />
                <p>{name}</p>
            </Fragment>
        )
    }
}