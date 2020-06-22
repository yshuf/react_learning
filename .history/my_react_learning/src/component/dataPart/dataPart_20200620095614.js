import React, { Component } from 'react'


export default class DataPart extends Component {
    constructor() {
        super()
        this.state = {
            nba: "猛龙"
        }
    }
    change = () => {
        this.setState(() => {
            return {
                nba: '勇士'
            }
        })
    }
    render () {
        return (
            <div>
                <input onClick={this.change} type="button" value="改变状态" style={{ margin: '20px auto' }} />
                <div>状态：{this.state.nba}</div>
            </div>
        )
    }
}