
'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import ModalVideo from 'react-modal-video'
import { useState } from 'react'
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

export default function Banner() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <section className="main-slider-two">
                <Swiper {...swiperOptions} className="main-slider-two__carousel owl-carousel owl-theme thm-owl__carousel">
                    
                    <SwiperSlide className="item main-slider-two__slide-1">
                        <div className="main-slider-two__shape-1 float-bob-y">
                            <img src="assets/images/shapes/main-slider-two-shape-1.png" alt=""/>
                        </div>
                        <div className="main-slider-two__shape-2 float-bob-y">
                            <img src="assets/images/shapes/main-slider-two-shape-2.png" alt=""/>
                        </div>
                        <div className="main-slider-two__shape-3"></div>
                        <div className="main-slider-two__shape-4"></div>
                        <div className="main-slider-two__shape-5"></div>
                        <div className="main-slider-two__shape-6"></div>
                        <div className="main-slider-two__bg"
                            style={{ backgroundImage: 'url(assets/images/backgrounds/slider-2-1.jpg)' }} >
                        </div>{/*  /.slider-one__bg  */}
                        <div className="container">
                            <div className="main-slider-two__content">
                                <div className="main-slider-two__content-top">
                                    <div className="section-title text-left">
                                        <div className="section-title__tagline-box">
                                            <p className="section-title__tagline">WE ARE INSURANCE AGENCY</p>
                                        </div>
                                        <h2 className="section-title__title">Digital
                                            <br/> Insurance
                                            <br/> Solution</h2>
                                    </div>
                                </div>
                                <div className="main-slider-two__btn-and-call">
                                    <Link href="about" className="main-slider-two__btn thm-btn">Discover More</Link>
                                    <div className="main-slider-two__call">
                                        <div className="icon">
                                            <span className="icon-phone-1"></span>
                                        </div>
                                        <Link href="tel:+19993452577">+1 (999) 345 2577</Link>
                                    </div>
                                </div>
                                <div className="main-slider-two__video-link">
                                    <a onClick={() => setOpen(true)} className="video-popup">
                                        <div className="main-slider-two__video-icon">
                                            <span className="icon-play-2"></span>
                                            <i className="ripple"></i>
                                        </div>
                                    </a>
                                    <div className="main-slider-two__video-shape-1 img-bounce">
                                        <img src="assets/images/shapes/main-slider-two-video-shape-1.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </SwiperSlide>
                    
                    <SwiperSlide className="item main-slider-two__slide-2">
                        <div className="main-slider-two__shape-1 float-bob-y">
                            <img src="assets/images/shapes/main-slider-two-shape-1.png" alt=""/>
                        </div>
                        <div className="main-slider-two__shape-2 float-bob-y">
                            <img src="assets/images/shapes/main-slider-two-shape-2.png" alt=""/>
                        </div>
                        <div className="main-slider-two__shape-3"></div>
                        <div className="main-slider-two__shape-4"></div>
                        <div className="main-slider-two__shape-5"></div>
                        <div className="main-slider-two__shape-6"></div>
                        <div className="main-slider-two__bg"
                            style={{ backgroundImage: 'url(assets/images/backgrounds/slider-2-2.jpg)' }} >
                        </div>{/*  /.slider-one__bg  */}
                        <div className="container">
                            <div className="main-slider-two__content">
                                <div className="main-slider-two__content-top">
                                    <div className="section-title text-left">
                                        <div className="section-title__tagline-box">
                                            <p className="section-title__tagline">WE ARE INSURANCE AGENCY</p>
                                        </div>
                                        <h2 className="section-title__title">Digital
                                            <br/> Insurance
                                            <br/> Solution</h2>
                                    </div>
                                </div>
                                <div className="main-slider-two__btn-and-call">
                                    <Link href="about" className="main-slider-two__btn thm-btn">Discover More</Link>
                                    <div className="main-slider-two__call">
                                        <div className="icon">
                                            <span className="icon-phone-1"></span>
                                        </div>
                                        <Link href="tel:+19993452577">+1 (999) 345 2577</Link>
                                    </div>
                                </div>
                                <div className="main-slider-two__video-link">
                                    <a onClick={() => setOpen(true)} className="video-popup">
                                        <div className="main-slider-two__video-icon">
                                            <span className="icon-play-2"></span>
                                            <i className="ripple"></i>
                                        </div>
                                    </a>
                                    <div className="main-slider-two__video-shape-1 img-bounce">
                                        <img src="assets/images/shapes/main-slider-two-video-shape-1.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </SwiperSlide>
                    
                    
                    <SwiperSlide className="item main-slider-two__slide-1">
                        <div className="main-slider-two__shape-1 float-bob-y">
                            <img src="assets/images/shapes/main-slider-two-shape-1.png" alt=""/>
                        </div>
                        <div className="main-slider-two__shape-2 float-bob-y">
                            <img src="assets/images/shapes/main-slider-two-shape-2.png" alt=""/>
                        </div>
                        <div className="main-slider-two__shape-3"></div>
                        <div className="main-slider-two__shape-4"></div>
                        <div className="main-slider-two__shape-5"></div>
                        <div className="main-slider-two__shape-6"></div>
                        <div className="main-slider-two__bg"
                            style={{ backgroundImage: 'url(assets/images/backgrounds/slider-2-3.jpg)' }} >
                        </div>{/*  /.slider-one__bg  */}
                        <div className="container">
                            <div className="main-slider-two__content">
                                <div className="main-slider-two__content-top">
                                    <div className="section-title text-left">
                                        <div className="section-title__tagline-box">
                                            <p className="section-title__tagline">WE ARE INSURANCE AGENCY</p>
                                        </div>
                                        <h2 className="section-title__title">Digital
                                            <br/> Insurance
                                            <br/> Solution</h2>
                                    </div>
                                </div>
                                <div className="main-slider-two__btn-and-call">
                                    <Link href="about" className="main-slider-two__btn thm-btn">Discover More</Link>
                                    <div className="main-slider-two__call">
                                        <div className="icon">
                                            <span className="icon-phone-1"></span>
                                        </div>
                                        <Link href="tel:+19993452577">+1 (999) 345 2577</Link>
                                    </div>
                                </div>
                                <div className="main-slider-two__video-link">
                                    <a onClick={() => setOpen(true)} className="video-popup">
                                        <div className="main-slider-two__video-icon">
                                            <span className="icon-play-2"></span>
                                            <i className="ripple"></i>
                                        </div>
                                    </a>
                                    <div className="main-slider-two__video-shape-1 img-bounce">
                                        <img src="assets/images/shapes/main-slider-two-video-shape-1.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </SwiperSlide>
                    
                </Swiper>

            </section>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Get7rqXYrbQ" onClose={() => setOpen(false)} /> 

        </>
    )
}
