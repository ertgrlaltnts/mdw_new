import Layout from "@/components/layout/ar/Layout";
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
  title: "Mediwali Health Tourism | المؤسسات المتعاقدة",
  description: `اكتشف المستشفيات والعيادات المرموقة في تركيا والتي تعد ميديوالي شريكًا تجاريًا لها. نحن نقدم أفضل تجربة علاجية مع مؤسسات الرعاية الصحية الموثوقة. تعهد بصحتك لأيادي الخبراء.`,
};

async function getHospitalData() {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/hospitals?populate=deep`
  );

  const temp = res.data.data.filter(
    (item) => item.attributes.ar.slug === "medipol"
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
                    <Link href="/ar" className="thm-btn error-page__btn">
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
          breadcrumbTitle={hospital[0].attributes.ar.name}
        >
          {/* Portfolio Details Start */}
          <section className="portfolio-details">
            <div className="container">
              <div className="portfolio-details__inner">
                <div className="portfolio-details__img-box">
                  <div className="portfolio-details__img">
                    <HospitalSlider
                      data={hospital[0].attributes.ar.image.data}
                    />
                  </div>
                  <div className="portfolio-details__catagory">
                    <ul className="portfolio-details__catagory-list list-unstyled">
                      <li>
                        <span>منظمة:</span>
                        <h4>{hospital[0].attributes.ar.name}</h4>
                      </li>
                    </ul>

                    <ul className="portfolio-details__catagory-list list-unstyled">
                      <li>
                        <span>موقع:</span>
                        <h4>{hospital[0].attributes.ar.location}</h4>
                      </li>
                    </ul>
                    <div>
                      <img
                        style={{ width: 140, objectFit: "contain" }}
                        src={`${process.env.NEXT_PUBLIC_IP}${hospital[0].attributes.ar.logo.data.attributes.url}`}
                      />
                    </div>
                  </div>
                </div>
                <div className="portfolio-details__text-1">
                  <Markdown>{hospital[0].attributes.ar.description}</Markdown>
                </div>

                <h3
                  style={{ fontSize: 22, marginBottom: 0 }}
                  className="portfolio-details__title-1"
                >
                  فروع مجموعة المستشفيات هذه
                </h3>

                {hospital[0].attributes.ar.branches.map((item, index) => (
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
                            <span>مستشفى:</span>
                            <h4>{item.name}</h4>
                          </li>
                        </ul>

                        <ul className="portfolio-details__catagory-list list-unstyled">
                          <li>
                            <span>موقع:</span>
                            <h4>{item.location}</h4>
                          </li>
                        </ul>
                        <div>
                          <img
                            style={{ width: 140, objectFit: "contain" }}
                            src={`${process.env.NEXT_PUBLIC_IP}${hospital[0].attributes.ar.logo.data.attributes.url}`}
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
                  الخدمات التي تقدمها مجموعة المستشفيات هذه
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
                      {hospital[0].attributes.ar.services.map((item, index) => (
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
                {hospital[0].attributes.ar.update}
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
}
