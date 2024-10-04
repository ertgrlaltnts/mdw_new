import Layout from "@/components/layout/tr/Layout";
import Link from "next/link";
import Markdown from "markdown-to-jsx";
import axios from "axios";

export async function generateStaticParams() {
  // Örneğin, API'den tüm blog gönderilerinin ID'lerini alın
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/blogs?populate=deep`
  );

  // Her post için id parametresini döndürün
  return res.data.data.map((item) => ({
    slug: item.attributes.tr.slug,
  }));
}

async function getBlogData(slug) {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/blogs?populate=deep`
  );

  const temp = res.data.data.filter((item) => item.attributes.tr.slug === slug);

  return temp;
}

export async function generateMetadata({ params }) {
  const { slug } = params;

  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/blogs?populate=deep`
  );

  const temp = res.data.data.filter((item) => item.attributes.tr.slug === slug);

  if (temp[0]) {
    return {
      title: `Mediwali Sağlık Turizmi | ${temp[0].attributes.tr.title}`,
      description: `${temp[0].attributes.tr.meta_description}`,
    };
  }
}

async function getGeneralData() {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/general?populate=deep`
  );
  return res.data.data.attributes;
}

export default async function Home({ params }) {
  const { slug } = params;
  const blog = await getBlogData(slug);
  const general = await getGeneralData();

  if (!blog[0]) {
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
                      Ana Sayfaya Dön
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
          breadcrumbTitle={blog[0].attributes.tr.title}
        >
          {/* Blog Details Start */}
          <section className="blog-details">
            <div className="container">
              <div className="row">
                <div className="col-xl-12 col-lg-12">
                  <div className="blog-details__left">
                    <div className="blog-details__img-1">
                      <img
                        src={`${process.env.NEXT_PUBLIC_IP}${blog[0].attributes.tr.image.data.attributes.url}`}
                        alt=""
                      />
                    </div>
                    <div className="blog-details__content">
                      <Markdown>{blog[0].attributes.tr.description}</Markdown>
                    </div>

                    <div style={{ marginTop: 50 }} className="blog-one__tag">
                      {blog[0].attributes.tr.words.map((item, index) => (
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
              <div className="update_time">{blog[0].attributes.tr.update}</div>
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
}
