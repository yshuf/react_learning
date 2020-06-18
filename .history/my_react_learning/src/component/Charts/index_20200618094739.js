import React, { Component } from 'react'


export default class Chart extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
        this.id = Math.random().toString(36).substr(2);
    }
    componentDidMount () {
        let myChart = echarts.init(document.getElementById(this.id))
    }

    render () {
        return (
            <div id={this.id} style={{
                width: 300,
                height: 90,
                position: 'absolute',
                top: 0,
                left: '45%',
                marginLeft: -90
            }}>

            </div>
        )
    }
}
