"use client";
import { useState } from "react";

export default function Faq({ data }) {
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  return (
    <>
      {/* FAQ One Start  */}
      <section className="faq-one">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="faq-one__left">
                <div className="faq-one__shape-1 float-bob-x">
                  <img src="../assets/images/shapes/faq-one-shape-1.png" alt="" />
                </div>
                <div className="faq-one__img-box">
                  <div className="faq-one__img">
                    <img
                      src={`${process.env.NEXT_PUBLIC_IP}${data.faq_image.data.attributes.url}`}
                      alt=""
                    />
                  </div>
                  <div className="faq-one__quick-box">
                    <div className="faq-one__quick-icon">
                      <span className="icon-check"></span>
                    </div>
                    <h4 className="faq-one__quick-text">
                    სწრაფი და მარტივი
                      <br /> მხარდაჭერის სერვისი
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="faq-one__right">
                <div className="section-title text-left">
                  <div className="section-title__tagline-box">
                    <p className="section-title__tagline">MEDIWALI</p>
                  </div>
                  <h2 className="section-title__title">
                    {data.faq_title}
                    <br /> {data.faq_title_2}
                  </h2>
                </div>
                <div
                  className="accrodion-grp faq-one-accrodion"
                  data-grp-name="faq-one-accrodion-1"
                >
                  {data.faqs.map((item, index) => (
                    <div
                      key={index}
                      className={
                        isActive.key == index + 1
                          ? "accrodion active"
                          : "accrodion"
                      }
                      onClick={() => handleToggle(index + 1)}
                    >
                      <div className="accrodion-title">
                        <h4>{item.title}</h4>
                      </div>
                      <div className="accrodion-content">
                        <div className="inner">
                          <p>{item.description}</p>
                        </div>
                        {/*  /.inner  */}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ One End  */}
    </>
  );
}
