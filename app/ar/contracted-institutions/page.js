import Layout from "@/components/layout/ar/Layout";
import Link from "next/link";
import axios from "axios";

export const metadata = {
  title: "Mediwali Health Tourism | المؤسسات المتعاقدة",
  description: `اكتشف المستشفيات والعيادات المرموقة في تركيا والتي تعد ميديوالي شريكًا تجاريًا لها. نحن نقدم أفضل تجربة علاجية مع مؤسسات الرعاية الصحية الموثوقة. تعهد بصحتك لأيادي الخبراء.`,
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
        breadcrumbTitle="المؤسسات المتعاقدة"
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
                          src={`${process.env.NEXT_PUBLIC_IP}${item.attributes.ar.image_long.data.attributes.url}`}
                          alt=""
                        />
                      </div>
                      <div className="portfolio-three__content">
                        <p className="portfolio-three__sub-title">
                          {item.attributes.ar.location}
                        </p>
                        <h3 className="portfolio-three__title">
                          <Link
                            href={`/ar/contracted-institutions/${item.attributes.ar.slug}`}
                          >
                            {item.attributes.ar.name}
                          </Link>
                        </h3>
                      </div>
                      <div className="portfolio-three__arrow">
                        <Link
                          href={`contracted-institutions/${item.attributes.ar.slug}`}
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
              {hospitals[0].attributes.ar.update}
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
