import Layout from "@/components/layout/Layout";
import Link from "next/link";
import Markdown from "markdown-to-jsx";
import dynamic from "next/dynamic";
import axios from "axios";

export const metadata = {
  title: "Mediwali Health Tourism | Contracted Institutions",
  description: `Discover the most prestigious hospitals and clinics in Turkey that Mediwali partners with. We offer the best treatment experience with trusted healthcare institutions. Entrust your health to expert hands.`,
};

const HospitalSlider = dynamic(
  () => import("@/components/slider/ClientSlider"),
  {
    ssr: false,
  }
);

async function getHospitalData() {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/hospitals?populate=deep`
  );

  const temp = res.data.data.filter(
    (item) => item.attributes.en.slug === "memorial"
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
                    <Link href="/" className="thm-btn error-page__btn">
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
          breadcrumbTitle={hospital[0].attributes.en.name}
        >
          {/* Portfolio Details Start */}
          <section className="portfolio-details">
            <div className="container">
              <div className="portfolio-details__inner">
                <div className="portfolio-details__img-box">
                  <div className="portfolio-details__img">
                    <HospitalSlider
                      data={hospital[0].attributes.en.image.data}
                    />
                  </div>
                  <div className="portfolio-details__catagory">
                    <ul className="portfolio-details__catagory-list list-unstyled">
                      <li>
                        <span>Institution:</span>
                        <h4>{hospital[0].attributes.en.name}</h4>
                      </li>
                    </ul>

                    <ul className="portfolio-details__catagory-list list-unstyled">
                      <li>
                        <span>Location:</span>
                        <h4>{hospital[0].attributes.en.location}</h4>
                      </li>
                    </ul>
                    <div>
                      <img
                        style={{ width: 140, objectFit: "contain" }}
                        src={`${process.env.NEXT_PUBLIC_IP}${hospital[0].attributes.en.logo.data.attributes.url}`}
                      />
                    </div>
                  </div>
                </div>
                <div className="portfolio-details__text-1">
                  <Markdown>{hospital[0].attributes.en.description}</Markdown>
                </div>
                <h3
                  style={{ fontSize: 22, marginBottom: 0 }}
                  className="portfolio-details__title-1"
                >
                  Branches of this Hospital Group
                </h3>

                {hospital[0].attributes.en.branches.map((item, index) => (
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
                            <span>Hospital:</span>
                            <h4>{item.name}</h4>
                          </li>
                        </ul>

                        <ul className="portfolio-details__catagory-list list-unstyled">
                          <li>
                            <span>Location:</span>
                            <h4>{item.location}</h4>
                          </li>
                        </ul>
                        <div>
                          <img
                            style={{ width: 140, objectFit: "contain" }}
                            src={`${process.env.NEXT_PUBLIC_IP}${hospital[0].attributes.en.logo.data.attributes.url}`}
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
                  Services Provided by the Hospital Group
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
                      {hospital[0].attributes.en.services.map((item, index) => (
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
                {hospital[0].attributes.en.update}
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
}
