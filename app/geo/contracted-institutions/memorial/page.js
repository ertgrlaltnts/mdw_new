import Layout from "@/components/layout/geo/Layout";
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
  title: "Mediwali Health Tourism | კონტრაქტი დაწესებულებები",
  description: `აღმოაჩინეთ თურქეთის ყველაზე პრესტიჟული საავადმყოფოები და კლინიკები, რომლებთანაც Mediwali არის ბიზნეს პარტნიორი. ჩვენ გთავაზობთ საუკეთესო მკურნალობის გამოცდილებას სანდო სამედიცინო დაწესებულებებთან. ანდეთ თქვენი ჯანმრთელობა ექსპერტულ ხელებს.`,
};

async function getHospitalData() {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/hospitals?populate=deep`
  );

  const temp = res.data.data.filter(
    (item) => item.attributes.geo.slug === "memorial"
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
          breadcrumbTitle={hospital[0].attributes.geo.name}
        >
          {/* Portfolio Details Start */}
          <section className="portfolio-details">
            <div className="container">
              <div className="portfolio-details__inner">
                <div className="portfolio-details__img-box">
                  <div className="portfolio-details__img">
                    <HospitalSlider
                      data={hospital[0].attributes.geo.image.data}
                    />
                  </div>
                  <div className="portfolio-details__catagory">
                    <ul className="portfolio-details__catagory-list list-unstyled">
                      <li>
                        <span>ორგანიზაცია:</span>
                        <h4>{hospital[0].attributes.geo.name}</h4>
                      </li>
                    </ul>

                    <ul className="portfolio-details__catagory-list list-unstyled">
                      <li>
                        <span>მდებარეობა:</span>
                        <h4>{hospital[0].attributes.geo.location}</h4>
                      </li>
                    </ul>
                    <div>
                      <img
                        style={{ width: 140, objectFit: "contain" }}
                        src={`${process.env.NEXT_PUBLIC_IP}${hospital[0].attributes.geo.logo.data.attributes.url}`}
                      />
                    </div>
                  </div>
                </div>
                <div className="portfolio-details__text-1">
                  <Markdown>{hospital[0].attributes.geo.description}</Markdown>
                </div>

                <h3
                  style={{ fontSize: 22, marginBottom: 0 }}
                  className="portfolio-details__title-1"
                >
                  ამ ჰოსპიტალური ჯგუფის ფილიალები
                </h3>

                {hospital[0].attributes.geo.branches.map((item, index) => (
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
                            <span>საავადმყოფო:</span>
                            <h4>{item.name}</h4>
                          </li>
                        </ul>

                        <ul className="portfolio-details__catagory-list list-unstyled">
                          <li>
                            <span>მდებარეობა:</span>
                            <h4>{item.location}</h4>
                          </li>
                        </ul>
                        <div>
                          <img
                            style={{ width: 140, objectFit: "contain" }}
                            src={`${process.env.NEXT_PUBLIC_IP}${hospital[0].attributes.geo.logo.data.attributes.url}`}
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
                  ამ ჰოსპიტალ ჯგუფის მიერ შემოთავაზებული სერვისები
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
                      {hospital[0].attributes.geo.services.map(
                        (item, index) => (
                          <div key={index} className="col-xl-4 col-lg-4">
                            <div className="hospital_service_item">{item}</div>
                          </div>
                        )
                      )}
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
                {hospital[0].attributes.geo.update}
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
                  <p>
                    დაგვიკავშირდით, რომ მიიღოთ ინფორმაცია თქვენთვის სპეციალური
                    შეთავაზებების შესახებ.
                  </p>
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
