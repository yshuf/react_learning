import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import AddName from './component/addName/index.js'
// import DataPart from './component/dataPart/dataPart.js'
// import Father from './component/communication/Father.js'
// import Chart from './component/Charts/index.js'
// import HigherOrderComponent from './component/Higher-Order-Components'
// import Banner from './component/banner/index'
// import HookComponent from './component/HookComponent/index'
import Head from './component/common/Head'
import Home from './page/home/index'
import Category from './page/category/index'
import ShopCar from './page/shopCar/index'
import Mine from './page/mine/index'
import Foot from './component/common/Foot'
import { Route, Redirect, Switch, withRouter } from 'react-router-dom'
/**
 * @returns
 * react 中没有路由表，只有一个路由工具（组件）叫做 Route
 * 
 */
class App extends Component {

    componentDidMount () {
        this.redirect()
    }

    UNSAFE_componentWillReceiveProps () {
        this.redirect()
    }

    redirect = () => {
        let { location, history } = this.props;
        let pathname = location.pathname
        console.log(pathname === '/category')
        if (pathname == '/category') {
            console.log(1)
            // 编程式导航 push replace（不会将历史记录存入浏览器） 
            history.push('/category/1')
        }
    }

    render (h) {
        return (
            <div className="App" >
                {/* <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
            </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
            </a>
                </header> */}
                {/* <AddName></AddName> */}
                {/* <Chart></Chart> */}
                {/* <DataPart></DataPart>*/}
                {/* <Father></Father> */}
                {/* <HigherOrderComponent></HigherOrderComponent> */}

                {/* <h3>组件的生命周期</h3> */}

                {/* swiper的使用  <h3>
                    swiper
               </h3>
                <Banner></Banner> */}
                <Head></Head >
                {/* <Route exact path='/' component={Home}></Route> */}
                <Switch Switch >
                    <Redirect from='/' to='/home' exact></Redirect>
                    <Route path='/home' component={Home} ></Route>
                    <Route path='/category' component={Category} ></Route>
                    <Route path='/shopCar' component={ShopCar} ></Route>
                    <Route path='/mine' component={Mine} ></Route>
                </Switch >
                <Foot></Foot>
                {/* <HookComponent></HookComponent> */}
            </div >
        );
    }

}

export default withRouter(App);
