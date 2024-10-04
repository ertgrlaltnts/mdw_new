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


export default function Testimonial() {
    return (
        <>

        {/* Testimonial Three Start  */}
        <section className="testimonial-three">
            <div className="testimonial-three__shape-5">
                <img src="assets/images/shapes/testimonial-three-shape-5.png" alt=""/>
            </div>
            <div className="testimonial-three__shape-6">
                <img src="assets/images/shapes/testimonial-three-shape-6.png" alt=""/>
            </div>
            <div className="container">
                <div className="section-title text-center">
                    <div className="section-title__tagline-box">
                        <p className="section-title__tagline">OUR CLIENT AWESOME RIVEWS</p>
                    </div>
                    <h2 className="section-title__title">What Our Clients Say
                        <br/> About Sonchoy</h2>
                </div>
                <div className="testimonial-three__bottom">
                <Swiper {...swiperOptions} className="testimonial-three__carousel owl-carousel owl-theme thm-owl__carousel">
                        {/* Testimonial Three Single Start */}
                        <SwiperSlide>
                        <div className="item">
                            <div className="testimonial-three__single">
                                <div className="testimonial-three__quote">
                                    <span className="icon-quote-1"></span>
                                </div>
                                <div className="testimonial-three__quote-2">
                                    <span className="icon-quote-1"></span>
                                </div>
                                <div className="testimonial-three__shape-1"></div>
                                <div className="testimonial-three__shape-2"></div>
                                <div className="testimonial-three__shape-3"></div>
                                <div className="testimonial-three__shape-4"></div>
                                <div className="testimonial-three__client-img">
                                    <img src="assets/images/testimonial/testimonial-3-1.jpg" alt=""/>
                                </div>
                                <p className="testimonial-three__text">Bring to the table win-win strategies to ensure
                                    proactive domination. At the end of the day going forward normal that has evolved
                                    from
                                    operational X is on the</p>
                                <div className="testimonial-three__client-info">
                                    <h3 className="testimonial-three__client-name"><Link href="testimonial">Janes
                                            Cooper</Link></h3>
                                    <p className="testimonial-three__client-sub-title">Designer</p>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/* Testimonial Three Single Start */}
                        {/* Testimonial Three Single Start */}
                        <SwiperSlide>
                        <div className="item">
                            <div className="testimonial-three__single">
                                <div className="testimonial-three__quote">
                                    <span className="icon-quote-1"></span>
                                </div>
                                <div className="testimonial-three__quote-2">
                                    <span className="icon-quote-1"></span>
                                </div>
                                <div className="testimonial-three__shape-1"></div>
                                <div className="testimonial-three__shape-2"></div>
                                <div className="testimonial-three__shape-3"></div>
                                <div className="testimonial-three__shape-4"></div>
                                <div className="testimonial-three__client-img">
                                    <img src="assets/images/testimonial/testimonial-3-2.jpg" alt=""/>
                                </div>
                                <p className="testimonial-three__text">Bring to the table win-win strategies to ensure
                                    proactive domination. At the end of the day going forward normal that has evolved
                                    from
                                    operational X is on the</p>
                                <div className="testimonial-three__client-info">
                                    <h3 className="testimonial-three__client-name"><Link href="testimonial">David
                                            Cooper</Link></h3>
                                    <p className="testimonial-three__client-sub-title">Designer</p>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/* Testimonial Three Single Start */}
                        {/* Testimonial Three Single Start */}
                        <SwiperSlide>
                        <div className="item">
                            <div className="testimonial-three__single">
                                <div className="testimonial-three__quote">
                                    <span className="icon-quote-1"></span>
                                </div>
                                <div className="testimonial-three__quote-2">
                                    <span className="icon-quote-1"></span>
                                </div>
                                <div className="testimonial-three__shape-1"></div>
                                <div className="testimonial-three__shape-2"></div>
                                <div className="testimonial-three__shape-3"></div>
                                <div className="testimonial-three__shape-4"></div>
                                <div className="testimonial-three__client-img">
                                    <img src="assets/images/testimonial/testimonial-3-3.jpg" alt=""/>
                                </div>
                                <p className="testimonial-three__text">Bring to the table win-win strategies to ensure
                                    proactive domination. At the end of the day going forward normal that has evolved
                                    from
                                    operational X is on the</p>
                                <div className="testimonial-three__client-info">
                                    <h3 className="testimonial-three__client-name"><Link href="testimonial">Adam Smith</Link>
                                    </h3>
                                    <p className="testimonial-three__client-sub-title">Designer</p>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/* Testimonial Three Single Start */}
                        {/* Testimonial Three Single Start */}
                        <SwiperSlide>
                        <div className="item">
                            <div className="testimonial-three__single">
                                <div className="testimonial-three__quote">
                                    <span className="icon-quote-1"></span>
                                </div>
                                <div className="testimonial-three__quote-2">
                                    <span className="icon-quote-1"></span>
                                </div>
                                <div className="testimonial-three__shape-1"></div>
                                <div className="testimonial-three__shape-2"></div>
                                <div className="testimonial-three__shape-3"></div>
                                <div className="testimonial-three__shape-4"></div>
                                <div className="testimonial-three__client-img">
                                    <img src="assets/images/testimonial/testimonial-3-4.jpg" alt=""/>
                                </div>
                                <p className="testimonial-three__text">Bring to the table win-win strategies to ensure
                                    proactive domination. At the end of the day going forward normal that has evolved
                                    from
                                    operational X is on the</p>
                                <div className="testimonial-three__client-info">
                                    <h3 className="testimonial-three__client-name"><Link href="testimonial">Tamanna
                                            Vat</Link></h3>
                                    <p className="testimonial-three__client-sub-title">Designer</p>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/* Testimonial Three Single Start */}
                        {/* Testimonial Three Single Start */}
                        <SwiperSlide>
                        <div className="item">
                            <div className="testimonial-three__single">
                                <div className="testimonial-three__quote">
                                    <span className="icon-quote-1"></span>
                                </div>
                                <div className="testimonial-three__quote-2">
                                    <span className="icon-quote-1"></span>
                                </div>
                                <div className="testimonial-three__shape-1"></div>
                                <div className="testimonial-three__shape-2"></div>
                                <div className="testimonial-three__shape-3"></div>
                                <div className="testimonial-three__shape-4"></div>
                                <div className="testimonial-three__client-img">
                                    <img src="assets/images/testimonial/testimonial-3-5.jpg" alt=""/>
                                </div>
                                <p className="testimonial-three__text">Bring to the table win-win strategies to ensure
                                    proactive domination. At the end of the day going forward normal that has evolved
                                    from
                                    operational X is on the</p>
                                <div className="testimonial-three__client-info">
                                    <h3 className="testimonial-three__client-name"><Link href="testimonial">Alisha
                                            Martin</Link></h3>
                                    <p className="testimonial-three__client-sub-title">Designer</p>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/* Testimonial Three Single Start */}
                        {/* Testimonial Three Single Start */}
                        <SwiperSlide>
                        <div className="item">
                            <div className="testimonial-three__single">
                                <div className="testimonial-three__quote">
                                    <span className="icon-quote-1"></span>
                                </div>
                                <div className="testimonial-three__quote-2">
                                    <span className="icon-quote-1"></span>
                                </div>
                                <div className="testimonial-three__shape-1"></div>
                                <div className="testimonial-three__shape-2"></div>
                                <div className="testimonial-three__shape-3"></div>
                                <div className="testimonial-three__shape-4"></div>
                                <div className="testimonial-three__client-img">
                                    <img src="assets/images/testimonial/testimonial-3-6.jpg" alt=""/>
                                </div>
                                <p className="testimonial-three__text">Bring to the table win-win strategies to ensure
                                    proactive domination. At the end of the day going forward normal that has evolved
                                    from
                                    operational X is on the</p>
                                <div className="testimonial-three__client-info">
                                    <h3 className="testimonial-three__client-name"><Link href="testimonial">Leslie
                                            Iban</Link></h3>
                                    <p className="testimonial-three__client-sub-title">Designer</p>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/* Testimonial Three Single Start */}
                    </Swiper>
                </div>
            </div>
        </section>
        {/* Testimonial Three End  */}

            
        </>
    )
}
