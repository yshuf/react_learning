import React, { Component, Fragment } from 'react'
import { Route, NavLink } from 'react-dom';

import './index.css'
class Home extends Component {
    render () {
        return (
            <Fragment>
                <div className="home-box">
                    <ul>
                        <NavLink to='/category/1'>分类一</NavLink>
                        <NavLink to='/category/2'>分类一</NavLink>
                        <NavLink to='/category/3'>分类一</NavLink>
                    </ul>
                </div>

                <Route to='/category/1' render={() => { return <div>分类一</div> }}></Route>
                <Route to='/category/2' render={() => { return <div>分类二</div> }}></Route>
                <Route to='/category/3' render={() => { return <div>分类三</div> }}></Route>
            </Fragment>
        )
    }
}

export default Home