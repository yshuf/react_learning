import React, { Component, Fragment } from 'react'

import './index.css'
class Home extends Component {
    constructor(props) {
        super(props)
        this.fullscreen = false
    }

    handleFullScreen = () => {
        //定义一个变量进行判断，默认false 非全屏状态
        let exitFullscreen = false
        // 全屏事件
        let element = document.documentElement;
        if (this.fullscreen) {
            console.log(123)
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        } else {
            // 全屏
            if (element.requestFullscreen) {
                // W3C
                element.requestFullscreen();
            } else if (element.webkitRequestFullScreen) {
                // Chrome
                element.webkitRequestFullScreen();
            } else if (element.mozRequestFullScreen) {
                // FireFox
                element.mozRequestFullScreen();
            } else if (element.msRequestFullscreen) {
                // IE11
                element.msRequestFullscreen();
            }
        }
    }
    render () {
        return (
            <Fragment>
                <div className="home-box"> home</div>
                <button onClick={() => { this.handleFullScreen() }}>全屏</button>
            </Fragment>
        )
    }
}

export default Home