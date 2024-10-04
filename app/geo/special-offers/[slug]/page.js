import Layout from "@/components/layout/geo/Layout";
import Link from "next/link";
import Markdown from "markdown-to-jsx";
import axios from "axios";

export const metadata = {
  title: "Mediwali Health Tourism | სპეციალური შეთავაზებები",
  description: `Mediwali გთავაზობთ სპეციალურ გარიგებებს ჯანდაცვის სფეროში. არ გამოტოვოთ ფასდაკლებული მკურნალობის პაკეტები და პერსონალური მოვლის უპირატესობები თურქეთის წამყვან საავადმყოფოებში. მიიღეთ საუკეთესო შეთავაზება თქვენი ჯანმრთელობისთვის ახლავე.`,
};

async function getOfferData(slug) {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/home?populate=deep`
  );

  const temp = res.data.data.attributes.geo.offers.filter(
    (item) => item.slug === slug
  );

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

  const offer = await getOfferData(slug);
  const general = await getGeneralData();

  if (!offer[0]) {
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
                      Back To Home
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
          breadcrumbTitle={offer[0].title}
        >
          {/* Blog Details Start */}
          <section className="blog-details">
            <div className="container">
              <div className="row">
                <div className="col-xl-12 col-lg-12">
                  <div className="blog-details__left">
                    <div className="blog-details__img-1">
                      {
                        <img
                          src={`${process.env.NEXT_PUBLIC_IP}${offer[0].image.data.attributes.url}`}
                          alt=""
                        />
                      }
                    </div>
                    <div className="blog-details__content">
                      {<Markdown>{offer[0].description}</Markdown>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="cta-one cta-five">
            <div className="container">
              <div className="update_time">{offer[0].update}</div>
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
          {/* Blog Details End */}
        </Layout>
      </>
    );
  }
}
