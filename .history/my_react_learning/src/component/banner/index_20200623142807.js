import React, { Component } from 'react'

class Banner extends Component {
    render () {
        return (
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">Slide 1</div>
                    <div class="swiper-slide">Slide 2</div>
                    <div class="swiper-slide">Slide 3</div>
                </div>
                {/* <!-- 如果需要分页器 --> */}
                <div class="swiper-pagination"></div>

                {/* <!-- 如果需要导航按钮 --> */}
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>

                {/* <!-- 如果需要滚动条 --> */}
                <div class="swiper-scrollbar"></div>
            </div>
        )
    }
}
export default Banner