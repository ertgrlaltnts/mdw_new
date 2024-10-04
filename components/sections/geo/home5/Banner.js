
'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
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

const swiperOptions1 = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
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
            {/*  Main Slider Five Start  */}
        <section className="main-slider-five">
            <div className="main-slider-five__inner">
                <div className="main-slider-five__main-content">
                    <Swiper {...swiperOptions} className="swiper-container" id="main-slider-five__carousel">
                        <div className="swiper-wrapper">

                            <SwiperSlide className="swiper-slide">
                                <div className="main-slider-five__main-content-inner-box">
                                    <div className="main-slider-five__bg"
                                        style={{ backgroundImage: 'url(assets/images/backgrounds/slider-5-1.jpg)' }} ></div>
                                    <div className="main-slider-five__shape-1">
                                        <img src="assets/images/shapes/main-slider-five-shape-1.png" alt=""/>
                                    </div>
                                    <div className="main-slider-five__shape-2">
                                        <img src="assets/images/shapes/main-slider-five-shape-2.png" alt=""/>
                                    </div>
                                    <div className="container">
                                        <div className="main-slider-five__main-content-inner">
                                            <h2 className="main-slider-five__title">Trusted & <br/>
                                                Smart Way <br/>
                                                Insurance Agency</h2>
                                            <div className="main-slider-five__btn-and-text-box">
                                                <Link href="contact" className="main-slider-five__btn thm-btn">LET’S GET
                                                    STARTED</Link>
                                                <p className="main-slider-five__text-box"> <span>$1000k</span> Up Coverage
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>{/*  /.swiper-slide  */}

                            <SwiperSlide className="swiper-slide">
                                <div className="main-slider-five__main-content-inner-box">
                                    <div className="main-slider-five__bg"
                                        style={{ backgroundImage: 'url(assets/images/backgrounds/slider-5-2.jpg)' }} ></div>
                                    <div className="main-slider-five__shape-1">
                                        <img src="assets/images/shapes/main-slider-five-shape-1.png" alt=""/>
                                    </div>
                                    <div className="main-slider-five__shape-2">
                                        <img src="assets/images/shapes/main-slider-five-shape-2.png" alt=""/>
                                    </div>
                                    <div className="container">
                                        <div className="main-slider-five__main-content-inner">
                                            <h2 className="main-slider-five__title">Trusted & <br/>
                                                Smart Way <br/>
                                                Insurance Agency</h2>
                                            <div className="main-slider-five__btn-and-text-box">
                                                <Link href="contact" className="main-slider-five__btn thm-btn">LET’S GET
                                                    STARTED</Link>
                                                <p className="main-slider-five__text-box"> <span>$1000k</span> Up Coverage
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>{/*  /.swiper-slide  */}

                            <SwiperSlide className="swiper-slide">
                                <div className="main-slider-five__main-content-inner-box">
                                    <div className="main-slider-five__bg"
                                        style={{ backgroundImage: 'url(assets/images/backgrounds/slider-5-3.jpg)' }} ></div>
                                    <div className="main-slider-five__shape-1">
                                        <img src="assets/images/shapes/main-slider-five-shape-1.png" alt=""/>
                                    </div>
                                    <div className="main-slider-five__shape-2">
                                        <img src="assets/images/shapes/main-slider-five-shape-2.png" alt=""/>
                                    </div>
                                    <div className="container">
                                        <div className="main-slider-five__main-content-inner">
                                            <h2 className="main-slider-five__title">Trusted & <br/>
                                                Smart Way <br/>
                                                Insurance Agency</h2>
                                            <div className="main-slider-five__btn-and-text-box">
                                                <Link href="contact" className="main-slider-five__btn thm-btn">LET’S GET
                                                    STARTED</Link>
                                                <p className="main-slider-five__text-box"> <span>$1000k</span> Up Coverage
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>{/*  /.swiper-slide  */}


                        </div>
                    </Swiper>
                    <div id="main-slider-five__carousel-pagination"></div>
                </div>

                <div className="main-slider-five__thumb-box">
                    <div className="swiper-container" id="main-slider-five__thumb">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="main-slider-five__img-holder">
                                    <img src="assets/images/resources/main-slider-five-thumb-1-1.jpg" alt=""/>
                                </div>
                            </div>{/*  /.swiper-slide  */}
                            <div className="swiper-slide">
                                <div className="main-slider-five__img-holder">
                                    <img src="assets/images/resources/main-slider-five-thumb-1-2.jpg" alt=""/>
                                </div>
                            </div>{/*  /.swiper-slide  */}
                            <div className="swiper-slide">
                                <div className="main-slider-five__img-holder">
                                    <img src="assets/images/resources/main-slider-five-thumb-1-3.jpg" alt=""/>
                                </div>
                            </div>{/*  /.swiper-slide  */}
                        </div>
                    </div>
                </div>


            </div>
        </section>
        {/*  Main Slider Five End  */}
        </>
    )
}
