import Link from "next/link";
export default function Footer1({ data }) {
  return (
    <>
      <footer className="site-footer">
        <div className="site-footer__top">
          <div className="container">
            <div className="site-footer__top-inner">
              <div className="row">
                <div
                  className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="100ms"
                >
                  <div className="footer-widget__column footer-widget__about">
                    <div className="footer-widget__logo">
                      <Link href="/geo">
                      <img src={`${process.env.NEXT_PUBLIC_IP}${data.logo_white.data.attributes.url}`} alt="" />
                      </Link>
                    </div>
                    <p className="footer-widget__about-text">{data.address}</p>

                    <div className="footer-widget__emergency-call">
                      <Link href={`mailto:${data.mail_1}`}>{data.mail_1}</Link>
                    </div>

                    <div className="footer-widget__emergency-call">
                      <Link href={`mailto:${data.mail_2}`}>{data.mail_2}</Link>
                    </div>

                    <div className="footer-widget__emergency-call">
                      <Link href={`tel:${data.phone_1_call}`}>
                        {data.phone_1}
                      </Link>
                    </div>

                    <div className="footer-widget__emergency-call">
                      <Link href={`tel:${data.phone_2_call}`}>
                        {data.phone_2}
                      </Link>
                    </div>

                    <div className="footer-widget__social">
                      <Link href={data.facebook}>
                        <span className="icon-facebook"></span>
                      </Link>
                      <Link href={data.instagram}>
                        <span className="icon-instagram-1"></span>
                      </Link>
                      <Link href={data.youtube}>
                        <span className="icon-youtube"></span>
                      </Link>
                      <Link href={data.linkedin}>
                        <span className="icon-linkedin"></span>
                      </Link>
                      <Link href={data.twitter}>
                        <span className="icon-twitter"></span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="300ms"
                >
                  <div className="footer-widget__column footer-widget__quick-link">
                    <div className="footer-widget__title-box">
                      <h3 className="footer-widget__title">Mediwali</h3>
                    </div>
                    <ul className="footer-widget__navigation-list list-unstyled">
                      <li>
                        <Link href="/geo/privacy-policy">
                          კონფიდენციალურობის პოლიტიკა
                        </Link>
                      </li>
                      <li>
                        <Link href="/geo/policy-of-mediwali">
                          მედივალის პოლიტიკა
                        </Link>
                      </li>
                      <li>
                        <Link href="/geo/become-a-partner">
                          გახდი პარტნიორი
                        </Link>
                      </li>
                      <li>
                        <Link href="/geo/partner-policy">
                          მომსახურების პოლიტიკა
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="200ms"
                >
                  <div className="footer-widget__column footer-widget__navigation">
                    <div className="footer-widget__title-box">
                      <h3 className="footer-widget__title">ნავიგაცია</h3>
                    </div>
                    <ul className="footer-widget__navigation-list list-unstyled">
                      <li>
                        <Link href="/geo">მთავარი</Link>
                      </li>
                      <li>
                        <Link href="/geo/special-offers">
                          სპეციალური შეთავაზებები
                        </Link>
                      </li>
                      <li>
                        <Link href="/geo/health-services">
                          ჯანდაცვის სერვისები
                        </Link>
                      </li>
                      <li>
                        <Link href="/geo/blog">ბლოგი</Link>
                      </li>
                      <li>
                        <Link href="/geo/contact">კონტაქტი</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="300ms"
                >
                  <div className="footer-widget__column footer-widget__quick-link">
                    <div className="footer-widget__title-box">
                      <h3 className="footer-widget__title">კომპანია</h3>
                    </div>
                    <ul className="footer-widget__navigation-list list-unstyled">
                      <li>
                        <Link href="/geo/how-we-works">როგორ ვმუშაობთ?</Link>
                      </li>
                      <li>
                        <Link href="/geo/about">ჩვენს შესახებ</Link>
                      </li>
                      <li>
                        <Link href="/geo/contracted-institutions">
                          კონტრაქტი დაწესებულებები
                        </Link>
                      </li>
                      <li>
                        <Link href="/geo/contracted-doctors">
                          კონტრაქტი ექიმები
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-footer__bottom">
          <div className="container">
            <div className="site-footer__bottom-inner">
              <p
                style={{ width: "50%", textAlign: "left" }}
                className="site-footer__bottom-text"
              >
                Copyright © 2024 Mediwali Health Tourism
              </p>
              <div style={{ width: "50%", textAlign: "right" }}>
                <Link href={"https://wesoco.com/"}>
                  <img
                    style={{ width: 100, objectFit: "contain" }}
                    src="https://api.mediwali.com/uploads/wesoco_f2bcb4ba5c.webp"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
