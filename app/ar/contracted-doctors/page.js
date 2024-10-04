import Layout from "@/components/layout/ar/Layout";
import Link from "next/link";
import axios from "axios";

export const metadata = {
  title: "Mediwali Health Tourism | الأطباء المتعاقدون",
  description: `تعرف على الأطباء الخبراء مع Mediwali. احصل على خدمات رعاية صحية احترافية من أمهر الأطباء في تركيا في مجالات التجميل وطب الأسنان والأورام وجراحة العظام والعديد من الفروع الأخرى. صحتك في أيدي أمينة.`,
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
      <Layout data={general} headerStyle={1} footerStyle={1} breadcrumbTitle="الأطباء المتعاقدون">
        {/* Team Two Start  */}
        <section className="team-page">
          <div className="container">
            <div className="row">
              {doctors.map((item, index) => (
                <div key={index} className="col-xl-4 col-lg-4">
                  <div className="team-two__single">
                    <div className="team-two__img-box">
                      <div className="team-two__img">
                        <img src={`${process.env.NEXT_PUBLIC_IP}${item.attributes.ar.image.data.attributes.url}`} alt="" />
                      </div>
                      <div className="hospital_logo">
                        <img src={`${process.env.NEXT_PUBLIC_IP}${item.attributes.ar.hospital_logo.data.attributes.url}`} />
                      </div>
                    </div>
                    <div className="team-two__content">
                      <p
                        style={{ fontSize: 13 }}
                        className="team-two__sub-title"
                      >
                       {item.attributes.ar.job}
                      </p>
                      <h3 className="team-two__title">
                        <Link href={`/ar/contracted-doctors/${item.attributes.ar.slug}`}>{item.attributes.ar.name}</Link>
                      </h3>
                      <p
                        style={{ fontSize: 13 }}
                        className="team-two__sub-title"
                      >
                       {item.attributes.ar.department}
                      </p>
                      <div className="team-two__share-and-social">
                        <div className="team-two__share">
                          <Link href={`/ar/contracted-doctors/${item.attributes.ar.slug}`}>
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
            <div className="update_time">{doctors[0].attributes.ar.update}</div>
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
                احصل على <span>العرض</span> الآن
                </h3>
                <p>اتصل بنا للحصول على معلومات حول عروضنا الخاصة لك..</p>
              </div>
              <div className="cta-one__btn-box">
                <Link href="/ar/contact" className="cta-one__btn thm-btn">
                احصل على عرض أسعارك المجاني الآن
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
