import React, { Components } from 'react'
import ProTypes from 'prop-types'

export default class AddName extends Components {
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
                <label>哈哈哈哈</label><br />
            </div>
        )
    }

}