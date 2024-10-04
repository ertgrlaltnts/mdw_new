import Layout from "@/components/layout/tr/Layout";
import Link from "next/link";
import Markdown from "markdown-to-jsx";
import axios from "axios";

export const metadata = {
  title: "Mediwali Sağlık Turizmi | Özel Teklifler",
  description: `Mediwali sağlık hizmetlerinde özel fırsatlar sunuyor. Türkiye'nin önde gelen hastanelerinde indirimli tedavi paketlerini ve kişiye özel bakım avantajlarını kaçırmayın. Sağlığınız için en iyi teklifi şimdi yakalayın.`,
};

async function getOfferData(slug) {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/home?populate=deep`
  );

  const temp = res.data.data.attributes.tr.offers.filter(
    (item) => item.slug === slug
  );

  return temp;
}

async function getGeneralData() {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/general?populate=deep`
  );
  return res.data.data.attributes;
}

export default async function Home({ params }) {
  const { slug } = params;

  const offer = await getOfferData(slug);
  const general = await getGeneralData();

  if (!offer[0]) {
    return (
      <>
        <Layout data={general} headerStyle={1} footerStyle={1}>
          {/* Error Page Start */}
          <section className="error-page">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="error-page__inner">
                    <div className="error-page__img img-bounce">
                      <img
                        src="../../assets/images/resources/error-page-img-1.png"
                        alt=""
                      />
                    </div>
                    <h3 className="error-page__tagline">
                      Sorry! Page Not Found!
                    </h3>
                    <p className="error-page__text">
                      Oops! The page you are looking for does not exist. Please
                      return to the site’s homepage.
                    </p>
                    <Link href="/tr" className="thm-btn error-page__btn">
                      Back To Home
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Error Page End */}
        </Layout>
      </>
    );
  } else {
    return (
      <>
        <Layout
          data={general}
          headerStyle={1}
          footerStyle={1}
          breadcrumbTitle={offer[0].title}
        >
          {/* Blog Details Start */}
          <section className="blog-details">
            <div className="container">
              <div className="row">
                <div className="col-xl-12 col-lg-12">
                  <div className="blog-details__left">
                    <div className="blog-details__img-1">
                      {
                        <img
                          src={`${process.env.NEXT_PUBLIC_IP}${offer[0].image.data.attributes.url}`}
                          alt=""
                        />
                      }
                    </div>
                    <div className="blog-details__content">
                      {<Markdown>{offer[0].description}</Markdown>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="cta-one cta-five">
            <div className="container">
              <div className="update_time">{offer[0].update}</div>
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
          {/* Blog Details End */}
        </Layout>
      </>
    );
  }
}
