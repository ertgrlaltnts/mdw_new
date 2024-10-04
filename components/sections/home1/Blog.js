import Link from "next/link";

export default function Blog({ data }) {
  const blogs = data.reverse();

  return (
    <>
      {/* Blog One Start */}
      <section className="blog-one">
        <div className="container">
          <div className="section-title text-center">
            <div className="section-title__tagline-box">
              <p className="section-title__tagline">MEDIWALI</p>
            </div>
            <h2 className="section-title__title">Read Our Latest Blog Post</h2>
          </div>
          <div className="row">
            <div
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="blog-one__single">
                <div className="blog-one__img-box">
                  <div className="blog-one__img">
                    <img
                      src={`${process.env.NEXT_PUBLIC_IP}${blogs[0].attributes.en.image.data.attributes.url}`}
                      alt=""
                    />
                  </div>
                </div>
                <div className="blog-one__content">
                  <h3 className="blog-one__title">
                    <Link href={`/blog/${blogs[0].attributes.en.slug}`}>
                      {blogs[0].attributes.en.title}
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

            <div
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="blog-one__single">
                <div className="blog-one__img-box">
                  <div className="blog-one__img">
                    <img
                      src={`${process.env.NEXT_PUBLIC_IP}${blogs[1].attributes.en.image.data.attributes.url}`}
                      alt=""
                    />
                  </div>
                </div>
                <div className="blog-one__content">
                  <h3 className="blog-one__title">
                    <Link href={`/blog/${blogs[1].attributes.en.slug}`}>
                      {blogs[1].attributes.en.title}
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

            <div
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="blog-one__single">
                <div className="blog-one__img-box">
                  <div className="blog-one__img">
                    <img
                      src={`${process.env.NEXT_PUBLIC_IP}${blogs[2].attributes.en.image.data.attributes.url}`}
                      alt=""
                    />
                  </div>
                </div>
                <div className="blog-one__content">
                  <h3 className="blog-one__title">
                    <Link href={`/blog/${blogs[2].attributes.en.slug}`}>
                      {blogs[2].attributes.en.title}
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
          </div>
        </div>
      </section>
      {/* Blog One End */}
    </>
  );
}
