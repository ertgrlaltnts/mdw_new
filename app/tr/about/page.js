import Layout from "@/components/layout/tr/Layout";
import Testimonial from "@/components/sections/tr/home1/Testimonial";
import Link from "next/link";
import axios from "axios";

import Video from "@/components/sections/tr/home1/video";
import Markdown from "markdown-to-jsx";

export const metadata = {
  title: "Mediwali Sağlık Turizmi | Hakkımızda",
  description: `Mediwali, Türkiye'de kaliteli sağlık turizmi hizmetleri sunan güvenilir bir şirkettir. Uzman ekibimizle, uluslararası hastalara kişiselleştirilmiş tedavi planları ve kapsamlı destek sunuyoruz. Sağlık yolculuğunuzda yanınızdayız.`,
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
      <Layout data={general} headerStyle={1} footerStyle={1} breadcrumbTitle="Hakkımızda">
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
                      {home.tr.about.title}
                    </h2>
                  </div>
                  <div className="about-one__text-1">
                    <Markdown>{home.tr.about.description}</Markdown>
                  </div>
                  <br />
                  <ul className="about-one__points list-unstyled">
                    <li>
                      <div className="icon">
                        <span className="fas fa-check-circle"></span>
                      </div>
                      <p>{home.tr.about.item_1}</p>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="fas fa-check-circle"></span>
                      </div>
                      <p>{home.tr.about.item_2}</p>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="fas fa-check-circle"></span>
                      </div>
                      <p>{home.tr.about.item_3}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About End */}

        <Video />

        <Testimonial data={home.tr} />
        <section className="cta-one cta-five">
          <div className="container">
            <div className="update_time">{home.tr.update}</div>
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
                Hemen Şimdi <span>Teklif</span> Alın
                </h3>
                <p>Size özel tekliflerimiz hakkında bilgi almak için bizimle iletişime geçin.</p>
              </div>
              <div className="cta-one__btn-box">
                <Link href="/tr/contact" className="cta-one__btn thm-btn">
                ÜCRETSİZ TEKLİFİNİZİ ŞİMDİ ALIN
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
