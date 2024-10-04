import Layout from "@/components/layout/ar/Layout";
import Link from "next/link";
import axios from "axios";
import Form from "@/components/sections/ar/home1/Form";

export const metadata = {
  title: "Mediwali Health Tourism | تواصل",
  description: `يمكنك الوصول إلى أفضل خيارات العلاج مع Mediwali، شركة السياحة الطبية الرائدة في تركيا. نحن نقدم خدمات رعاية صحية عالية الجودة وأسعار معقولة وحلول رعاية شخصية. ثق بنا بصحتك.`,
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
        breadcrumbTitle="تواصل"
      >
        {/* Contact Page Start */}
        <section style={{ paddingTop: 60 }} className="contact-page">
          <div className="container">
            <Form isGetOffer={true} />

            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div className="contact-page__left">
                  <h3 className="contact-page__title">اتصل بنا</h3>
                  <p className="contact-page__text">
                    يمكنك الاتصال بفريق الدعم لدينا 24/7. يمكنك الاتصال بنا لأية
                    أسئلة وتعليقات.
                  </p>
                  <div className="contact-page__contact-info">
                    <h4 className="contact-page__contact-info-title">
                      معلومات الاتصال
                    </h4>
                    <ul className="contact-page__contact-list list-unstyled">
                      <li>
                        <h5>عنوان</h5>
                        <p>{general.address}</p>
                      </li>
                      <li>
                        <h5>هاتف</h5>
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
                        <h5>بريد إلكتروني</h5>
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

            <div className="update_time">تاريخ التحديث: 29.09.2024</div>
          </div>
        </section>

        {/* Contact Page End */}
      </Layout>
    </>
  );
}
