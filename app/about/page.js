import CounterUp from "@/components/elements/CounterUp";
import BrandSlider from "@/components/slider/BrandSlider";
import Layout from "@/components/layout/Layout";
import Testimonial from "@/components/sections/home1/Testimonial";
import Link from "next/link";
import axios from "axios";

import Video from "@/components/sections/home1/video";
import Markdown from "markdown-to-jsx";

export const metadata = {
  title: "Mediwali Health Tourism | About Us",
  description: `Mediwali is a trusted company providing quality medical tourism services in Turkey. With our team of experts, we offer personalized treatment plans and comprehensive support to international patients. We are with you on your health journey.`,
};

async function getGeneralData() {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/general?populate=deep`
  );
  return res.data.data.attributes;
}

async function getHomeData() {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/home?populate=deep`
  );
  return res.data.data.attributes;
}

export default async function About() {
  const general = await getGeneralData();
  const home = await getHomeData();

  return (
    <>
      <Layout data={general} headerStyle={1} footerStyle={1} breadcrumbTitle="About Mediwali">
        {/* About Start */}

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
                    <h2 className="section-title__title">
                      {home.en.about.title}
                    </h2>
                  </div>
                  <div className="about-one__text-1">
                    <Markdown>{home.en.about.description}</Markdown>
                  </div>
                  <br />
                  <ul className="about-one__points list-unstyled">
                    <li>
                      <div className="icon">
                        <span className="fas fa-check-circle"></span>
                      </div>
                      <p>{home.en.about.item_1}</p>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="fas fa-check-circle"></span>
                      </div>
                      <p>{home.en.about.item_2}</p>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="fas fa-check-circle"></span>
                      </div>
                      <p>{home.en.about.item_3}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About End */}

        <Video />

        <Testimonial data={home.en} />
        <section className="cta-one cta-five">
          <div className="container">
            <div className="update_time">{home.en.update}</div>
            <div className="cta-one__inner">
              <div
                className="cta-one__bg"
                style={{
                  backgroundImage:
                    "url(assets/images/shapes/cta-three-bg-shape-2.png)",
                }}
              ></div>
              <div className="cta-one__title-box">
                <h3>
                  Get an Instant <span>Quote</span> Right Now
                </h3>
                <p>Contact us to learn about our special offers for you.</p>
              </div>
              <div className="cta-one__btn-box">
                <Link href="contact" className="cta-one__btn thm-btn">
                  GET YOUR FREE QUOTE NOW
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
