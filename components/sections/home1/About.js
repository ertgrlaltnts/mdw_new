"use client";
import Link from "next/link";
import Markdown from "markdown-to-jsx";

export default function About({ data, general }) {


  return (
    <>
      {/* About One Start  */}
      <section style={{ marginTop: 100 }} className="about-one">
        <div className="about-one__shape-3 float-bob-x">
          <img src="assets/images/shapes/about-one-shape-3.png" alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="about-one__right">
                <div className="section-title text-left">
                  <div className="section-title__tagline-box">
                    <p className="section-title__tagline">MEDIWALI</p>
                  </div>
                  <h2 className="section-title__title">{data.title}</h2>
                </div>

                <div className="about-one__text-1">
                  <Markdown>{data.description}</Markdown>
                </div>
                <br />
                <ul className="about-one__points list-unstyled">
                  
                  <li>
                    <div className="icon">
                      <span className="fas fa-check-circle"></span>
                    </div>
                    <p>{data.item_1}</p>
                  </li>

                  <li>
                    <div className="icon">
                      <span className="fas fa-check-circle"></span>
                    </div>
                    <p>{data.item_2}</p>
                  </li>

                  <li>
                    <div className="icon">
                      <span className="fas fa-check-circle"></span>
                    </div>
                    <p>{data.item_3}</p>
                  </li>

                </ul>
                <div className="about-one__btn-and-contact">
                  <div className="about-one__btn-box">
                    <Link href="about" className="about-one__btn thm-btn">
                      Discover More
                    </Link>
                  </div>
                  <div className="about-one__contact">
                    <div className="icon">
                      <span className="icon-telephone"></span>
                    </div>
                    <div className="content">
                      <span>Call Us</span>
                      <p>
                        <Link href={`tel:${general.phone_1_call}`}>{general.phone_1}</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About One End  */}
    </>
  );
}
