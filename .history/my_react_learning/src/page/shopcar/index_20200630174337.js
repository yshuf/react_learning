import React, { Component, Fragment } from 'react'

import './index.css'

const qs = require('querystring')
class ShopCar extends Component {
    constructor(props) {
        super(props)
    }
    render () {
        let search = this.props.location.search
        console.log(search)
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