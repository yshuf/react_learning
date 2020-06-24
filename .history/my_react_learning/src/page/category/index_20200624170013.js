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
                            <NavLink to='/category/1'>分类一</NavLink>
                        </li>
                        <li>
                            <NavLink to='/category/1'>分类二</NavLink>
                        </li>
                        <li>
                            <NavLink to='/category/1'>分类三</NavLink>
                        </li>
                    </ul>
                </div>
            </Fragment>
        )
    }
}

export default Category