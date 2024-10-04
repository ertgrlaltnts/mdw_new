import Layout from "@/components/layout/tr/Layout";
import Link from "next/link";
import Markdown from "markdown-to-jsx";
import axios from "axios";

export const metadata = {
  title: "Mediwali Sağlık Turizmi | Sağlık Hizmetleri",
  description: `Türkiye'nin en iyi hastanelerinde sunduğumuz kapsamlı sağlık hizmetlerini keşfedin. Plastik cerrahiden diş tedavilerine, onkolojiden ortopediye kadar çok çeşitli tedavi seçenekleriyle Mediwali ile sağlığınıza kavuşun.`,
};

async function getHealthData() {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/health-service?populate=deep`
  );
  return res.data.data.attributes.tr;
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
        breadcrumbTitle="Sağlık Hizmetleri"
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
                  Hemen Şimdi <span>Teklif</span> Alın
                </h3>
                <p>
                  Size özel tekliflerimiz hakkında bilgi almak için bizimle
                  iletişime geçin.
                </p>
              </div>
              <div className="cta-one__btn-box">
                <Link href="/tr/contact" className="cta-one__btn thm-btn">
                  ÜCRETSİZ TEKLİFİNİZİ ŞİMDİ ALIN
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
