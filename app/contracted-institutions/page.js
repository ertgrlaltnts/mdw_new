import Layout from "@/components/layout/Layout";
import Link from "next/link";
import axios from "axios";

export const metadata = {
  title: "Mediwali Health Tourism | Contracted Institutions",
  description: `Discover the most prestigious hospitals and clinics in Turkey that Mediwali partners with. We offer the best treatment experience with trusted healthcare institutions. Entrust your health to expert hands.`,
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
        breadcrumbTitle="Contracted Institutions"
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
                          src={`${process.env.NEXT_PUBLIC_IP}${item.attributes.en.image_long.data.attributes.url}`}
                          alt=""
                        />
                      </div>
                      <div className="portfolio-three__content">
                        <p className="portfolio-three__sub-title">
                          {item.attributes.en.location}
                        </p>
                        <h3 className="portfolio-three__title">
                          <Link
                            href={`contracted-institutions/${item.attributes.en.slug}`}
                          >
                            {item.attributes.en.name}
                          </Link>
                        </h3>
                      </div>
                      <div className="portfolio-three__arrow">
                        <Link
                          href={`contracted-institutions/${item.attributes.en.slug}`}
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
              {hospitals[0].attributes.en.update}
            </div>
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
        {/* CTA One End  */}
      </Layout>
    </>
  );
}
