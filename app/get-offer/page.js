import Layout from "@/components/layout/Layout";
import Link from "next/link";
import axios from "axios";
import Form from "@/components/sections/home1/Form";

export const metadata = {
  title: "Mediwali Health Tourism | Contact",
  description: `Access the best treatment options with Mediwali, Turkey's leading medical tourism company. We offer high quality healthcare services, affordable prices and personalized care solutions. Entrust your health to us with confidence.`,
};

async function getGeneralData() {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/general?populate=deep`
  );
  return res.data.data.attributes;
}

export default async function Home() {
  const general = await getGeneralData();
  return (
    <>
      <Layout
        data={general}
        headerStyle={1}
        footerStyle={1}
        breadcrumbTitle="Get Offer"
      >
        {/* Contact Page Start */}
        <section style={{paddingTop:60}} className="contact-page">
          <div className="container">
            <Form isGetOffer={true} />

            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div className="contact-page__left">
                  <h3 className="contact-page__title">Get in Touch</h3>
                  <p className="contact-page__text">
                    You can contact our support team 24/7. You can contact us
                    for any questions and comments.
                  </p>
                  <div className="contact-page__contact-info">
                    <h4 className="contact-page__contact-info-title">
                      Contact Info
                    </h4>
                    <ul className="contact-page__contact-list list-unstyled">
                      <li>
                        <h5>Address</h5>
                        <p>{general.address}</p>
                      </li>
                      <li>
                        <h5>Phone</h5>
                        <p>
                          <Link href={`tel:${general.phone_1_call}`}>
                            {general.phone_1}
                          </Link>
                          <span>|</span>
                          <Link href={`tel:${general.phone_2_call}`}>
                            {general.phone_2}
                          </Link>
                        </p>
                      </li>
                      <li>
                        <h5>Email</h5>
                        <p>
                          <Link href={`mailto:${general.mail_1}`}>
                            {general.mail_1}
                          </Link>
                          <span>|</span>
                          <Link href={`mailto:${general.mail_1}`}>
                            {general.mail_2}
                          </Link>
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="contact-page__right">
                  <div className="contact-page__img">
                    <iframe
                      src={general.google_maps}
                      width={570}
                      height={477}
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>

            <div className="update_time">Update Date: 29.09.2024</div>
          </div>
        </section>

        {/* Contact Page End */}
      </Layout>
    </>
  );
}
