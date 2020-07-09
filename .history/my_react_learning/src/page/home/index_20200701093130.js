import React, { Component, Fragment } from 'react'

import './index.css'
class Home extends Component {
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