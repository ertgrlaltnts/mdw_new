'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"


const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 4,
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




export default function Team() {
    return (
        <>
            {/* Team Three Start  */}
        <section className="team-three">
            <div className="team-three__shape-1 rotate-me">
                <img src="assets/images/shapes/team-three-shape-1.png" alt=""/>
            </div>
            <div className="container">
                <div className="team-three__top">
                    <div className="section-title text-left">
                        <div className="section-title__tagline-box">
                            <p className="section-title__tagline">OUR TEAM MEMBER</p>
                        </div>
                        <h2 className="section-title__title">Our Talented Team
                            <br/> Member Behind Sonchoy</h2>
                    </div>
                    <div className="team-three__btn-box">
                        <Link href="#" className="team-three__btn thm-btn">JOIN OUR TEAM</Link>
                    </div>
                </div>
                <div className="team-three__bottom">
                    <Swiper {...swiperOptions} className="team-three__carousel owl-carousel owl-theme thm-owl__carousel">
                        {/* Team Three Single Start */}
                        <SwiperSlide className="item">
                            <div className="team-three__single">
                                <div className="team-three__img-box">
                                    <div className="team-three__img">
                                        <img src="assets/images/team/team-3-1.jpg" alt=""/>
                                    </div>
                                    <div className="team-three__social-and-share">
                                        <div className="team-three__share">
                                            <Link href="team-details"><span className="icon-share"></span></Link>
                                        </div>
                                        <div className="team-three__social">
                                            <Link href="team-details"><span className="icon-facebook"></span></Link>
                                            <Link href="team-details"><span className="icon-vimeo"></span></Link>
                                            <Link href="team-details"><span className="icon-twitter-1"></span></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-three__content">
                                    <h3 className="team-three__title"><Link href="team-details">Annete Black</Link></h3>
                                    <p>Engineer</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* Team Three Single End */}
                        {/* Team Three Single Start */}
                        <SwiperSlide className="item">
                            <div className="team-three__single">
                                <div className="team-three__img-box">
                                    <div className="team-three__img">
                                        <img src="assets/images/team/team-3-2.jpg" alt=""/>
                                    </div>
                                    <div className="team-three__social-and-share">
                                        <div className="team-three__share">
                                            <Link href="team-details"><span className="icon-share"></span></Link>
                                        </div>
                                        <div className="team-three__social">
                                            <Link href="team-details"><span className="icon-facebook"></span></Link>
                                            <Link href="team-details"><span className="icon-vimeo"></span></Link>
                                            <Link href="team-details"><span className="icon-twitter-1"></span></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-three__content">
                                    <h3 className="team-three__title"><Link href="team-details">Anannya Wifey</Link></h3>
                                    <p>Developer</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* Team Three Single End */}
                        {/* Team Three Single Start */}
                        <SwiperSlide className="item">
                            <div className="team-three__single">
                                <div className="team-three__img-box">
                                    <div className="team-three__img">
                                        <img src="assets/images/team/team-3-3.jpg" alt=""/>
                                    </div>
                                    <div className="team-three__social-and-share">
                                        <div className="team-three__share">
                                            <Link href="team-details"><span className="icon-share"></span></Link>
                                        </div>
                                        <div className="team-three__social">
                                            <Link href="team-details"><span className="icon-facebook"></span></Link>
                                            <Link href="team-details"><span className="icon-vimeo"></span></Link>
                                            <Link href="team-details"><span className="icon-twitter-1"></span></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-three__content">
                                    <h3 className="team-three__title"><Link href="team-details">Shamim Khan</Link></h3>
                                    <p>Co Founder</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* Team Three Single End */}
                        {/* Team Three Single Start */}
                        <SwiperSlide className="item">
                            <div className="team-three__single">
                                <div className="team-three__img-box">
                                    <div className="team-three__img">
                                        <img src="assets/images/team/team-3-4.jpg" alt=""/>
                                    </div>
                                    <div className="team-three__social-and-share">
                                        <div className="team-three__share">
                                            <Link href="team-details"><span className="icon-share"></span></Link>
                                        </div>
                                        <div className="team-three__social">
                                            <Link href="team-details"><span className="icon-facebook"></span></Link>
                                            <Link href="team-details"><span className="icon-vimeo"></span></Link>
                                            <Link href="team-details"><span className="icon-twitter-1"></span></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-three__content">
                                    <h3 className="team-three__title"><Link href="team-details">Ananta Khan</Link></h3>
                                    <p>Designer</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* Team Three Single End */}
                        {/* Team Three Single Start */}
                        <SwiperSlide className="item">
                            <div className="team-three__single">
                                <div className="team-three__img-box">
                                    <div className="team-three__img">
                                        <img src="assets/images/team/team-3-1.jpg" alt=""/>
                                    </div>
                                    <div className="team-three__social-and-share">
                                        <div className="team-three__share">
                                            <Link href="team-details"><span className="icon-share"></span></Link>
                                        </div>
                                        <div className="team-three__social">
                                            <Link href="team-details"><span className="icon-facebook"></span></Link>
                                            <Link href="team-details"><span className="icon-vimeo"></span></Link>
                                            <Link href="team-details"><span className="icon-twitter-1"></span></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-three__content">
                                    <h3 className="team-three__title"><Link href="team-details">Annete Black</Link></h3>
                                    <p>Engineer</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* Team Three Single End */}
                        {/* Team Three Single Start */}
                        <SwiperSlide className="item">
                            <div className="team-three__single">
                                <div className="team-three__img-box">
                                    <div className="team-three__img">
                                        <img src="assets/images/team/team-3-2.jpg" alt=""/>
                                    </div>
                                    <div className="team-three__social-and-share">
                                        <div className="team-three__share">
                                            <Link href="team-details"><span className="icon-share"></span></Link>
                                        </div>
                                        <div className="team-three__social">
                                            <Link href="team-details"><span className="icon-facebook"></span></Link>
                                            <Link href="team-details"><span className="icon-vimeo"></span></Link>
                                            <Link href="team-details"><span className="icon-twitter-1"></span></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-three__content">
                                    <h3 className="team-three__title"><Link href="team-details">Anannya Wifey</Link></h3>
                                    <p>Developer</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* Team Three Single End */}
                        {/* Team Three Single Start */}
                        <SwiperSlide className="item">
                            <div className="team-three__single">
                                <div className="team-three__img-box">
                                    <div className="team-three__img">
                                        <img src="assets/images/team/team-3-3.jpg" alt=""/>
                                    </div>
                                    <div className="team-three__social-and-share">
                                        <div className="team-three__share">
                                            <Link href="team-details"><span className="icon-share"></span></Link>
                                        </div>
                                        <div className="team-three__social">
                                            <Link href="team-details"><span className="icon-facebook"></span></Link>
                                            <Link href="team-details"><span className="icon-vimeo"></span></Link>
                                            <Link href="team-details"><span className="icon-twitter-1"></span></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-three__content">
                                    <h3 className="team-three__title"><Link href="team-details">Shamim Khan</Link></h3>
                                    <p>Co Founder</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* Team Three Single End */}
                        {/* Team Three Single Start */}
                        <SwiperSlide className="item">
                            <div className="team-three__single">
                                <div className="team-three__img-box">
                                    <div className="team-three__img">
                                        <img src="assets/images/team/team-3-4.jpg" alt=""/>
                                    </div>
                                    <div className="team-three__social-and-share">
                                        <div className="team-three__share">
                                            <Link href="team-details"><span className="icon-share"></span></Link>
                                        </div>
                                        <div className="team-three__social">
                                            <Link href="team-details"><span className="icon-facebook"></span></Link>
                                            <Link href="team-details"><span className="icon-vimeo"></span></Link>
                                            <Link href="team-details"><span className="icon-twitter-1"></span></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-three__content">
                                    <h3 className="team-three__title"><Link href="team-details">Ananta Khan</Link></h3>
                                    <p>Designer</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* Team Three Single End */}
                        {/* Team Three Single Start */}
                        <SwiperSlide className="item">
                            <div className="team-three__single">
                                <div className="team-three__img-box">
                                    <div className="team-three__img">
                                        <img src="assets/images/team/team-3-1.jpg" alt=""/>
                                    </div>
                                    <div className="team-three__social-and-share">
                                        <div className="team-three__share">
                                            <Link href="team-details"><span className="icon-share"></span></Link>
                                        </div>
                                        <div className="team-three__social">
                                            <Link href="team-details"><span className="icon-facebook"></span></Link>
                                            <Link href="team-details"><span className="icon-vimeo"></span></Link>
                                            <Link href="team-details"><span className="icon-twitter-1"></span></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-three__content">
                                    <h3 className="team-three__title"><Link href="team-details">Annete Black</Link></h3>
                                    <p>Engineer</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* Team Three Single End */}
                        {/* Team Three Single Start */}
                        <SwiperSlide className="item">
                            <div className="team-three__single">
                                <div className="team-three__img-box">
                                    <div className="team-three__img">
                                        <img src="assets/images/team/team-3-2.jpg" alt=""/>
                                    </div>
                                    <div className="team-three__social-and-share">
                                        <div className="team-three__share">
                                            <Link href="team-details"><span className="icon-share"></span></Link>
                                        </div>
                                        <div className="team-three__social">
                                            <Link href="team-details"><span className="icon-facebook"></span></Link>
                                            <Link href="team-details"><span className="icon-vimeo"></span></Link>
                                            <Link href="team-details"><span className="icon-twitter-1"></span></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-three__content">
                                    <h3 className="team-three__title"><Link href="team-details">Anannya Wifey</Link></h3>
                                    <p>Developer</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* Team Three Single End */}
                        {/* Team Three Single Start */}
                        <SwiperSlide className="item">
                            <div className="team-three__single">
                                <div className="team-three__img-box">
                                    <div className="team-three__img">
                                        <img src="assets/images/team/team-3-3.jpg" alt=""/>
                                    </div>
                                    <div className="team-three__social-and-share">
                                        <div className="team-three__share">
                                            <Link href="team-details"><span className="icon-share"></span></Link>
                                        </div>
                                        <div className="team-three__social">
                                            <Link href="team-details"><span className="icon-facebook"></span></Link>
                                            <Link href="team-details"><span className="icon-vimeo"></span></Link>
                                            <Link href="team-details"><span className="icon-twitter-1"></span></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-three__content">
                                    <h3 className="team-three__title"><Link href="team-details">Shamim Khan</Link></h3>
                                    <p>Co Founder</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* Team Three Single End */}
                        {/* Team Three Single Start */}
                        <SwiperSlide className="item">
                            <div className="team-three__single">
                                <div className="team-three__img-box">
                                    <div className="team-three__img">
                                        <img src="assets/images/team/team-3-4.jpg" alt=""/>
                                    </div>
                                    <div className="team-three__social-and-share">
                                        <div className="team-three__share">
                                            <Link href="team-details"><span className="icon-share"></span></Link>
                                        </div>
                                        <div className="team-three__social">
                                            <Link href="team-details"><span className="icon-facebook"></span></Link>
                                            <Link href="team-details"><span className="icon-vimeo"></span></Link>
                                            <Link href="team-details"><span className="icon-twitter-1"></span></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-three__content">
                                    <h3 className="team-three__title"><Link href="team-details">Ananta Khan</Link></h3>
                                    <p>Designer</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* Team Three Single End */}
                        {/* Team Three Single Start */}
                        <SwiperSlide className="item">
                            <div className="team-three__single">
                                <div className="team-three__img-box">
                                    <div className="team-three__img">
                                        <img src="assets/images/team/team-3-1.jpg" alt=""/>
                                    </div>
                                    <div className="team-three__social-and-share">
                                        <div className="team-three__share">
                                            <Link href="team-details"><span className="icon-share"></span></Link>
                                        </div>
                                        <div className="team-three__social">
                                            <Link href="team-details"><span className="icon-facebook"></span></Link>
                                            <Link href="team-details"><span className="icon-vimeo"></span></Link>
                                            <Link href="team-details"><span className="icon-twitter-1"></span></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-three__content">
                                    <h3 className="team-three__title"><Link href="team-details">Annete Black</Link></h3>
                                    <p>Engineer</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* Team Three Single End */}
                        {/* Team Three Single Start */}
                        <SwiperSlide className="item">
                            <div className="team-three__single">
                                <div className="team-three__img-box">
                                    <div className="team-three__img">
                                        <img src="assets/images/team/team-3-2.jpg" alt=""/>
                                    </div>
                                    <div className="team-three__social-and-share">
                                        <div className="team-three__share">
                                            <Link href="team-details"><span className="icon-share"></span></Link>
                                        </div>
                                        <div className="team-three__social">
                                            <Link href="team-details"><span className="icon-facebook"></span></Link>
                                            <Link href="team-details"><span className="icon-vimeo"></span></Link>
                                            <Link href="team-details"><span className="icon-twitter-1"></span></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-three__content">
                                    <h3 className="team-three__title"><Link href="team-details">Anannya Wifey</Link></h3>
                                    <p>Developer</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* Team Three Single End */}
                        {/* Team Three Single Start */}
                        <SwiperSlide className="item">
                            <div className="team-three__single">
                                <div className="team-three__img-box">
                                    <div className="team-three__img">
                                        <img src="assets/images/team/team-3-3.jpg" alt=""/>
                                    </div>
                                    <div className="team-three__social-and-share">
                                        <div className="team-three__share">
                                            <Link href="team-details"><span className="icon-share"></span></Link>
                                        </div>
                                        <div className="team-three__social">
                                            <Link href="team-details"><span className="icon-facebook"></span></Link>
                                            <Link href="team-details"><span className="icon-vimeo"></span></Link>
                                            <Link href="team-details"><span className="icon-twitter-1"></span></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-three__content">
                                    <h3 className="team-three__title"><Link href="team-details">Shamim Khan</Link></h3>
                                    <p>Co Founder</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* Team Three Single End */}
                        {/* Team Three Single Start */}
                        <SwiperSlide className="item">
                            <div className="team-three__single">
                                <div className="team-three__img-box">
                                    <div className="team-three__img">
                                        <img src="assets/images/team/team-3-4.jpg" alt=""/>
                                    </div>
                                    <div className="team-three__social-and-share">
                                        <div className="team-three__share">
                                            <Link href="team-details"><span className="icon-share"></span></Link>
                                        </div>
                                        <div className="team-three__social">
                                            <Link href="team-details"><span className="icon-facebook"></span></Link>
                                            <Link href="team-details"><span className="icon-vimeo"></span></Link>
                                            <Link href="team-details"><span className="icon-twitter-1"></span></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-three__content">
                                    <h3 className="team-three__title"><Link href="team-details">Ananta Khan</Link></h3>
                                    <p>Designer</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* Team Three Single End */}
                    </Swiper>
                </div>
            </div>
        </section>
        {/* Team Three End  */}
        </>
    )
}
