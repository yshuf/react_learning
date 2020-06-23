import React, { Component } from 'react'
import Swiper from 'swiper'

const Items = (props) => {
    // props.item.src
    // props.src
    return <div className="swiper-slide">
        <img src={props.src} alt="" />
    </div>
}

class Banner extends Component {
    constructor() {
        super();
        this.swiper = null;
        this.state = {
            banner: []
        }
    }

    componentDidMount () {
        // 写死 方案一
        // this.mySwiper = new Swiper(this.swiper, {
        //     direction: 'vertical', // 垂直切换选项
        //     loop: true, // 循环模式选项

        //     // 如果需要分页器
        //     pagination: {
        //         el: '.swiper-pagination',
        //     },

        //     // 如果需要前进后退按钮
        //     navigation: {
        //         nextEl: '.swiper-button-next',
        //         prevEl: '.swiper-button-prev',
        //     },

        //     // 如果需要滚动条
        //     scrollbar: {
        //         el: '.swiper-scrollbar',
        //     },
        // })

        fetch('/data.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({ banner: data })

                setTimeout(() => {
                    this.mySwiper = new Swiper(this.swiper, {
                        // direction: 'vertical', // 垂直切换选项
                        loop: true, // 循环模式选项

                        // 如果需要分页器
                        pagination: {
                            el: '.swiper-pagination',
                        },

                        // 如果需要前进后退按钮
                        navigation: {
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        },

                        // 如果需要滚动条
                        scrollbar: {
                            el: '.swiper-scrollbar',
                        },
                    })
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    componentDidUpdate () {
        //  方案二
        // this.mySwiper = new Swiper(this.swiper, {
        //     // direction: 'vertical', // 垂直切换选项
        //     loop: true, // 循环模式选项

        //     // 如果需要分页器
        //     pagination: {
        //         el: '.swiper-pagination',
        //     },

        //     // 如果需要前进后退按钮
        //     navigation: {
        //         nextEl: '.swiper-button-next',
        //         prevEl: '.swiper-button-prev',
        //     },

        //     // 如果需要滚动条
        //     scrollbar: {
        //         el: '.swiper-scrollbar',
        //     },
        // })
    }

    renderItem = () => {
        return this.state.banner.map((item) => {
            return <Items {...item} key={item.id}></Items >
        })
    }

    render () {
        return (
            <div className="swiper-container" ref={el => this.swiper = el}>
                <div className="swiper-wrapper">
                    {/* <div className="swiper-slide">Slide 1</div>
                    <div className="swiper-slide">Slide 2</div>
                    <div className="swiper-slide">Slide 3</div> */}
                    {this.renderItem()}
                </div>
                {/* <!-- 如果需要分页器 --> */}
                <div className="swiper-pagination"></div>

                {/* <!-- 如果需要导航按钮 --> */}
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>

                {/* <!-- 如果需要滚动条 --> */}
                <div className="swiper-scrollbar"></div>
            </div>
        )
    }
}
export default Banner