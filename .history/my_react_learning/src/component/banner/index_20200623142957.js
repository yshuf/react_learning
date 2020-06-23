import React, { Component } from 'react'

class Banner extends Component {
    render () {
        return (
            <div className="swiper-container">
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