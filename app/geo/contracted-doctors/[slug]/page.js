import Layout from "@/components/layout/geo/Layout";
import Link from "next/link";
import axios from "axios";
import Markdown from "markdown-to-jsx";

export const metadata = {
  title: "Mediwali Health Tourism | კონტრაქტი ექიმები",
  description: `შეხვდით ექსპერტ ექიმებს მედივალთან ერთად. მიიღეთ პროფესიონალური ჯანდაცვის სერვისები თურქეთის ყველაზე კომპეტენტური ექიმებისგან ესთეტიკის, სტომატოლოგიის, ონკოლოგიის, ორთოპედიის და მრავალი სხვა ფილიალში. თქვენი ჯანმრთელობა უსაფრთხო ხელშია.`,
};

export async function generateStaticParams() {
  // Örneğin, API'den tüm blog gönderilerinin ID'lerini alın
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/doctors?populate=deep`
  );

  // Her post için id parametresini döndürün
  return res.data.data.map((item) => ({
    slug: item.attributes.geo.slug,
  }));
}

async function getDoctorData(slug) {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/doctors?populate=deep`
  );

  const temp = res.data.data.filter((item) => item.attributes.geo.slug === slug);

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
                    <Link href="/geo" className="thm-btn error-page__btn">
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
          breadcrumbTitle={doctor[0].attributes.geo.name}
        >
          {/* Team Details Start */}
          <section className="team-details">
            <div className="container">
              <div className="team-details__top">
                <div className="team-details__top-bg">
                  <div className="team-details__top-shape-2 float-bob-y">
                    <img
                      src="../../assets/images/shapes/team-details-top-shape-2.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-7 col-lg-7">
                    <div className="team-details__top-img-box">
                      <div className="team-details__top-img">
                        <img
                          src={`${process.env.NEXT_PUBLIC_IP}${doctor[0].attributes.geo.image.data.attributes.url}`}
                          alt=""
                        />
                      </div>
                      <span style={{ color: "#043e5c" }}>MEDIWALI</span>
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-5">
                    <div className="team-details__top-right">
                      <p className="team-details__top-right-sub-title">
                        {doctor[0].attributes.geo.job}{" "}
                      </p>
                      <h3 className="team-details__top-right-title">
                        {doctor[0].attributes.geo.name}
                      </h3>

                      <ul className="team-details__top-points list-unstyled">
                        <li>
                          <span>დეპარტამენტი:</span>
                          <p>{doctor[0].attributes.geo.department}</p>
                        </li>
                        <li>
                          <span>მდებარეობა:</span>
                          <p>{doctor[0].attributes.geo.location}</p>
                        </li>
                        <li>
                          <span>ორგანიზაცია:</span>
                          <p>{doctor[0].attributes.geo.hospital}</p>
                        </li>
                      </ul>
                      <div>
                        <img
                          style={{ width: 200, objectFit: "contain" }}
                          src={`${process.env.NEXT_PUBLIC_IP}${doctor[0].attributes.geo.hospital_logo.data.attributes.url}`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="portfolio-details__text-1">
                <Markdown>{doctor[0].attributes.geo.description}</Markdown>
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
                  ამ ექიმის მიერ მოწოდებული მკურნალობა
                </h3>
                <div
                  style={{ paddingLeft: 0, paddingRight: 0 }}
                  className="container"
                >
                  <div className="row">
                    {doctor[0].attributes.geo.services.map((item, index) => (
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
                {doctor[0].attributes.geo.update}
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
                მიიღეთ <span>შემოთავაზება</span> ახლავე
                </h3>
                <p>დაგვიკავშირდით, რომ მიიღოთ ინფორმაცია თქვენთვის სპეციალური შეთავაზებების შესახებ.</p>
              </div>
              <div className="cta-one__btn-box">
                <Link href="/geo/contact" className="cta-one__btn thm-btn">
                მიიღეთ უფასო შეთავაზება ახლავე
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
