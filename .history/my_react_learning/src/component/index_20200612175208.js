import React, { Component } from 'react'
import ProTypes from 'prop-types'

export default class AddName extends Component {
    // 声明属性
    static propTypes = {
        lastName: ProTypes.string.isRequired,
        addNameCreater: ProTypes.func.isRequired,
        lastage: ProTypes.number.isRequired,
        addAgeCreater: ProTypes.func.isRequired,
        addNameAsync: ProTypes.func.isRequired,
    }
    constructor(props) {
        super(props)
        this.state = {}
    }



    render () {
        return (
            <div>
                <header className="App-header">
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <label>哈哈哈</label><br />
                <input ref="inputValueTest" /><br />
                <button onClick={this.handlerFunc}>confirm</button>

                <label>哈哈哈</label><br />
                <input ref="inputValueTest" /><br />
                <button onClick={this.handlerFunc}>confirm</button>

                <label>哈哈哈</label><br />
                <input ref="inputValueTest" /><br />
                <button onClick={this.handlerFunc}>confirm</button>

            </div>
        )
    }

}