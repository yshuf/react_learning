import React, { Component, Fragment } from 'react'
import { Link, NavLInk } from 'react-router-dom'


class Foot extends Component {
    render () {
        return (
            <Fragment>
                <footer>
                    <ul>
                        <li>
                            <NavLInk to="/home">首页</NavLInk>
                        </li>
                        <li>
                            <NavLInk to="/category">分类</NavLInk>
                        </li>
                        <li>
                            <NavLInk to="/shopCar">购物车</NavLInk>
                        </li>
                        <li>
                            <NavLInk to="/mine">我的</NavLInk>
                        </li>
                    </ul>
                </footer>
            </Fragment>
        )
    }
}

export default Foot