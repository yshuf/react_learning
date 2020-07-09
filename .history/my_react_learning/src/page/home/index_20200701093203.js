import React, { Component, Fragment } from 'react'

import './index.css'
class Home extends Component {

    handleFullScreen = () => {
        let element = document.documentElement;
        if (this.fullscreen) {
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
            if (element.requestFullscreen) {
                element.requestFullscreen();
            } else if (element.webkitRequestFullScreen) {
                element.webkitRequestFullScreen();
            } else if (element.mozRequestFullScreen) {
                element.mozRequestFullScreen();
            } else if (element.msRequestFullscreen) {
                // IE11
                element.msRequestFullscreen();
            }
        }

        ————————————————
        版权声明：本文为CSDN博主「@Grapefruit」的原创文章，遵循CC 4.0 BY - SA版权协议，转载请附上原文出处链接及本声明。
        原文链接：https://blog.csdn.net/qq_43052274/article/details/91427479
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