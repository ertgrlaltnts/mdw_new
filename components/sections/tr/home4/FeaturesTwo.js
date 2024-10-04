import Link from "next/link";
export default function FeaturesTwo({ data }) {
  return (
    <>
      {/* Feature Two Start */}
      <section className="feature-two">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-6 col-lg-6 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="feature-two__left">
                <h3 className="feature-two__title">Bilgi Alın</h3>
                <div className="feature-two__left-content">
                  <div className="icon">
                    <span className="icon-phone-1"></span>
                  </div>
                  <div className="content">
                    <p>Bizi Arayın</p>
                    <Link href={`tel:${data.phone_1_call}`}>
                      {data.phone_1}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6 wow fadeInRight"
              data-wow-delay="200ms"
            >
              <div className="feature-two__right">
                <h3 className="feature-two__title">Sosyal Medyamız</h3>

                <div className="feature-two__left-content">
                  <Link href={data.facebook}>
                    <div className="icon">
                      <span
                        style={{ background: "#043e5c", color: "#fff" }}
                        className="icon-facebook"
                      ></span>
                    </div>
                  </Link>

                  <Link style={{ marginLeft: 5 }} href={data.instagram}>
                    <div className="icon">
                      <span
                        style={{ background: "#043e5c", color: "#fff" }}
                        className="icon-instagram"
                      ></span>
                    </div>
                  </Link>

                  <Link style={{ marginLeft: 5 }} href={data.twitter}>
                    <div className="icon">
                      <span
                        style={{ background: "#043e5c", color: "#fff" }}
                        className="icon-twitter"
                      ></span>
                    </div>
                  </Link>

                  <Link style={{ marginLeft: 5 }} href={data.youtube}>
                    <div className="icon">
                      <span
                        style={{ background: "#043e5c", color: "#fff" }}
                        className="icon-youtube"
                      ></span>
                    </div>
                  </Link>

                  <Link style={{ marginLeft: 5 }} href={data.linkedin}>
                    <div className="icon">
                      <span
                        style={{ background: "#043e5c", color: "#fff" }}
                        className="icon-linkedin"
                      ></span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Feature Two End */}
    </>
  );
}
