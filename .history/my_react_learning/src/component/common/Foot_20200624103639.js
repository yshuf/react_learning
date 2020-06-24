import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'


class Foot extends Component {
    render () {
        return (
            <Fragment>
                <footer>
                    <ul>
                        <li>
                            <Link to="/home">首页</Link>
                        </li>
                        <li>
                            <Link to="/category">分类</Link>
                        </li>
                        <li>
                            <a href="">购物车</a>
                        </li>
                        <li>
                            <a href="">我的</a>
                        </li>
                    </ul>
                </footer>
            </Fragment>
        )
    }
}

export default Foot