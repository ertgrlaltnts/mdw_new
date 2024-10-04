import Layout from "@/components/layout/ar/Layout";
import Link from "next/link";
import WhyChooseUs from "@/components/sections/home4/WhyChooseUs";
import axios from "axios";
import Markdown from "markdown-to-jsx";

export const metadata = {
  title: "Mediwali Health Tourism | كيف نعمل؟",
  description: `كيف تبدأ رحلتك الصحية مع مديوالي؟ اكتشف العملية خطوة بخطوة! نحن معك في كل مرحلة، بدءًا من التخطيط للعلاج وحتى تنظيم السفر والإقامة. نحن نرشدك مع فريقنا المحترف.`,
};

async function getHowData() {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/how-we-work?populate=deep`
  );
  return res.data.data.attributes.ar;
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
        breadcrumbTitle="كيف نعمل؟"
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
                          "url(../assets/images/main/right-contact.png)",
                      }}
                    ></div>
                    <h3 className="insurance-details__need-help-title">
                      جميع الأنواع
                      <br />
                      الرعاية الصحية
                      <br />ل
                    </h3>
                    <div className="insurance-details__need-help-btn-box">
                      <Link
                        href="/ar/contact"
                        className="insurance-details__need-help-btn thm-btn"
                      >
                        ابحث عن حل
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
                      <span>يمكنك الاتصال وقتما تشاء</span>
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
          <WhyChooseUs data={home.ar} pd={true} />
        </section>
        <section className="cta-one cta-five">
          <div className="container">
            <div className="update_time">{howData.update}</div>
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
        {/* Insurance Details End */}
      </Layout>
    </>
  );
}
