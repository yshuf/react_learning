import React, { Component } from 'react'


class A extends Component {
    render () {
        return (
            <div>
                A
            </div>
        )
    }
}

class B extends Component {
    render () {
        return (
            <div>
                B
            </div>
        )
    }
}


class HigherOrderComponent extends Component {
    render () {
        return (
            <div>
                <h3>高阶组件</h3>
            </div>
        )
    }
}

export default HigherOrderComponent