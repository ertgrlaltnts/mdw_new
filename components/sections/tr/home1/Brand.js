"use client";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

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
    nextEl: ".srn",
    prevEl: ".srp",
  },

  // Pagination
  pagination: {
    el: ".swiper-pagination",
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
  },
};

export default function Brand({ data }) {
  return (
    <>
      {/* Brand One Start */}
      <section className="brand-one">
        <div className="container">
          <Link href={"contracted-institutions"}>
            <Swiper
              autoplay
              {...swiperOptions}
              className="thm-swiper__slider swiper-container"
            >
              <div className="swiper-wrapper">
                {data.map((item, index) => (
                  <SwiperSlide key={index} className="swiper-slide">
                    <img src={`${process.env.NEXT_PUBLIC_IP}${item.attributes.url}`} alt="" />
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          </Link>
        </div>
      </section>
      {/* Brand One End */}
    </>
  );
}
