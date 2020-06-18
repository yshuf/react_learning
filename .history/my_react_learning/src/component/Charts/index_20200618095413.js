import React, { Component } from 'react'

import echarts from 'echarts'


export default class Chart extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
        this.id = Math.random().toString(36).substr(2);
    }
    componentDidMount () {
        let myChart = echarts.init(document.getElementById(this.id))
        myChart.setOption({
            backgroundColor: 'transparent',
            title: {
                top: 'center',
                left: '60%',
                text: '测试例子',
                // + '： ' +((this.props.number/this.props.total)*100).toFixed(2) +'%',
                textStyle: {
                    fontSize: 15,
                    fontWeight: 'normal',
                    color: ['#666']
                }
            },
            series: [{
                name: '测试例子',
                type: 'pie',
                clockWise: false, //顺时加载
                hoverAnimation: false, //鼠标移入变大
                silent: true,
                radius: [38, 45],
                center: ['35%', '50%'],
                data: getData(this.props.number, backColor[this.props.index])
            }]
        })
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
