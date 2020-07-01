import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom'


class Foot extends Component {
    render () {
        return (
            <Fragment>
                <footer>
                    <ul>
                        <li>
                            <NavLink to="/home" activeClassName='active'>首页</NavLink>
                        </li>
                        <li>
                            <NavLink to="/category/1" activeClassName='active'>分类</NavLink>
                        </li>
                        <li>
                            <NavLink to="/shopCar" activeClassName='active'>购物车</NavLink>
                        </li>
                        <li>
                            <NavLink to="/mine" activeClassName='active'>我的</NavLink>
                        </li>
                    </ul>
                </footer>
            </Fragment>
        )
    }
}

export default Foot