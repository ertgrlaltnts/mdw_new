import Layout from "@/components/layout/ar/Layout";
import Link from "next/link";
import axios from "axios";

export const metadata = {
  title: "Mediwali Health Tourism | مدونة",
  description: `ميديوالي هي شركة موثوقة تقدم خدمات السياحة الصحية عالية الجودة في تركيا. من خلال فريق الخبراء لدينا، نقدم خطط علاج شخصية ودعمًا شاملاً للمرضى الدوليين. نحن معك في رحلتك الصحية.`,
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
        breadcrumbTitle="مدونة"
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
                          src={`${process.env.NEXT_PUBLIC_IP}${item.attributes.ar.image.data.attributes.url}`}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="blog-one__content">
                      <h3 className="blog-one__title">
                        <Link href={`/ar/blog/${item.attributes.ar.slug}`}>
                          {item.attributes.ar.title}
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
            <div className="update_time">{blogs[0].attributes.ar.update}</div>
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
