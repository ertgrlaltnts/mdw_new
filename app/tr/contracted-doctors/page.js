import Layout from "@/components/layout/tr/Layout";
import Link from "next/link";
import axios from "axios";

export const metadata = {
  title: "Mediwali Sağlık Turizmi | Sözleşmeli Doktorlar",
  description: `Mediwali ile uzman doktorlarla tanışın. Estetik, diş, onkoloji, ortopedi ve daha birçok branşta Türkiye'nin en yetkin hekimlerinden profesyonel sağlık hizmeti alın. Sağlığınız emin ellerde.`,
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
      <Layout data={general} headerStyle={1} footerStyle={1} breadcrumbTitle="Anlaşmalı Doktorlar">
        {/* Team Two Start  */}
        <section className="team-page">
          <div className="container">
            <div className="row">
              {doctors.map((item, index) => (
                <div key={index} className="col-xl-4 col-lg-4">
                  <div className="team-two__single">
                    <div className="team-two__img-box">
                      <div className="team-two__img">
                        <img src={`${process.env.NEXT_PUBLIC_IP}${item.attributes.tr.image.data.attributes.url}`} alt="" />
                      </div>
                      <div className="hospital_logo">
                        <img src={`${process.env.NEXT_PUBLIC_IP}${item.attributes.tr.hospital_logo.data.attributes.url}`} />
                      </div>
                    </div>
                    <div className="team-two__content">
                      <p
                        style={{ fontSize: 13 }}
                        className="team-two__sub-title"
                      >
                       {item.attributes.tr.job}
                      </p>
                      <h3 className="team-two__title">
                        <Link href={`/tr/contracted-doctors/${item.attributes.tr.slug}`}>{item.attributes.tr.name}</Link>
                      </h3>
                      <p
                        style={{ fontSize: 13 }}
                        className="team-two__sub-title"
                      >
                       {item.attributes.tr.department}
                      </p>
                      <div className="team-two__share-and-social">
                        <div className="team-two__share">
                          <Link href={`/tr/contracted-doctors/${item.attributes.tr.slug}`}>
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
            <div className="update_time">{doctors[0].attributes.tr.update}</div>
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
