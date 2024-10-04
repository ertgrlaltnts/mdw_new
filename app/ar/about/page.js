import Layout from "@/components/layout/ar/Layout";
import Testimonial from "@/components/sections/ar/home1/Testimonial";
import Link from "next/link";
import axios from "axios";

import Video from "@/components/sections/ar/home1/video";
import Markdown from "markdown-to-jsx";

export const metadata = {
  title: "Mediwali Health Tourism | معلومات عنا",
  description: `ميديوالي هي شركة موثوقة تقدم خدمات السياحة الصحية عالية الجودة في تركيا. من خلال فريق الخبراء لدينا، نقدم خطط علاج شخصية ودعمًا شاملاً للمرضى الدوليين. نحن معك في رحلتك الصحية.`,
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
      <Layout
        data={general}
        headerStyle={1}
        footerStyle={1}
        breadcrumbTitle="معلومات عنا"
      >
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
                      {home.ar.about.title}
                    </h2>
                  </div>
                  <div className="about-one__text-1">
                    <Markdown>{home.ar.about.description}</Markdown>
                  </div>
                  <br />
                  <ul className="about-one__points list-unstyled">
                    <li>
                      <div className="icon">
                        <span className="fas fa-check-circle"></span>
                      </div>
                      <p>{home.ar.about.item_1}</p>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="fas fa-check-circle"></span>
                      </div>
                      <p>{home.ar.about.item_2}</p>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="fas fa-check-circle"></span>
                      </div>
                      <p>{home.ar.about.item_3}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About End */}

        <Video />

        <Testimonial data={home.ar} />
        <section className="cta-one cta-five">
          <div className="container">
            <div className="update_time">{home.ar.update}</div>
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
                  احصل على <span>العرض</span> الآن
                </h3>
                <p>اتصل بنا للحصول على معلومات حول عروضنا الخاصة لك..</p>
              </div>
              <div className="cta-one__btn-box">
                <Link href="/ar/contact" className="cta-one__btn thm-btn">
                  احصل على عرض أسعارك المجاني الآن
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
