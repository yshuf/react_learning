import React, { Component } from 'react'

import echarts from 'echarts'
const backColor = ['#627e92', '#00b793', '#fbc200', '#f88659', '#f36358'];

export default class Chart extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
        this.id = Math.random().toString(36).substr(2);
    }
    componentDidMount () {
        let myChart = echarts.init(document.getElementById(this.id))
        let total_value = 100;
        function getData (value, colorStyle) {
            return [{
                value: value,
                itemStyle: {
                    normal: {
                        color: colorStyle
                    }
                },
                label: {
                    normal: {
                        position: 'center',
                        show: false,

                    }
                }
            }, {
                value: total_value - value,
                itemStyle: {
                    normal: {
                        color: '#efefef'
                    }
                },
                label: {
                    normal: {
                        formatter: value + '',
                        position: 'center',
                        show: true,
                        textStyle: {
                            fontSize: '18',
                            fontWeight: 'bold',
                            color: '#444'
                        }
                    }
                }
            }];
        }
        myChart.setOption({
            backgroundColor: 'transparent',
            title: {
                top: 'center',
                left: '60%',
                text: '测试例子',
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
                data: getData(50, backColor[1])
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
