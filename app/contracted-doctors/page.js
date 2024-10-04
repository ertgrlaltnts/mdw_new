import Layout from "@/components/layout/Layout";
import Link from "next/link";
import axios from "axios";

export const metadata = {
  title: "Mediwali Health Tourism | Contracted Doctors",
  description: `Meet expert doctors with Mediwali. Get professional healthcare services in aesthetic, dental, oncology, orthopedics and many other branches from the most competent physicians in Turkey. Your health is in safe hands.`,
};

async function getDoctorData() {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/doctors?populate=deep`
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

  const doctors = await getDoctorData();
  const general = await getGeneralData();

  return (
    <>
      <Layout data={general} headerStyle={1} footerStyle={1} breadcrumbTitle="Contracted Doctors">
        {/* Team Two Start  */}
        <section className="team-page">
          <div className="container">
            <div className="row">
              {doctors.map((item, index) => (
                <div key={index} className="col-xl-4 col-lg-4">
                  <div className="team-two__single">
                    <div className="team-two__img-box">
                      <div className="team-two__img">
                        <img src={`${process.env.NEXT_PUBLIC_IP}${item.attributes.en.image.data.attributes.url}`} alt="" />
                      </div>
                      <div className="hospital_logo">
                        <img src={`${process.env.NEXT_PUBLIC_IP}${item.attributes.en.hospital_logo.data.attributes.url}`} />
                      </div>
                    </div>
                    <div className="team-two__content">
                      <p
                        style={{ fontSize: 13 }}
                        className="team-two__sub-title"
                      >
                       {item.attributes.en.job}
                      </p>
                      <h3 className="team-two__title">
                        <Link href={`/contracted-doctors/${item.attributes.en.slug}`}>{item.attributes.en.name}</Link>
                      </h3>
                      <p
                        style={{ fontSize: 13 }}
                        className="team-two__sub-title"
                      >
                       {item.attributes.en.department}
                      </p>
                      <div className="team-two__share-and-social">
                        <div className="team-two__share">
                          <Link href={`/contracted-doctors/${item.attributes.en.slug}`}>
                            <span className="icon-next"></span>
                          </Link>
                        </div>
                      </div>
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
            <div className="update_time">{doctors[0].attributes.en.update}</div>
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
