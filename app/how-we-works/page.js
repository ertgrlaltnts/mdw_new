import Layout from "@/components/layout/Layout";
import Link from "next/link";
import WhyChooseUs from "@/components/sections/home4/WhyChooseUs";
import axios from "axios";
import Markdown from "markdown-to-jsx";

export const metadata = {
  title: "Mediwali Health Tourism | How We Works ?",
  description: `How does your health journey start with Mediwali? Discover the step-by-step process! We are with you at every stage from treatment planning to travel and accommodation organization. We guide you with our professional team.`,
};

async function getHowData() {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/how-we-work?populate=deep`
  );
  return res.data.data.attributes.en;
}

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
  const howData = await getHowData();
  const home = await getHomeData();
  const general = await getGeneralData();

  return (
    <>
      <Layout
        data={general}
        headerStyle={1}
        footerStyle={1}
        breadcrumbTitle="How We Works ?"
      >
        {/* Insurance Details Start */}
        <section className="insurance-details">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-7">
                <div className="insurance-details__left">
                  <h3 className="insurance-details__title-1">
                    {howData.title}
                    <br /> {howData.title_2}
                  </h3>
                  <p className="insurance-details__text-1">{howData.text}</p>
                  <div className="insurance-details__img-1">
                    <img
                      src={`${process.env.NEXT_PUBLIC_IP}${howData.image.data.attributes.url}`}
                      alt=""
                    />
                  </div>

                  <div className="insurance-details__text-2">
                    <Markdown>{howData.description}</Markdown>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-5">
                <div className="insurance-details__right">
                  <div className="insurance-details__need-help">
                    <div
                      className="insurance-details__need-help-bg"
                      style={{
                        backgroundImage:
                          "url(assets/images/main/right-contact.png)",
                      }}
                    ></div>
                    <h3 className="insurance-details__need-help-title">
                      For All Types
                      <br /> of Health
                      <br /> Services
                    </h3>
                    <div className="insurance-details__need-help-btn-box">
                      <Link
                        href="contact"
                        className="insurance-details__need-help-btn thm-btn"
                      >
                        FIND SOLUTION
                      </Link>
                    </div>
                  </div>
                  <div
                    style={{ marginBottom: 40 }}
                    className="insurance-details__contact"
                  >
                    <div className="insurance-details__contact-icon">
                      <span className="icon-telephone-1"></span>
                    </div>
                    <div className="insurance-details__contact-content">
                      <span>You can call anytime</span>
                      <p>
                        <Link href={`tel:${general.phone_1_call}`}>
                          {general.phone_1}
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <WhyChooseUs data={home.en} pd={true} />
        </section>
        <section className="cta-one cta-five">
          <div className="container">
            <div className="update_time">{howData.update}</div>
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
        {/* Insurance Details End */}
      </Layout>
    </>
  );
}
