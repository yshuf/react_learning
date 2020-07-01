import React, { Component, Fragment } from 'react'

import './index.css'

const qs = require('querystring')
constructor(props) {
    super(props)
}
render() {
    let search = this.props.location.search
    const { a, b } = qs.parse(search.slice(1))
    return (
        <Fragment>
            <div className="home-box">
                <p>  params.id:{this.props.match.params.id}</p>
                <p>  search.a:{a}</p>
                <p>  search.b:{b}</p>
            </div>

        </Fragment>
    )
}
class ShopCar extends Component {
}

export default ShopCar