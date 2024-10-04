import Layout from "@/components/layout/geo/Layout";
import Testimonial from "@/components/sections/geo/home1/Testimonial";
import Link from "next/link";
import axios from "axios";

import Video from "@/components/sections/geo/home1/video";
import Markdown from "markdown-to-jsx";

export const metadata = {
  title: "Mediwali Health Tourism | ჩვენს შესახებ",
  description: `Mediwali არის სანდო კომპანია, რომელიც უზრუნველყოფს ხარისხიან ჯანდაცვის ტურისტულ მომსახურებას თურქეთში. ჩვენი ექსპერტების გუნდთან ერთად, ჩვენ ვთავაზობთ პერსონალიზებულ მკურნალობის გეგმებს და ყოვლისმომცველ მხარდაჭერას საერთაშორისო პაციენტებს. ჩვენ ვართ თქვენთან ერთად თქვენი ჯანმრთელობის მოგზაურობაში.`,
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
      <Layout
        data={general}
        headerStyle={1}
        footerStyle={1}
        breadcrumbTitle="ჩვენს შესახებ"
      >
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
                      {home.geo.about.title}
                    </h2>
                  </div>
                  <div className="about-one__text-1">
                    <Markdown>{home.geo.about.description}</Markdown>
                  </div>
                  <br />
                  <ul className="about-one__points list-unstyled">
                    <li>
                      <div className="icon">
                        <span className="fas fa-check-circle"></span>
                      </div>
                      <p>{home.geo.about.item_1}</p>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="fas fa-check-circle"></span>
                      </div>
                      <p>{home.geo.about.item_2}</p>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="fas fa-check-circle"></span>
                      </div>
                      <p>{home.geo.about.item_3}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About End */}

        <Video />

        <Testimonial data={home.geo} />
        <section className="cta-one cta-five">
          <div className="container">
            <div className="update_time">{home.geo.update}</div>
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
      </Layout>
    </>
  );
}
