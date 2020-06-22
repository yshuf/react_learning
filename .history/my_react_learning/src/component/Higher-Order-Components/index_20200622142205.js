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

class C extends Component {
    render () {
        return (
            <div>
                C
            </div>
        )
    }
}


class HigherOrderComponent extends Component {
    render () {
        return (
            <div>
                <h3>高阶组件</h3>
                <A></A>
                <B></B>
                <C></C>
            </div>
        )
    }
}

export default HigherOrderComponent