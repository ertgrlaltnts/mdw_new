import Layout from "@/components/layout/ar/Layout";
import Link from "next/link";
import Markdown from "markdown-to-jsx";
import axios from "axios";

export const metadata = {
  title: "Mediwali Health Tourism | الخدمات الصحية",
  description: `اكتشف خدمات الرعاية الصحية الشاملة التي نقدمها في أفضل المستشفيات في تركيا. تمتع بصحة جيدة مع Mediwali مع مجموعة واسعة من خيارات العلاج، بدءًا من الجراحة التجميلية وحتى علاجات الأسنان، ومن الأورام إلى جراحة العظام.`,
};

async function getHealthData() {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/health-service?populate=deep`
  );
  return res.data.data.attributes.ar;
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
        breadcrumbTitle="الخدمات الصحية"
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
        {/* Blog Details End */}
      </Layout>
    </>
  );
}
