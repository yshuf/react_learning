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
                <input type="text" value="改变状态" />
                <div>状态：{this.state.nba}</div>
            </div>
        )
    }
}