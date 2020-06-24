import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom'

import './index.css'
class Category extends Component {
    render () {
        return (
            <Fragment>
                <div className="home-box">
                    <ul>
                        <li>
                            <NavLink to='/'></NavLink>
                        </li>
                    </ul>
                </div>
            </Fragment>
        )
    }
}

export default Category