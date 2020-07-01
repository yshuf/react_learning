import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom'

import './index.css'
class Home extends Component {
    render () {
        return (
            <Fragment>
                <div className="home-box">
                    <ul>
                        <NavLink>分类一</NavLink>
                        <NavLink>分类一</NavLink>
                        <NavLink>分类一</NavLink>
                    </ul>
                </div>
            </Fragment>
        )
    }
}

export default Home