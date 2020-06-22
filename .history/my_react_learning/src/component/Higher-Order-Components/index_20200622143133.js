import React, { Component } from 'react'


const Hoc = (Comp) => {
    class HigherOrderComponent extends Component {
        change = () => {

        }
        render () {
            return <Comp change={this.change}></Comp>
        }
    }
}

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

const HocA = Hoc(A)
const HocB = Hoc(B)
const HocC = Hoc(C)


class HigherOrderComponent extends Component {
    render () {
        return (
            <div>
                <h3>高阶组件</h3>
                <HocA></HocA>
                <HocB></HocB>
                <HocC></HocC>
            </div>
        )
    }
}

export default HigherOrderComponent