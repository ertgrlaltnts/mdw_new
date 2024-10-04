import Layout from "@/components/layout/Layout";
import Link from "next/link";
import axios from "axios";
import Markdown from "markdown-to-jsx";

export const metadata = {
  title: "Mediwali Health Tourism | Contracted Doctors",
  description: `Meet expert doctors with Mediwali. Get professional healthcare services in aesthetic, dental, oncology, orthopedics and many other branches from the most competent physicians in Turkey. Your health is in safe hands.`,
};

export async function generateStaticParams() {
  // Örneğin, API'den tüm blog gönderilerinin ID'lerini alın
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/doctors?populate=deep`
  );

  // Her post için id parametresini döndürün
  return res.data.data.map((item) => ({
    slug: item.attributes.en.slug,
  }));
}

async function getDoctorData(slug) {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/doctors?populate=deep`
  );

  const temp = res.data.data.filter((item) => item.attributes.en.slug === slug);

  return temp;
}

async function getGeneralData() {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/general?populate=deep`
  );
  return res.data.data.attributes;
}

export default async function Home({ params }) {
  const { slug } = params;

  const doctor = await getDoctorData(slug);
  const general = await getGeneralData();

  if (!doctor[0]) {
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
                        src="../../assets/images/resources/error-page-img-1.png"
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
          breadcrumbTitle={doctor[0].attributes.en.name}
        >
          {/* Team Details Start */}
          <section className="team-details">
            <div className="container">
              <div className="team-details__top">
                <div className="team-details__top-bg">
                  <div className="team-details__top-shape-2 float-bob-y">
                    <img
                      src="../assets/images/shapes/team-details-top-shape-2.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-7 col-lg-7">
                    <div className="team-details__top-img-box">
                      <div className="team-details__top-img">
                        <img
                          src={`${process.env.NEXT_PUBLIC_IP}${doctor[0].attributes.en.image.data.attributes.url}`}
                          alt=""
                        />
                      </div>
                      <span style={{ color: "#043e5c" }}>MEDIWALI</span>
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-5">
                    <div className="team-details__top-right">
                      <p className="team-details__top-right-sub-title">
                        {doctor[0].attributes.en.job}{" "}
                      </p>
                      <h3 className="team-details__top-right-title">
                        {doctor[0].attributes.en.name}
                      </h3>

                      <ul className="team-details__top-points list-unstyled">
                        <li>
                          <span>Department:</span>
                          <p>{doctor[0].attributes.en.department}</p>
                        </li>
                        <li>
                          <span>Location:</span>
                          <p>{doctor[0].attributes.en.location}</p>
                        </li>
                        <li>
                          <span>Hospital:</span>
                          <p>{doctor[0].attributes.en.hospital}</p>
                        </li>
                      </ul>
                      <div>
                        <img
                          style={{ width: 200, objectFit: "contain" }}
                          src={`${process.env.NEXT_PUBLIC_IP}${doctor[0].attributes.en.hospital_logo.data.attributes.url}`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="portfolio-details__text-1">
                <Markdown>{doctor[0].attributes.en.description}</Markdown>
              </div>

              <div className="doctors_photos">
                <div className="row">
                  {doctor[0].attributes.photos.data.map((item, index) => (
                    <div key={index} className="col-xl-4 col-lg-4">
                      <img src={`${process.env.NEXT_PUBLIC_IP}${item.attributes.url}`} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="team-details__bottom">
                <h3
                  style={{ marginBottom: 20 }}
                  className="team-details__title-1"
                >
                  Treatments Provided by This Doctor
                </h3>
                <div
                  style={{ paddingLeft: 0, paddingRight: 0 }}
                  className="container"
                >
                  <div className="row">
                    {doctor[0].attributes.en.services.map((item, index) => (
                      <div key={index} className="col-xl-4 col-lg-4">
                        <div className="hospital_service_item">{item}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Team Details End */}

          <section className="cta-one cta-five">
            <div className="container">
              <div className="update_time">
                {doctor[0].attributes.en.update}
              </div>
              <div className="cta-one__inner">
                <div className="cta-one__bg"></div>
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
