import Layout from "@/components/layout/Layout";
import Link from "next/link";
import axios from "axios";

export const metadata = {
  title: "Mediwali Health Tourism | Blog",
  description: `Mediwali is a trusted company providing quality medical tourism services in Turkey. With our team of experts, we offer personalized treatment plans and comprehensive support to international patients. We are with you on your health journey.`,
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
      <Layout data={general} headerStyle={1} footerStyle={1} breadcrumbTitle="Blog">
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
                          src={`${process.env.NEXT_PUBLIC_IP}${item.attributes.en.image.data.attributes.url}`}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="blog-one__content">
                      <h3 className="blog-one__title">
                        <Link href={`/blog/${item.attributes.en.slug}`}>
                          {item.attributes.en.title}
                        </Link>
                      </h3>
                      <div className="blog-one__client-info">
                        <div className="blog-one__client-img">
                          <img src="assets/images/main/blog_admin.png" alt="" />
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
            <div className="update_time">{blogs[0].attributes.en.update}</div>
            <div className="cta-one__inner">
              <div
                className="cta-one__bg"
                style={{
                  backgroundImage:
                    "url(assets/images/shapes/cta-three-bg-shape-2.png)",
                }}
              ></div>
              <div className="cta-one__title-box">
                <h3>
                  Get an Instant <span>Quote</span> Right Now
                </h3>
                <p>Contact us to learn about our special offers for you.</p>
              </div>
              <div className="cta-one__btn-box">
                <Link href="/contact" className="cta-one__btn thm-btn">
                  GET YOUR FREE QUOTE NOW
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
