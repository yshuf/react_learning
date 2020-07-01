import React, { Component, Fragment } from 'react'

import './index.css'

// node.js之querystring模块，一般对http请求所带的数据进行解析
// querystring.parse() 将一个字符串反序列化为一个对象
const qs = require('querystring')
class ShopCar extends Component {
    // constructor(props) {
    //     super(props)
    // }
    render () {
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
}

export default ShopCar