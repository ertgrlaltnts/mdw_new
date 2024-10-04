import Layout from "@/components/layout/ar/Layout";
import Link from "next/link";
import axios from "axios";

export const metadata = {
  title: "Mediwali Health Tourism | عروض خاصة",
  description: `يقدم Mediwali عروض خاصة في مجال الرعاية الصحية. لا تفوت عروض العلاج المخفضة ومزايا الرعاية الشخصية في المستشفيات الرائدة في تركيا. احصل على أفضل عرض لصحتك الآن.`,
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
      <Layout data={general} headerStyle={1} footerStyle={1} breadcrumbTitle="عروض خاصة">
        {/* Team Two Start  */}
        <section className="team-page">
          <div className="container">
            <div className="row">
              {home.ar.offers.map((item, index) => (
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
                      عرض العرض<span className="icon-next"></span>
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
            <div className="update_time">{home.ar.offers[0].update}</div>
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
