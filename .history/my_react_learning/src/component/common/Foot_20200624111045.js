import React, { Component, Fragment } from 'react'
import { Link, NavLInk } from 'react-router-dom'


class Foot extends Component {
    render () {
        return (
            <Fragment>
                <footer>
                    <ul>
                        <li>
                            <Link to="/home">首页</Link>
                        </li>
                        <li>
                            <Link to="/category">分类</Link>
                        </li>
                        <li>
                            <Link to="/shopCar">购物车</Link>
                        </li>
                        <li>
                            <Link to="/mine">我的</Link>
                        </li>
                    </ul>
                </footer>
            </Fragment>
        )
    }
}

export default Foot