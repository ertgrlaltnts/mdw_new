import Layout from "@/components/layout/tr/Layout";
import Link from "next/link";
import axios from "axios";

export const metadata = {
  title: "Mediwali Sağlık Turizmi | Özel Teklifler",
  description: `Mediwali sağlık hizmetlerinde özel fırsatlar sunuyor. Türkiye'nin önde gelen hastanelerinde indirimli tedavi paketlerini ve kişiye özel bakım avantajlarını kaçırmayın. Sağlığınız için en iyi teklifi şimdi yakalayın.`,
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
      <Layout data={general} headerStyle={1} footerStyle={1} breadcrumbTitle="Özel Teklifler">
        {/* Team Two Start  */}
        <section className="team-page">
          <div className="container">
            <div className="row">
              {home.tr.offers.map((item, index) => (
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
                        TEKLİFİ İNCELE<span className="icon-next"></span>
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
            <div className="update_time">{home.tr.offers[0].update}</div>
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
                <p>Size özel tekliflerimiz hakkında bilgi almak için bizimle iletişime geçin.</p>
              </div>
              <div className="cta-one__btn-box">
                <Link href="/tr/contact" className="cta-one__btn thm-btn">
                ÜCRETSİZ TEKLİFİNİZİ ŞİMDİ ALIN
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
