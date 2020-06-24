import React, { Component, Fragment } from 'react'
import { Link, NavLink } from 'react-router-dom'


class Foot extends Component {
    render () {
        return (
            <Fragment>
                <footer>
                    <ul>
                        <li>
                            <NavLink to="/home">首页</NavLink>
                        </li>
                        <li>
                            <NavLink to="/category">分类</NavLink>
                        </li>
                        <li>
                            <NavLink to="/shopCar">购物车</NavLink>
                        </li>
                        <li>
                            <NavLink to="/mine">我的</NavLink>
                        </li>
                    </ul>
                </footer>
            </Fragment>
        )
    }
}

export default Foot