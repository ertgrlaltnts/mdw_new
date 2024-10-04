import Layout from "@/components/layout/tr/Layout";
import Link from "next/link";
import axios from "axios";

export const metadata = {
  title: "Mediwali Sağlık Turizmi | Anlaşmalı Kurumlar",
  description: `Mediwali'nin iş ortaklığı yaptığı Türkiye'nin en prestijli hastane ve kliniklerini keşfedin. Güvenilir sağlık kuruluşları ile en iyi tedavi deneyimini sunuyoruz. Sağlığınızı uzman ellere emanet edin.`,
};

async function getHospitalData() {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/hospitals?populate=deep`
  );

  return res.data.data;
}

async function getGeneralData() {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/general?populate=deep`
  );
  return res.data.data.attributes;
}

export default async function Home() {
  const hospitals = await getHospitalData();
  const general = await getGeneralData();

  return (
    <>
      <Layout
        data={general}
        headerStyle={1}
        footerStyle={1}
        breadcrumbTitle="Anlaşmalı Kurumlar"
      >
        {/* Portfolio Page Start */}
        <section className="portfolio-page">
          <div className="container">
            <div className="row">
              {hospitals.map((item, index) => (
                <div key={index} className="col-xl-4 col-lg-4">
                  <div className="portfolio-three__single">
                    <div className="portfolio-three__img-box">
                      <div className="portfolio-three__img">
                        <img
                          src={`${process.env.NEXT_PUBLIC_IP}${item.attributes.tr.image_long.data.attributes.url}`}
                          alt=""
                        />
                      </div>
                      <div className="portfolio-three__content">
                        <p className="portfolio-three__sub-title">
                          {item.attributes.tr.location}
                        </p>
                        <h3 className="portfolio-three__title">
                          <Link
                            href={`/tr/contracted-institutions/${item.attributes.tr.slug}`}
                          >
                            {item.attributes.tr.name}
                          </Link>
                        </h3>
                      </div>
                      <div className="portfolio-three__arrow">
                        <Link
                          href={`contracted-institutions/${item.attributes.tr.slug}`}
                        >
                          <span className="icon-next"></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Portfolio Page End */}

        {/* CTA One Start  */}
        <section className="cta-one cta-five">
          <div className="container">
            <div className="update_time">
              {hospitals[0].attributes.tr.update}
            </div>
            <div className="cta-one__inner">
              <div
                className="cta-one__bg"
                style={{
                  backgroundImage:
                    "url(../assets/images/shapes/cta-three-bg-shape-2.png)",
                }}
              ></div>
              <div className="cta-one__title-box">
                <h3>
                  Hemen Şimdi <span>Teklif</span> Alın
                </h3>
                <p>
                  Size özel tekliflerimiz hakkında bilgi almak için bizimle
                  iletişime geçin.
                </p>
              </div>
              <div className="cta-one__btn-box">
                <Link href="/tr/contact" className="cta-one__btn thm-btn">
                  ÜCRETSİZ TEKLİFİNİZİ ŞİMDİ ALIN
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* CTA One End  */}
      </Layout>
    </>
  );
}
