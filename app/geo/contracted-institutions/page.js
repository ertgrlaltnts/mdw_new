import Layout from "@/components/layout/geo/Layout";
import Link from "next/link";
import axios from "axios";

export const metadata = {
  title: "Mediwali Health Tourism | კონტრაქტი დაწესებულებები",
  description: `აღმოაჩინეთ თურქეთის ყველაზე პრესტიჟული საავადმყოფოები და კლინიკები, რომლებთანაც Mediwali არის ბიზნეს პარტნიორი. ჩვენ გთავაზობთ საუკეთესო მკურნალობის გამოცდილებას სანდო სამედიცინო დაწესებულებებთან. ანდეთ თქვენი ჯანმრთელობა ექსპერტულ ხელებს.`,
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
        breadcrumbTitle="კონტრაქტი დაწესებულებები"
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
                          src={`${process.env.NEXT_PUBLIC_IP}${item.attributes.geo.image_long.data.attributes.url}`}
                          alt=""
                        />
                      </div>
                      <div className="portfolio-three__content">
                        <p className="portfolio-three__sub-title">
                          {item.attributes.geo.location}
                        </p>
                        <h3 className="portfolio-three__title">
                          <Link
                            href={`/geo/contracted-institutions/${item.attributes.geo.slug}`}
                          >
                            {item.attributes.geo.name}
                          </Link>
                        </h3>
                      </div>
                      <div className="portfolio-three__arrow">
                        <Link
                          href={`contracted-institutions/${item.attributes.geo.slug}`}
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
              {hospitals[0].attributes.geo.update}
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
        {/* CTA One End  */}
      </Layout>
    </>
  );
}
