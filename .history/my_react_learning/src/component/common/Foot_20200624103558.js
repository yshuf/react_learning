import React, { Component, Fragment } from 'react'


class Foot extends Component {
    render () {
        return (
            <Fragment>
                <footer>
                    <ul>
                        <li>
                            <a href="/home">首页</a>
                        </li>
                        <li>
                            <a href="/category">分类</a>
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