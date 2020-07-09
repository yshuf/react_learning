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
            // 退出全屏
            console.log(document.exitFullscreen)
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
            // console.log(13, element.requestFullscreen())
            // 全屏
            if (element.requestFullscreen) {
                // W3C
                console.log(98, element.requestFullscreen())
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
                <button onClick={() => { this.handleFullScreen() }}>fullScreen</button>
            </Fragment>
        )
    }
}

export default Home