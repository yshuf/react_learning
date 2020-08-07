import React, { Component, Fragment } from 'react'
import './index.css'

import { Route, Switch, Redirect } from 'react-router-dom'
import Home from '../../page/home/home'
import Category from '../../page/category/index'
import Mine from '../../page/mine/index'
import ShopCar from '../../page/shopCar/index'
import Error from '../common/Error/index'


export default class LayOut extends Component {
    render () {
        return (
            <Fragment>
                <div>
                    <div className='header'>  router </div>
                </div>

                <div>
                    {/* 路由导航区域 */}
                    <nav className="nav">
                        <a className="nav-link active" href="#">home</a>
                        <a className="nav-link" href="#">mine</a>
                        <a className="nav-link" href="#">category</a>
                        <a className="nav-link disabled" href="#" aria-disabled="true">shopCar</a>
                    </nav>
                </div>

                <div>
                    {/* 路由展示区域 */}
                    <Switch>
                        <Redirect from='/' to='/home' exact></Redirect>
                        <Route path='/home' component={Home} />
                        <Route path='/category' component={Category} />
                        <Route path='/mine' component={Mine} />
                        <Route path='/shopCar' component={ShopCar} />
                        <Route component={Error} />
                    </Switch>
                </div>
            </Fragment>
        )
    }

}