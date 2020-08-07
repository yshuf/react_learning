import React, { Component, Fragment } from 'react'
import './index.css'

import { Route, Switch } from 'react-router-dom'


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
                        <Route path='/home' component={Home}>home</Route>
                    </Switch>
                </div>
            </Fragment>
        )
    }

}