import React, { Component, Fragment } from 'react'
import './index.css'

import { Route, Switch, Redirect, NavLink } from 'react-router-dom'
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
                    <nav className="nav nav-pills nav-fill">
                        <NavLink className="nav-item nav-link" activeClassName='active' to="/home">home</NavLink>
                        <NavLink className="nav-item nav-link" activeClassName='active' to="/mine">mine</NavLink>
                        <NavLink className="nav-item nav-link" activeClassName='active' to="/category">category</NavLink>
                        <NavLink className="nav-item nav-link" activeClassName='active' to="/shopCar">shopCar</NavLink>
                    </nav>
                </div>

                <div>
                    {/* 路由展示区域 */}
                    <Switch>
                        {/* 重定向 */}
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