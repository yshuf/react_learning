import React, { Component } from 'react'
import Swiper from 'swiper'

const Items = (props) => {
    return <div className="swiper-slide">Slide 1</div>
}

class Banner extends Component {
    constructor() {
        super();
        this.swiper = null;
    }

    componentDidMount () {
        // 写死
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
            })
            .catch(error => {
                console.log(error)
            })
    }

    renderItem = () => {
        return this.state.banners.map(() => {
            return <Items item={item}}></Items >
        })
}

render() {
    return (
        <div className="swiper-container" ref={el => this.swiper = el}>
            <div className="swiper-wrapper">
                <div className="swiper-slide">Slide 1</div>
                <div className="swiper-slide">Slide 2</div>
                <div className="swiper-slide">Slide 3</div>
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