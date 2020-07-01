import React, { Component, Fragment } from 'react'

import './index.css'
class ShopCar extends Component {
    render () {
        return (
            <Fragment>
                <div className="home-box"> id:{this.props.match.props.id}</div>
            </Fragment>
        )
    }
}

export default ShopCar