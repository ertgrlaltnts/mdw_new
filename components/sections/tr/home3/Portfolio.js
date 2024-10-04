'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"


const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
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
        

        {/*  Portfolio Two Start  */}
        <section className="portfolio-two">
            <div className="portfolio-two__top">
                <div className="container">
                    <div className="section-title text-left">
                        <div className="section-title__tagline-box">
                            <p className="section-title__tagline">CHECK OUR LATEST PROJECTS</p>
                        </div>
                        <h2 className="section-title__title">Amazing Products
                            <br/> that Protect and reward</h2>
                    </div>
                </div>
            </div>
            <div className="portfolio-two__bottom">
                <div className="container">
                    <div className="portfolio-two__carousel-container">
                    <Swiper {...swiperOptions} className="portfolio-two__carousel owl-carousel thm-owl__carousel project-style1-carousel owl-dot-style1">
                            
                            {/* Portfolio Two Single Start */}
                            <div className="portfolio-two__single-box">
                                <ul className="portfolio-two__box list-unstyled">
                                    <SwiperSlide>
                                    <li>
                                        <div className="portfolio-two__box-content">
                                            <div className="single-portfolio-two__bg"
                                                style={{ backgroundImage: 'url(assets/images/project/portfolio-2-1.jpg)' }} >
                                            </div>
                                            <div className="img-holder-img-bg"></div>
                                            <div className="portfolio-two__box-content-inner-icon">
                                                <Link href="assets/images/project/portfolio-2-1.jpg" className="img-popup"><i
                                                        className="icon-next"></i></Link>
                                            </div>
                                            <div className="portfolio-two__box-content-inner">
                                                <div className="portfolio-two__box-content-inner-wrapper">
                                                    <p>San Fransisco </p>
                                                    <h4><Link href="portfolio-details">Insurance Analytics</Link></h4>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <li>
                                        <div className="portfolio-two__box-content">
                                            <div className="single-portfolio-two__bg"
                                                style={{ backgroundImage: 'url(assets/images/project/portfolio-2-2.jpg)' }} >
                                            </div>
                                            <div className="img-holder-img-bg"></div>
                                            <div className="portfolio-two__box-content-inner-icon">
                                                <Link href="assets/images/project/portfolio-2-2.jpg" className="img-popup"><i
                                                        className="icon-next"></i></Link>
                                            </div>
                                            <div className="portfolio-two__box-content-inner">
                                                <div className="portfolio-two__box-content-inner-wrapper">
                                                    <p>San Fransisco </p>
                                                    <h4><Link href="portfolio-details">Insurance Analytics</Link></h4>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <li>
                                        <div className="portfolio-two__box-content">
                                            <div className="single-portfolio-two__bg"
                                                style={{ backgroundImage: 'url(assets/images/project/portfolio-2-3.jpg)' }} >
                                            </div>
                                            <div className="img-holder-img-bg"></div>
                                            <div className="portfolio-two__box-content-inner-icon">
                                                <Link href="assets/images/project/portfolio-2-3.jpg" className="img-popup"><i
                                                        className="icon-next"></i></Link>
                                            </div>
                                            <div className="portfolio-two__box-content-inner">
                                                <div className="portfolio-two__box-content-inner-wrapper">
                                                    <p>San Fransisco </p>
                                                    <h4><Link href="portfolio-details">Insurance Analytics</Link></h4>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <li>
                                        <div className="portfolio-two__box-content">
                                            <div className="single-portfolio-two__bg"
                                                style={{ backgroundImage: 'url(assets/images/project/portfolio-2-1.jpg)' }} >
                                            </div>
                                            <div className="img-holder-img-bg"></div>
                                            <div className="portfolio-two__box-content-inner-icon">
                                                <Link href="assets/images/project/portfolio-2-1.jpg" className="img-popup"><i
                                                        className="icon-next"></i></Link>
                                            </div>
                                            <div className="portfolio-two__box-content-inner">
                                                <div className="portfolio-two__box-content-inner-wrapper">
                                                    <p>San Fransisco </p>
                                                    <h4><Link href="portfolio-details">Insurance Analytics</Link></h4>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <li>
                                        <div className="portfolio-two__box-content">
                                            <div className="single-portfolio-two__bg"
                                                style={{ backgroundImage: 'url(assets/images/project/portfolio-2-2.jpg)' }} >
                                            </div>
                                            <div className="img-holder-img-bg"></div>
                                            <div className="portfolio-two__box-content-inner-icon">
                                                <Link href="assets/images/project/portfolio-2-2.jpg" className="img-popup"><i
                                                        className="icon-next"></i></Link>
                                            </div>
                                            <div className="portfolio-two__box-content-inner">
                                                <div className="portfolio-two__box-content-inner-wrapper">
                                                    <p>San Fransisco </p>
                                                    <h4><Link href="portfolio-details">Insurance Analytics</Link></h4>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <li>
                                        <div className="portfolio-two__box-content">
                                            <div className="single-portfolio-two__bg"
                                                style={{ backgroundImage: 'url(assets/images/project/portfolio-2-3.jpg)' }} >
                                            </div>
                                            <div className="img-holder-img-bg"></div>
                                            <div className="portfolio-two__box-content-inner-icon">
                                                <Link href="assets/images/project/portfolio-2-3.jpg" className="img-popup"><i
                                                        className="icon-next"></i></Link>
                                            </div>
                                            <div className="portfolio-two__box-content-inner">
                                                <div className="portfolio-two__box-content-inner-wrapper">
                                                    <p>San Fransisco </p>
                                                    <h4><Link href="portfolio-details">Insurance Analytics</Link></h4>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    </SwiperSlide>
                                </ul>
                            </div>
                            {/* Portfolio Two Single End */}
                            

                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
        {/*  Portfolio Two End  */}
        </>
    )
}
