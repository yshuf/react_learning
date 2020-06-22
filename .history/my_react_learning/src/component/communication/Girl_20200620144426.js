import React, { Component, Fragment } from 'react'

export default class Girl extends Component {
    constructor() {
        super()
        this.state = {
            charat: '萝莉'
        }
    }
    render () {
        const { charat } = this.state
        return (
            <Fragment>
                <p>这是girl组件</p>
                <button>性格</button>
                <p> 小女孩性格：{charat}</p>
            </Fragment>
        )
    }
}