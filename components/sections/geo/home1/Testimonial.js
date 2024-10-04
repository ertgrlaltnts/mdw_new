"use client";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

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
  },
};


export default function Testimonial({data}) {
  return (
    <>
      {/* Testimonial One Start  */}
      <section style={{ paddingTop: 120 }} className="testimonial-one">
        <div className="testimonial-one__shape-1 img-bounce">
          <img src="assets/images/shapes/testimonial-one-shape-1.png" alt="" />
        </div>
        <div className="container">
          <div className="section-title text-center">
            <div className="section-title__tagline-box">
              <p className="section-title__tagline">MEDIWALI</p>
            </div>
            <h2 className="section-title__title">
           {data.comment_title}
              <br /> {data.comment_title_2}
            </h2>
          </div>
          <div className="testimonial-one__bottom">
            <Swiper
              {...swiperOptions}
              className="testimonial-one__carousel owl-carousel thm-owl__carousel"
            >
              {data.comments.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="item">
                    <div className="testimonial-one__single">
                      <div className="testimonial-one__quote">
                        <img src="assets/images/icon/quote-icon-1.png" alt="" />
                      </div>
                      <div className="testimonial-one__text-box">
                        <p className="testimonial-one__text">
                          {item.description}
                        </p>
                      </div>
                      <div className="testimonial-one__client-info">
                        <div className="testimonial-one__client-img">
                          <img
                            src={`${process.env.NEXT_PUBLIC_IP}${item.image.data.attributes.url}`}
                            alt=""
                          />
                        </div>
 
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
      {/* Testimonial One End  */}
    </>
  );
}
