import React, { Component, Fragment } from 'react'
import './index.css'

import { Route, Switch } from 'react-router-dom'
import Home from '../../page/home/home'


export default class LayOut extends Component {
    render () {
        return (
            <Fragment>
                <div>
                    <div className='header'>  router </div>
                </div>

                <div>

                </div>

                <div>
                    {/* 路由展示区域 */}
                    <Switch>
                        <redirect path='/' strict></redirect>
                        <Route path='/home' component={Home}>home</Route>
                    </Switch>
                </div>
            </Fragment>
        )
    }

}