"use client";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

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
    nextEl: ".h1n",
    prevEl: ".h1p",
  },

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
};

export default function Banner({ data }) {
  return (
    <>
      <section className="main-slider-four">
        <Swiper
          {...swiperOptions}
          className="main-slider-four__carousel owl-carousel owl-theme thm-owl__carousel"
        >
          {data.map((item, index) => (
            <SwiperSlide key={index} className="item main-slider-four__slide-1">
              <div
                className="main-slider-four__bg"
                style={{
                  backgroundImage: `url(${process.env.NEXT_PUBLIC_IP}${item.image.data.attributes.url})`,
                }}
              ></div>
              {/*  /.slider-one__bg  */}

              <div className="container">
                <div className="main-slider-four__content">
                  <div className="main-slider-four__icon">
                    <img src="assets/images/loader.png" alt="" />
                  </div>
                  <h2 className="main-slider-four__title">
                    {item.text_1} <br />
                    {item.text_2} 
                  </h2>
                  <div className="main-slider-four__btn-box">
                    <Link
                      href={`/${item.link}`}
                      className="main-slider-four__btn thm-btn"
                    >
                      გვერდზე გადასვლა
                    </Link>
                    <Link
                      href="/geo/contact"
                      className="main-slider-four__btn-2 thm-btn"
                    >
                      დაგვიკავშირდით
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      {/* Main Sllider Start  */}
    </>
  );
}
