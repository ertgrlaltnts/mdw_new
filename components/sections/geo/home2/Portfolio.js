'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"


const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 4,
    spaceBetween: 10,
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
            // spaceBetween: 30,
        },
        575: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        767: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        991: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
        1199: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
        1350: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
    }



}

 
export default function Portfolio() {
    return (
    <>
            
            {/* Portfolio One Start  */}
                <section className="portfolio-one">
                    <div className="portfolio-one__wrapper">
                    <Swiper {...swiperOptions} className="portfolio-one__carousel owl-carousel owl-theme thm-owl__carousel">
                            {/* Portfolio One Single Start */}
                            <SwiperSlide className="item">
                                <div className="portfolio-one__single">
                                    <div className="portfolio-one__img-box">
                                        <div className="portfolio-one__img">
                                            <img src="assets/images/project/portfolio-1-1.jpg" alt=""/>
                                        </div>
                                        <div className="portfolio-one__content">
                                            <div className="portfolio-one__content-shape"
                                                style={{ backgroundImage: 'url(assets/images/shapes/portfolio-one-content-shape.png)' }} >
                                            </div>
                                            <div className="portfolio-one__title-box">
                                                <p className="portfolio-one__sub-title">San Fransisco</p>
                                                <h3 className="portfolio-one__title"><Link href="portfolio-details">Health
                                                        Analytics</Link></h3>
                                            </div>
                                            <div className="portfolio-one__arrow">
                                                <Link href="assets/images/project/portfolio-1-1.jpg" className="img-popup">
                                                    <span className="icon-next"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* Portfolio One Single End */}
                            {/* Portfolio One Single Start */}
                            <SwiperSlide className="item">
                                <div className="portfolio-one__single">
                                    <div className="portfolio-one__img-box">
                                        <div className="portfolio-one__img">
                                            <img src="assets/images/project/portfolio-1-2.jpg" alt=""/>
                                        </div>
                                        <div className="portfolio-one__content">
                                            <div className="portfolio-one__content-shape"
                                                style={{ backgroundImage: 'url(assets/images/shapes/portfolio-one-content-shape.png)' }} >
                                            </div>
                                            <div className="portfolio-one__title-box">
                                                <p className="portfolio-one__sub-title">San Fransisco</p>
                                                <h3 className="portfolio-one__title"><Link href="portfolio-details">Insurance
                                                        Analytics</Link></h3>
                                            </div>
                                            <div className="portfolio-one__arrow">
                                                <Link href="assets/images/project/portfolio-1-2.jpg" className="img-popup">
                                                    <span className="icon-next"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* Portfolio One Single End */}
                            {/* Portfolio One Single Start */}
                            <SwiperSlide className="item">
                                <div className="portfolio-one__single">
                                    <div className="portfolio-one__img-box">
                                        <div className="portfolio-one__img">
                                            <img src="assets/images/project/portfolio-1-3.jpg" alt=""/>
                                        </div>
                                        <div className="portfolio-one__content">
                                            <div className="portfolio-one__content-shape"
                                                style={{ backgroundImage: 'url(assets/images/shapes/portfolio-one-content-shape.png)' }} >
                                            </div>
                                            <div className="portfolio-one__title-box">
                                                <p className="portfolio-one__sub-title">San Fransisco</p>
                                                <h3 className="portfolio-one__title"><Link href="portfolio-details">Travels
                                                        Analytics</Link></h3>
                                            </div>
                                            <div className="portfolio-one__arrow">
                                                <Link href="assets/images/project/portfolio-1-3.jpg" className="img-popup">
                                                    <span className="icon-next"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* Portfolio One Single End */}
                            {/* Portfolio One Single Start */}
                            <SwiperSlide className="item">
                                <div className="portfolio-one__single">
                                    <div className="portfolio-one__img-box">
                                        <div className="portfolio-one__img">
                                            <img src="assets/images/project/portfolio-1-4.jpg" alt=""/>
                                        </div>
                                        <div className="portfolio-one__content">
                                            <div className="portfolio-one__content-shape"
                                                style={{ backgroundImage: 'url(assets/images/shapes/portfolio-one-content-shape.png)' }} >
                                            </div>
                                            <div className="portfolio-one__title-box">
                                                <p className="portfolio-one__sub-title">San Fransisco</p>
                                                <h3 className="portfolio-one__title"><Link href="portfolio-details">Life
                                                        Analytics</Link></h3>
                                            </div>
                                            <div className="portfolio-one__arrow">
                                                <Link href="assets/images/project/portfolio-1-4.jpg" className="img-popup">
                                                    <span className="icon-next"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* Portfolio One Single End */}
                            {/* Portfolio One Single Start */}
                            <SwiperSlide className="item">
                                <div className="portfolio-one__single">
                                    <div className="portfolio-one__img-box">
                                        <div className="portfolio-one__img">
                                            <img src="assets/images/project/portfolio-1-2.jpg" alt=""/>
                                        </div>
                                        <div className="portfolio-one__content">
                                            <div className="portfolio-one__content-shape"
                                                style={{ backgroundImage: 'url(assets/images/shapes/portfolio-one-content-shape.png)' }} >
                                            </div>
                                            <div className="portfolio-one__title-box">
                                                <p className="portfolio-one__sub-title">San Fransisco</p>
                                                <h3 className="portfolio-one__title"><Link href="portfolio-details">Insurance
                                                        Analytics</Link></h3>
                                            </div>
                                            <div className="portfolio-one__arrow">
                                                <Link href="assets/images/project/portfolio-1-2.jpg" className="img-popup">
                                                    <span className="icon-next"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* Portfolio One Single End */}
                            {/* Portfolio One Single Start */}
                            <SwiperSlide className="item">
                                <div className="portfolio-one__single">
                                    <div className="portfolio-one__img-box">
                                        <div className="portfolio-one__img">
                                            <img src="assets/images/project/portfolio-1-3.jpg" alt=""/>
                                        </div>
                                        <div className="portfolio-one__content">
                                            <div className="portfolio-one__content-shape"
                                                style={{ backgroundImage: 'url(assets/images/shapes/portfolio-one-content-shape.png)' }} >
                                            </div>
                                            <div className="portfolio-one__title-box">
                                                <p className="portfolio-one__sub-title">San Fransisco</p>
                                                <h3 className="portfolio-one__title"><Link href="portfolio-details">Travels
                                                        Analytics</Link></h3>
                                            </div>
                                            <div className="portfolio-one__arrow">
                                                <Link href="assets/images/project/portfolio-1-3.jpg" className="img-popup">
                                                    <span className="icon-next"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* Portfolio One Single End */}
                            {/* Portfolio One Single Start */}
                            <SwiperSlide className="item">
                                <div className="portfolio-one__single">
                                    <div className="portfolio-one__img-box">
                                        <div className="portfolio-one__img">
                                            <img src="assets/images/project/portfolio-1-4.jpg" alt=""/>
                                        </div>
                                        <div className="portfolio-one__content">
                                            <div className="portfolio-one__content-shape"
                                                style={{ backgroundImage: 'url(assets/images/shapes/portfolio-one-content-shape.png)' }} >
                                            </div>
                                            <div className="portfolio-one__title-box">
                                                <p className="portfolio-one__sub-title">San Fransisco</p>
                                                <h3 className="portfolio-one__title"><Link href="portfolio-details">Life
                                                        Analytics</Link></h3>
                                            </div>
                                            <div className="portfolio-one__arrow">
                                                <Link href="assets/images/project/portfolio-1-4.jpg" className="img-popup">
                                                    <span className="icon-next"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* Portfolio One Single End */}
                        </Swiper>
                    </div>
                </section>
            {/* Portfolio One End  */}
        </>
    )
}
