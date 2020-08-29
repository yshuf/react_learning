import React, { Component, Fragment } from 'react'
import store from '../store'
import actionCreators from '../store/actionCreators'

export default class Count extends Component {

    constructor() {
        super()
        this.state = {
            count: store.getState().count
        }
    }

    componentDidMount () {
        store.on('increment', () => {
            this.setState({ count: store.getState().count })
        })
    }

    increment = () => {
        actionCreators.increment()
        store.emit('increment')
    }



    render () {
        let { count } = this.state
        return (
            <Fragment>
                <div>
                    <button onClick={this.increment}> + </button>
                    <p> {count}</p>
                </div>
            </Fragment>
        )
    }
}