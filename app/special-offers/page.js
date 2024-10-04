import Layout from "@/components/layout/Layout";
import Link from "next/link";
import axios from "axios";

export const metadata = {
  title: "Mediwali Health Tourism | Special Offers",
  description: `Mediwali offers special deals in health services. Don't miss discounted treatment packages and personalized care advantages at Turkey's leading hospitals. Catch the best offer for your health now.`,
};

async function getHomeData() {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/home?populate=deep`
  );
  return res.data.data.attributes;
}

async function getGeneralData() {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/general?populate=deep`
  );
  return res.data.data.attributes;
}

export default async function Home() {
  const home = await getHomeData();
  const general = await getGeneralData();

  return (
    <>
      <Layout data={general} headerStyle={1} footerStyle={1} breadcrumbTitle="Special Offers">
        {/* Team Two Start  */}
        <section className="team-page">
          <div className="container">
            <div className="row">
              {home.en.offers.map((item, index) => (
                <div key={index} className="col-xl-4 col-lg-4">
                  <div className="services-one__single">
                    <div className="services-one__title-box">
                      <h3 className="services-one__title">
                        <Link href={item.link}>{item.title}</Link>
                      </h3>
                    </div>
                    <div className="services-one__img-box">
                      <div className="services-one__img">
                        <img src={`${process.env.NEXT_PUBLIC_IP}${item.image.data.attributes.url}`} alt="" />
                      </div>
                      <div className="services-one__icon">
                        <img
                          src={`${process.env.NEXT_PUBLIC_IP}${item.icon.data.attributes.url}`}
                          style={{ width: 50, height: 50 }}
                        />
                      </div>
                    </div>
                    <div className="services-one__read-more">
                      <Link href={item.link}>
                        REVIEW OFFER<span className="icon-next"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Team Two End  */}

        {/* CTA One Start  */}
        <section className="cta-one cta-five">
          <div className="container">
            <div className="update_time">{home.en.offers[0].update}</div>
            <div className="cta-one__inner">
              <div
                className="cta-one__bg"
                style={{
                  backgroundImage:
                    "url(assets/images/shapes/cta-three-bg-shape-2.png)",
                }}
              ></div>
              <div className="cta-one__title-box">
                <h3>
                  Get an Instant <span>Quote</span> Right Now
                </h3>
                <p>Try it risk free - We don’t charge cancellation fees</p>
              </div>
              <div className="cta-one__btn-box">
                <Link href="contact" className="cta-one__btn thm-btn">
                  GET YOUR FREE QUOTE NOW
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
