import React, { Component, Fragment } from 'react'
import './index.css'

import { Route, Switch, Redirect } from 'react-router-dom'
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
                        <Redirect from='/' to='/home'></Redirect>
                        <Route path='/home' component={Home} />
                    </Switch>
                </div>
            </Fragment>
        )
    }

}