import React, { Component, Fragment } from 'react'
import ProTypes from 'prop-types'

export default class AddName extends Component {
    // 声明属性
    static propTypes = {
        lastName: ProTypes.string.isRequired,
        addNameCreater: ProTypes.func.isRequired,
        lastAge: ProTypes.number.isRequired,
        addAgeCreater: ProTypes.func.isRequired,
        addNameAsync: ProTypes.func.isRequired,
    }
    constructor(props) {
        super(props)
        this.state = {}
    }

    handlerFunc = () => {
        const inputName = this.refs.inputValueTest.value;
        this.props.addNameCreater(inputName)
    }
    handlerAgeFunc = () => {
        const inputName = this.refs.inputValueAge.value;
        this.props.addAgeCreater(inputName)
    }

    handlerAsyncFunc = () => {
        const inputName = this.refs.inputValueTest.value;
        this.props.addNameAsync(inputName)
    }



    render () {
        const { lastName, lastAge } = this.props;
        return (
            <Fragment>
                <header className="App-header">
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <label>{lastName}</label><br />
                <input ref="inputValueTest" /><br />
                <button onClick={this.handlerFunc}>confirm</button>

                <label>{lastAge}</label><br />
                <input ref="inputValueAge" /><br />
                <button onClick={this.handlerAgeFunc}>confirm</button>

                <button onClick={this.handlerAsyncFunc}>Async confirm</button>

            </Fragment>
        )
    }

}