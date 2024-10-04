import Layout from "@/components/layout/Layout";
import Link from "next/link";
import Markdown from "markdown-to-jsx";
import axios from "axios";

async function getBlogData() {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/blogs?populate=deep`
  );

  const temp = res.data.data.filter((item) => item.attributes.en.slug === "hair-transplant-permanent-and-natural-solutions-to-hair-loss");

  return temp;
}

export async function generateMetadata() {

  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/blogs?populate=deep`
  );

  const temp = res.data.data.filter((item) => item.attributes.en.slug === "hair-transplant-permanent-and-natural-solutions-to-hair-loss");

  if (temp[0]) {
    return {
      title: `Mediwali Health Tourism | ${temp[0].attributes.en.title}`,
      description: `${temp[0].attributes.en.meta_description}`,
    };
  }
}

async function getGeneralData() {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/general?populate=deep`
  );
  return res.data.data.attributes;
}

export default async function Home() {
  const blog = await getBlogData();
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
                        src="../assets/images/resources/error-page-img-1.png"
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
                    <Link href="/" className="thm-btn error-page__btn">
                      back to home
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
          breadcrumbTitle={blog[0].attributes.en.title}
        >
          {/* Blog Details Start */}
          <section className="blog-details">
            <div className="container">
              <div className="row">
                <div className="col-xl-12 col-lg-12">
                  <div className="blog-details__left">
                    <div className="blog-details__img-1">
                      <img
                        src={`${process.env.NEXT_PUBLIC_IP}${blog[0].attributes.en.image.data.attributes.url}`}
                        alt=""
                      />
                    </div>
                    <div className="blog-details__content">
                      <Markdown>{blog[0].attributes.en.description}</Markdown>
                    </div>

                    <div style={{ marginTop: 50 }} className="blog-one__tag">
                      {blog[0].attributes.en.words.map((item, index) => (
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
              <div className="update_time">{blog[0].attributes.en.update}</div>
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
          {/* Blog Details End */}
        </Layout>
      </>
    );
  }
}
