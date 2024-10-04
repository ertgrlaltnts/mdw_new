'use client'
import { slugify } from "markdown-to-jsx"
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


const data = [
    {
        _id:1,
        name: "Bariatric Surgery",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image:"assets/images/main/special/bariartic-1.png",
        icon:"assets/images/main/special/bariartic.png",
        tags:["Test", "tst", "tew2"],
        slug:"bariartic-surgery",
    },

    {
        _id:2,
        name: "Rhinoplasty",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image:"assets/images/main/special/rhino-1.png",
        icon:"assets/images/main/special/rhino.png",
        tags:["Test", "tst", "tew2"],
        slug:"rhinoplasty",
    },

    {
        _id:3,
        name: "Hair Transplant",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image:"assets/images/main/special/hair-1.png",
        icon:"assets/images/main/special/hair.png",
        tags:["Test", "tst", "tew2"],
        slug:"hair-transplant",
    },

    {
        _id:5,
        name: "Brazilian Butt Lift",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image:"assets/images/main/special/brazilian-1.png",
        icon:"assets/images/main/special/brazilian.png",
        tags:["Test", "tst", "tew2"],
        slug:"brazilian-butt-lift",
    },

    {
        _id:6,
        name: "Breast Aesthetics",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image:"assets/images/main/special/breast-1.png",
        icon:"assets/images/main/special/breast.png",
        tags:["Test", "tst", "tew2"],
        slug:"breast-aesthetics",
    },

    {
        _id:7,
        name: "Medical Aesthetics",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image:"assets/images/main/special/medical-1.png",
        icon:"assets/images/main/special/medical.png",
        tags:["Test", "tst", "tew2"],
        slug:"medical-aesthetics",
    },

    {
        _id:8,
        name: "All on Four",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image:"assets/images/main/special/dent-1.png",
        icon:"assets/images/main/special/dent.png",
        tags:["Test", "tst", "tew2"],
        slug:"all-on-four",
    },
];


export default function Service() {
    return (
        <>

     {/* Services One Start  */}
        <section className="services-one">
            <div className="services-one__shape-1 float-bob-x">
                <img src="assets/images/shapes/services-one-shape-1.png" alt=""/>
            </div>
            <div className="services-one__shape-2 rotate-me">
                <img src="assets/images/shapes/services-one-shape-2.png" alt=""/>
            </div>
            <div className="container">
                <div className="section-title text-left">
                    <div className="section-title__tagline-box">
                        <p className="section-title__tagline">MEDIWALI</p>
                    </div>
                    <h2 className="section-title__title">Special Offers
            For You</h2>
                </div>
                <div className="services-one__bottom">
                    <Swiper {...swiperOptions} className="services-one__carousel">
                            {/* Services One Single Start */}
                            {data.map((item , index) =>         <SwiperSlide key={index} className="item">
                                <div className="services-one__single">
                                    <div className="services-one__title-box">
                                        <h3 className="services-one__title"><Link href={`/special-offers/${item.slug}`}>{item.name}</Link>
                                        </h3>
                                    </div>
                                    <div className="services-one__img-box">
                                        <div className="services-one__img">
                                            <img src={item.image} alt=""/>
                                        </div>
                                        <div className="services-one__icon">
                                           <img style={{width:50, height:50}} src={item.icon} />
                                        </div>
                                    </div>
                                    <div className="services-one__read-more">
                                        <Link href={`/special-offers/${item.slug}`}>REVIEW OFFER<span className="icon-next"></span></Link>
                                    </div>
                                </div>
                            </SwiperSlide>)}
                    
                            {/* Services One Single End */}

                    </Swiper>
                </div>
            </div>
        </section>
        {/* Services One End  */}
        </>
    )
}
