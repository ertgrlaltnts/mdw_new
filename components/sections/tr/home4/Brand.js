'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"


const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 5,
    spaceBetween: 30,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.srn',
        prevEl: '.srp',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
    }



}




export default function Brand() {
    return (
        <>
           

        {/* Brand Two Start */}
        <section className="brand-two">
            <div className="brand-two__shape-1" style={{ backgroundImage: 'url(assets/images/shapes/brand-two-shape-1.png)' }} >
            </div>
            <div className="brand-two__bg" style={{ backgroundImage: 'url(assets/images/backgrounds/brand-two-bg.png)' }} ></div>
            <div className="container">
                <div className="brand-two__inner">
                <Swiper {...swiperOptions} className="brand-two__carousel owl-carousel owl-theme thm-owl__carousel">
                        {/* Brand Two Single Start */}
                        <SwiperSlide className="item">
                            <div className="brand-two__single">
                                <div className="brand-two__img">
                                    <img src="assets/images/brand/brand-2-1.png" alt=""/>
                                </div>
                                <div className="brand-two__hover-img">
                                    <img src="assets/images/brand/brand-hover-2-1.png" alt=""/>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* Brand Two Single End */}
                        {/* Brand Two Single Start */}
                        <SwiperSlide className="item">
                            <div className="brand-two__single">
                                <div className="brand-two__img">
                                    <img src="assets/images/brand/brand-2-2.png" alt=""/>
                                </div>
                                <div className="brand-two__hover-img">
                                    <img src="assets/images/brand/brand-hover-2-2.png" alt=""/>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* Brand Two Single End */}
                        {/* Brand Two Single Start */}
                        <SwiperSlide className="item">
                            <div className="brand-two__single">
                                <div className="brand-two__img">
                                    <img src="assets/images/brand/brand-2-3.png" alt=""/>
                                </div>
                                <div className="brand-two__hover-img">
                                    <img src="assets/images/brand/brand-hover-2-3.png" alt=""/>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* Brand Two Single End */}
                        {/* Brand Two Single Start */}
                        <SwiperSlide className="item">
                            <div className="brand-two__single">
                                <div className="brand-two__img">
                                    <img src="assets/images/brand/brand-2-4.png" alt=""/>
                                </div>
                                <div className="brand-two__hover-img">
                                    <img src="assets/images/brand/brand-hover-2-4.png" alt=""/>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* Brand Two Single End */}
                        {/* Brand Two Single Start */}
                        <SwiperSlide className="item">
                            <div className="brand-two__single">
                                <div className="brand-two__img">
                                    <img src="assets/images/brand/brand-2-5.png" alt=""/>
                                </div>
                                <div className="brand-two__hover-img">
                                    <img src="assets/images/brand/brand-hover-2-5.png" alt=""/>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* Brand Two Single End */}
                        {/* Brand Two Single Start */}
                        <SwiperSlide className="item">
                            <div className="brand-two__single">
                                <div className="brand-two__img">
                                    <img src="assets/images/brand/brand-2-1.png" alt=""/>
                                </div>
                                <div className="brand-two__hover-img">
                                    <img src="assets/images/brand/brand-hover-2-1.png" alt=""/>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* Brand Two Single End */}
                        {/* Brand Two Single Start */}
                        <SwiperSlide className="item">
                            <div className="brand-two__single">
                                <div className="brand-two__img">
                                    <img src="assets/images/brand/brand-2-2.png" alt=""/>
                                </div>
                                <div className="brand-two__hover-img">
                                    <img src="assets/images/brand/brand-hover-2-2.png" alt=""/>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* Brand Two Single End */}
                        {/* Brand Two Single Start */}
                        <SwiperSlide className="item">
                            <div className="brand-two__single">
                                <div className="brand-two__img">
                                    <img src="assets/images/brand/brand-2-3.png" alt=""/>
                                </div>
                                <div className="brand-two__hover-img">
                                    <img src="assets/images/brand/brand-hover-2-3.png" alt=""/>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* Brand Two Single End */}
                        {/* Brand Two Single Start */}
                        <SwiperSlide className="item">
                            <div className="brand-two__single">
                                <div className="brand-two__img">
                                    <img src="assets/images/brand/brand-2-4.png" alt=""/>
                                </div>
                                <div className="brand-two__hover-img">
                                    <img src="assets/images/brand/brand-hover-2-4.png" alt=""/>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* Brand Two Single End */}
                        {/* Brand Two Single Start */}
                        <SwiperSlide className="item">
                            <div className="brand-two__single">
                                <div className="brand-two__img">
                                    <img src="assets/images/brand/brand-2-5.png" alt=""/>
                                </div>
                                <div className="brand-two__hover-img">
                                    <img src="assets/images/brand/brand-hover-2-5.png" alt=""/>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* Brand Two Single End */}
                        {/* Brand Two Single Start */}
                        <SwiperSlide className="item">
                            <div className="brand-two__single">
                                <div className="brand-two__img">
                                    <img src="assets/images/brand/brand-2-1.png" alt=""/>
                                </div>
                                <div className="brand-two__hover-img">
                                    <img src="assets/images/brand/brand-hover-2-1.png" alt=""/>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* Brand Two Single End */}
                        {/* Brand Two Single Start */}
                        <SwiperSlide className="item">
                            <div className="brand-two__single">
                                <div className="brand-two__img">
                                    <img src="assets/images/brand/brand-2-2.png" alt=""/>
                                </div>
                                <div className="brand-two__hover-img">
                                    <img src="assets/images/brand/brand-hover-2-2.png" alt=""/>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* Brand Two Single End */}
                        {/* Brand Two Single Start */}
                        <SwiperSlide className="item">
                            <div className="brand-two__single">
                                <div className="brand-two__img">
                                    <img src="assets/images/brand/brand-2-3.png" alt=""/>
                                </div>
                                <div className="brand-two__hover-img">
                                    <img src="assets/images/brand/brand-hover-2-3.png" alt=""/>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* Brand Two Single End */}
                        {/* Brand Two Single Start */}
                        <SwiperSlide className="item">
                            <div className="brand-two__single">
                                <div className="brand-two__img">
                                    <img src="assets/images/brand/brand-2-4.png" alt=""/>
                                </div>
                                <div className="brand-two__hover-img">
                                    <img src="assets/images/brand/brand-hover-2-4.png" alt=""/>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* Brand Two Single End */}
                        {/* Brand Two Single Start */}
                        <SwiperSlide className="item">
                            <div className="brand-two__single">
                                <div className="brand-two__img">
                                    <img src="assets/images/brand/brand-2-5.png" alt=""/>
                                </div>
                                <div className="brand-two__hover-img">
                                    <img src="assets/images/brand/brand-hover-2-5.png" alt=""/>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* Brand Two Single End */}
                        {/* Brand Two Single Start */}
                        <SwiperSlide className="item">
                            <div className="brand-two__single">
                                <div className="brand-two__img">
                                    <img src="assets/images/brand/brand-2-1.png" alt=""/>
                                </div>
                                <div className="brand-two__hover-img">
                                    <img src="assets/images/brand/brand-hover-2-1.png" alt=""/>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* Brand Two Single End */}
                        {/* Brand Two Single Start */}
                        <SwiperSlide className="item">
                            <div className="brand-two__single">
                                <div className="brand-two__img">
                                    <img src="assets/images/brand/brand-2-2.png" alt=""/>
                                </div>
                                <div className="brand-two__hover-img">
                                    <img src="assets/images/brand/brand-hover-2-2.png" alt=""/>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* Brand Two Single End */}
                        {/* Brand Two Single Start */}
                        <SwiperSlide className="item">
                            <div className="brand-two__single">
                                <div className="brand-two__img">
                                    <img src="assets/images/brand/brand-2-3.png" alt=""/>
                                </div>
                                <div className="brand-two__hover-img">
                                    <img src="assets/images/brand/brand-hover-2-3.png" alt=""/>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* Brand Two Single End */}
                        {/* Brand Two Single Start */}
                        <SwiperSlide className="item">
                            <div className="brand-two__single">
                                <div className="brand-two__img">
                                    <img src="assets/images/brand/brand-2-4.png" alt=""/>
                                </div>
                                <div className="brand-two__hover-img">
                                    <img src="assets/images/brand/brand-hover-2-4.png" alt=""/>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* Brand Two Single End */}
                        {/* Brand Two Single Start */}
                        <SwiperSlide className="item">
                            <div className="brand-two__single">
                                <div className="brand-two__img">
                                    <img src="assets/images/brand/brand-2-5.png" alt=""/>
                                </div>
                                <div className="brand-two__hover-img">
                                    <img src="assets/images/brand/brand-hover-2-5.png" alt=""/>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* Brand Two Single End */}
                    </Swiper>
                </div>
            </div>
        </section>
        {/* Brand Two End */}
        </>
    )
}
