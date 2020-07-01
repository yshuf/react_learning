import React, { Component, Fragment } from 'react'
import { Route，NavLink } from 'react-dom';

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

                <Route to='/category/1' render={() => { return <div>分类一</div> }}></Route>
                <Route to='/category/2' render={}></Route>
                <Route to='/category/3' render={}></Route>
            </Fragment>
        )
    }
}

export default Home