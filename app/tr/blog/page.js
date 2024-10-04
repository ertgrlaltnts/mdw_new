import Layout from "@/components/layout/tr/Layout";
import Link from "next/link";
import axios from "axios";

export const metadata = {
  title: "Mediwali Sağlık Turizmi | Blog",
  description: `Mediwali, Türkiye'de kaliteli sağlık turizmi hizmetleri sunan güvenilir bir şirkettir. Uzman ekibimizle, uluslararası hastalara kişiselleştirilmiş tedavi planları ve kapsamlı destek sunuyoruz. Sağlık yolculuğunuzda yanınızdayız.`,
};

async function getBlogData() {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/blogs?populate=deep`
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
  const blogs = await getBlogData();
  const general = await getGeneralData();

  return (
    <>
      <Layout
        data={general}
        headerStyle={1}
        footerStyle={1}
        breadcrumbTitle="Blog"
      >
        {/* Blog Page Start */}
        <section className="blog-page">
          <div className="container">
            <div className="row">
              {blogs.map((item, index) => (
                <div
                  key={index}
                  className="col-xl-4 col-lg-4 wow fadeInLeft"
                  data-wow-delay="100ms"
                >
                  <div className="blog-one__single">
                    <div className="blog-one__img-box">
                      <div className="blog-one__img">
                        <img
                          src={`${process.env.NEXT_PUBLIC_IP}${item.attributes.tr.image.data.attributes.url}`}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="blog-one__content">
                      <h3 className="blog-one__title">
                        <Link href={`/tr/blog/${item.attributes.tr.slug}`}>
                          {item.attributes.tr.title}
                        </Link>
                      </h3>
                      <div className="blog-one__client-info">
                        <div className="blog-one__client-img">
                          <img
                            src="../assets/images/main/blog_admin.png"
                            alt=""
                          />
                        </div>
                        <div className="blog-one__client-content">
                          <h3>Mediwali</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Blog Page End */}

        {/* CTA One Start  */}
        <section className="cta-one cta-five">
          <div className="container">
            <div className="update_time">{blogs[0].attributes.tr.update}</div>
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
        {/* CTA One End  */}
      </Layout>
    </>
  );
}
