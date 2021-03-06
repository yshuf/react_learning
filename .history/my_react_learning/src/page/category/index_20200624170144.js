import React, { Component, Fragment } from 'react'
import { Route, NavLink } from 'react-router-dom'

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
                            <NavLink to='/category/2'>分类二</NavLink>
                        </li>
                        <li>
                            <NavLink to='/category/3'>分类三</NavLink>
                        </li>
                    </ul>

                    <Route path='/category/1' render={() => { return <div>分类一</div> }}></Route>
                    <Route path='/category/2' render={() => { return <div>分类二</div> }}></Route>
                    <Route path='/category/3' render={() => { return <div>分类三</div> }}></Route>
                </div>
            </Fragment>
        )
    }
}

export default Category