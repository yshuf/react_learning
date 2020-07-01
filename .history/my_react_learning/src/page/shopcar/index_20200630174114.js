import React, { Component, Fragment } from 'react'

import './index.css'
class ShopCar extends Component {
    constructor(props) {
        super(props)
    }
    render () {
        return (
            <Fragment>
                <div className="home-box">
                    <p>  params.id:{this.props.match.params.id}</p>
                    <p>  search.a:{this.props.match.params.id}</p>
                    <p>  search.b:{this.props.match.params.id}</p>
                </div>

            </Fragment>
        )
    }
}

export default ShopCar