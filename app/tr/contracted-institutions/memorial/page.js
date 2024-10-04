import Layout from "@/components/layout/tr/Layout";
import Link from "next/link";
import Markdown from "markdown-to-jsx";
import axios from "axios";
import dynamic from "next/dynamic";

const HospitalSlider = dynamic(
  () => import("@/components/slider/ClientSlider"),
  {
    ssr: false,
  }
);

export const metadata = {
  title: "Mediwali Sağlık Turizmi | Anlaşmalı Kurumlar",
  description: `Mediwali'nin iş ortaklığı yaptığı Türkiye'nin en prestijli hastane ve kliniklerini keşfedin. Güvenilir sağlık kuruluşları ile en iyi tedavi deneyimini sunuyoruz. Sağlığınızı uzman ellere emanet edin.`,
};

async function getHospitalData(slug) {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/hospitals?populate=deep`
  );

  const temp = res.data.data.filter(
    (item) => item.attributes.tr.slug === "memorial"
  );

  return temp;
}

async function getGeneralData() {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/general?populate=deep`
  );
  return res.data.data.attributes;
}

export default async function Home() {
  const hospital = await getHospitalData();
  const general = await getGeneralData();

  if (!hospital[0]) {
    return (
      <>
        <Layout data={general} headerStyle={1} footerStyle={1}>
          {/* Error Page Start */}
          <section className="error-page">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="error-page__inner">
                    <div className="error-page__img img-bounce">
                      <img
                        src="../assets/images/resources/error-page-img-1.png"
                        alt=""
                      />
                    </div>
                    <h3 className="error-page__tagline">
                      Sorry! Page Not Found!
                    </h3>
                    <p className="error-page__text">
                      Oops! The page you are looking for does not exist. Please
                      return to the site’s homepage.
                    </p>
                    <Link href="/tr" className="thm-btn error-page__btn">
                      back to home
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Error Page End */}
        </Layout>
      </>
    );
  } else {
    return (
      <>
        <Layout
          data={general}
          headerStyle={1}
          footerStyle={1}
          breadcrumbTitle={hospital[0].attributes.tr.name}
        >
          {/* Portfolio Details Start */}
          <section className="portfolio-details">
            <div className="container">
              <div className="portfolio-details__inner">
                <div className="portfolio-details__img-box">
                  <div className="portfolio-details__img">
                    <HospitalSlider
                      data={hospital[0].attributes.tr.image.data}
                    />
                  </div>
                  <div className="portfolio-details__catagory">
                    <ul className="portfolio-details__catagory-list list-unstyled">
                      <li>
                        <span>Kurum:</span>
                        <h4>{hospital[0].attributes.tr.name}</h4>
                      </li>
                    </ul>

                    <ul className="portfolio-details__catagory-list list-unstyled">
                      <li>
                        <span>Lokasyon:</span>
                        <h4>{hospital[0].attributes.tr.location}</h4>
                      </li>
                    </ul>
                    <div>
                      <img
                        style={{ width: 140, objectFit: "contain" }}
                        src={`${process.env.NEXT_PUBLIC_IP}${hospital[0].attributes.tr.logo.data.attributes.url}`}
                      />
                    </div>
                  </div>
                </div>
                <div className="portfolio-details__text-1">
                  <Markdown>{hospital[0].attributes.tr.description}</Markdown>
                </div>

                <h3
                  style={{ fontSize: 22, marginBottom: 0 }}
                  className="portfolio-details__title-1"
                >
                  Bu Hastane Grubunun Şubeleri
                </h3>

                {hospital[0].attributes.tr.branches.map((item, index) => (
                  <div
                    key={index}
                    style={{ marginTop: 50 }}
                    className="portfolio-details__inner"
                  >
                    <div className="portfolio-details__img-box">
                      <div className="portfolio-details__img">
                        <HospitalSlider data={item.image.data} />
                      </div>
                      <div className="portfolio-details__catagory">
                        <ul className="portfolio-details__catagory-list list-unstyled">
                          <li>
                            <span>Hastane:</span>
                            <h4>{item.name}</h4>
                          </li>
                        </ul>

                        <ul className="portfolio-details__catagory-list list-unstyled">
                          <li>
                            <span>Lokasyon:</span>
                            <h4>{item.location}</h4>
                          </li>
                        </ul>
                        <div>
                          <img
                            style={{ width: 140, objectFit: "contain" }}
                            src={`${process.env.NEXT_PUBLIC_IP}${hospital[0].attributes.tr.logo.data.attributes.url}`}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-details__text-1">
                      <Markdown>{item.description}</Markdown>
                    </div>
                  </div>
                ))}

                <h3
                  style={{ fontSize: 22, marginBottom: 0 }}
                  className="portfolio-details__title-1"
                >
                  Bu Hastane Grubu Tarafından Sunulan Hizmetler
                </h3>
                <div
                  style={{ marginTop: 10 }}
                  className="portfolio-details__tag-and-share"
                >
                  <div
                    style={{ paddingLeft: 0, paddingRight: 0 }}
                    className="container"
                  >
                    <div className="row">
                      {hospital[0].attributes.tr.services.map((item, index) => (
                        <div key={index} className="col-xl-4 col-lg-4">
                          <div className="hospital_service_item">{item}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Portfolio Details End */}

          <section className="cta-one cta-five">
            <div className="container">
              <div className="update_time">
                {hospital[0].attributes.tr.update}
              </div>
              <div className="cta-one__inner">
                <div
                  className="cta-one__bg"
                  style={{
                    backgroundImage:
                      "url(../../assets/images/shapes/cta-three-bg-shape-2.png)",
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
        </Layout>
      </>
    );
  }
}
