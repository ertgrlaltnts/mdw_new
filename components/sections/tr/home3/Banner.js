
'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
}


export default function Banner() {
    return (
        <>
        
            {/*  Main Sllider Start  */}
                <section className="main-slider-three">
                    <Swiper {...swiperOptions} className="main-slider-three__carousel owl-carousel owl-theme thm-owl__carousel">
                        

                            <SwiperSlide className="item main-slider-three__slide-1">
                                <div className="main-slider-three__img">
                                    <img src="assets/images/resources/main-slider-three-img-1.png" alt="" className="float-bob-y"/>
                                </div>
                                <div className="main-slider-three__shape-2 img-bounce">
                                    <img src="assets/images/shapes/main-slider-three-shape-2.png" alt=""/>
                                </div>
                                <div className="main-slider-three__shape-3 float-bob-x">
                                    <img src="assets/images/shapes/main-slider-three-shape-3.png" alt=""/>
                                </div>
                                <div className="main-slider-three__shape-4 float-bob-y"></div>
                                <div className="main-slider-three__shape-5 zoominout"></div>
                                <div className="container">
                                    <div className="main-slider-three__content">
                                        <h2 className="main-slider-three__title">Secure <br/> Your <span
                                                className="main-slider-three__color-text">Future</span> <br/>
                                            <span className="main-slider-three__color-text-two">Sheildign</span> Your <br/>
                                            Risk Free
                                        </h2>
                                        <p className="main-slider-three__text">Phasellus placerat, ante sit amet sodales fermentum <br/>
                                            urus lectus aliquam eros, elementum blandit</p>
                                        <div className="main-slider-three__btn-and-text-box">
                                            <Link href="about" className="main-slider-three__btn thm-btn">get started</Link>
                                            <p className="main-slider-three__text-box"> <span>$1000k</span> Up Coverage</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className="item main-slider-three__slide-2">
                                <div className="main-slider-three__img">
                                    <img src="assets/images/resources/main-slider-three-img-1.png" alt="" className="float-bob-y"/>
                                </div>
                                <div className="main-slider-three__shape-2 img-bounce">
                                    <img src="assets/images/shapes/main-slider-three-shape-2.png" alt=""/>
                                </div>
                                <div className="main-slider-three__shape-3 float-bob-x">
                                    <img src="assets/images/shapes/main-slider-three-shape-3.png" alt=""/>
                                </div>
                                <div className="main-slider-three__shape-4 float-bob-y"></div>
                                <div className="main-slider-three__shape-5 zoominout"></div>
                                <div className="container">
                                    <div className="main-slider-three__content">
                                        <h2 className="main-slider-three__title">Secure <br/> Your <span
                                                className="main-slider-three__color-text">Future</span> <br/>
                                            <span className="main-slider-three__color-text-two">Sheildign</span> Your <br/>
                                            Risk Free
                                        </h2>
                                        <p className="main-slider-three__text">Phasellus placerat, ante sit amet sodales fermentum <br/>
                                            urus lectus aliquam eros, elementum blandit</p>
                                        <div className="main-slider-three__btn-and-text-box">
                                            <Link href="about" className="main-slider-three__btn thm-btn">get started</Link>
                                            <p className="main-slider-three__text-box"> <span>$1000k</span> Up Coverage</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>


                            <SwiperSlide className="item main-slider-three__slide-3">
                                <div className="main-slider-three__img">
                                    <img src="assets/images/resources/main-slider-three-img-1.png" alt="" className="float-bob-y"/>
                                </div>
                                <div className="main-slider-three__shape-2 img-bounce">
                                    <img src="assets/images/shapes/main-slider-three-shape-2.png" alt=""/>
                                </div>
                                <div className="main-slider-three__shape-3 float-bob-x">
                                    <img src="assets/images/shapes/main-slider-three-shape-3.png" alt=""/>
                                </div>
                                <div className="main-slider-three__shape-4 float-bob-y"></div>
                                <div className="main-slider-three__shape-5 zoominout"></div>
                                <div className="container">
                                    <div className="main-slider-three__content">
                                        <h2 className="main-slider-three__title">Secure <br/> Your <span
                                                className="main-slider-three__color-text">Future</span> <br/>
                                            <span className="main-slider-three__color-text-two">Sheildign</span> Your <br/>
                                            Risk Free
                                        </h2>
                                        <p className="main-slider-three__text">Phasellus placerat, ante sit amet sodales fermentum <br/>
                                            urus lectus aliquam eros, elementum blandit</p>
                                        <div className="main-slider-three__btn-and-text-box">
                                            <Link href="about" className="main-slider-three__btn thm-btn">get started</Link>
                                            <p className="main-slider-three__text-box"> <span>$1000k</span> Up Coverage</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>


                    </Swiper>
                </section>
            {/* Main Sllider Start  */}
            
        </>
    )
}
