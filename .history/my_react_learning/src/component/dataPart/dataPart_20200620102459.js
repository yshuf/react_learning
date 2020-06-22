import React, { Component } from 'react'


export default class DataPart extends Component {
    constructor() {
        super()
        this.state = {
            nba: "猛龙",
            todos: [
                {
                    id: 1,
                    task: '任务1'
                }
            ]
        }
    }
    change = () => {
        this.setState(() => {
            return {
                nba: '勇士'
            }
        }, () => {
            console.log(this.state.nba)
        })
        console.log(this.state.nba)
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