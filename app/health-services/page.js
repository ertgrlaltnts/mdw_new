import Layout from "@/components/layout/Layout";
import Link from "next/link";
import Markdown from "markdown-to-jsx";
import axios from "axios";

export const metadata = {
  title: "Mediwali Health Tourism | Health Services",
  description: `Discover the comprehensive healthcare services we offer at the best hospitals in Turkey. Get healthy with Mediwali with a wide range of treatment options from plastic surgery to dental treatments, oncology to orthopedics.`,
};

async function getHealthData() {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/health-service?populate=deep`
  );
  return res.data.data.attributes.en;
}

async function getGeneralData() {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/general?populate=deep`
  );
  return res.data.data.attributes;
}

export default async function Home() {
  const health = await getHealthData();
  const general = await getGeneralData();

  return (
    <>
      <Layout
        data={general}
        headerStyle={1}
        footerStyle={1}
        breadcrumbTitle="Health Services"
      >
        {/* Blog Details Start */}
        <section className="blog-details">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12">
                <div className="blog-details__left">
                  <div className="blog-details__content">
                    <Markdown>{health.description}</Markdown>
                  </div>

                  <div style={{ marginTop: 50 }} className="blog-one__tag">
                    {health.words.map((item, index) => (
                      <span key={index}>{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-one cta-five">
          <div className="container">
            <div className="update_time">{health.update}</div>
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
        {/* Blog Details End */}
      </Layout>
    </>
  );
}
