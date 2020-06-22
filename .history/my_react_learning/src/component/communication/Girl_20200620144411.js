import React, { Component, Fragment } from 'react'

export default class Girl extends Component {
    constructor() {
        super()
        this.state = {
            charat: '萝莉'
        }
    }
    render () {
        const { charat } = this.props
        return (
            <Fragment>
                <p>这是girl组件</p>
                <button>性格</button>
                <br />
                小女孩性格：{charat}
            </Fragment>
        )
    }
}