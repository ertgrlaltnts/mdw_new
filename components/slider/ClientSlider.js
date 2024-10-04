"use client";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
       delay: 3000,
       disableOnInteraction: false,
   },
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

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    575: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    767: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    991: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    1199: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    1350: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
  },
};

export default function ClientSlider1({ data }) {
  return (
    <>
      <Swiper {...swiperOptions} className="theme_carousel owl-theme">
        {data.map((item, index) => (
          <SwiperSlide key={index} className="slide-item">
            <figure className="image-box">
              <img
                style={{ objectFit: "contain", width: "100%" }}
                src={`${process.env.NEXT_PUBLIC_IP}${item.attributes.url}`}
                alt=""
              />
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
