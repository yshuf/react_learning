import React, { Component, Fragment } from 'react'
import { NavLink, Route } from 'react-router-dom'

import './index.css'
class Home extends Component {
    render () {
        return (
            <Fragment>
                <div className="home-box">
                    <ul>
                        <NavLink to="/category/1">分类一</NavLink>
                        <NavLink to="/category/2">分类一</NavLink>
                        <NavLink to="/category/3">分类一</NavLink>
                    </ul>
                </div>
                <Route to="/category/1"></Route>
                <Route to="/category/2"></Route>
                <Route to="/category/3"></Route>
            </Fragment>
        )
    }
}

export default Home