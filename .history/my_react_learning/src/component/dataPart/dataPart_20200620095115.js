import React, { Component } from 'react'


export default class DataPart extends Component {
    constructor() {
        super()
        this.state = {
            nba: "猛龙"
        }
    }
    render () {
        return (
            <div>
                <div>状态：{this.state.nba}</div>
            </div>
        )
    }
}