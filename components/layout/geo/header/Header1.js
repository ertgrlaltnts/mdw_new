import Link from "next/link";
import Menu from "../Menu";
import MobileMenu from "../MobileMenu";

export default function Header1({
  scroll,
  isMobileMenu,
  handleMobileMenu,
  data,
}) {
  return (
    <>
      <header className={`main-header ${scroll ? "fixed-header" : ""}`}>
        <div className="main-header__top">
          <div className="main-header__top-inner">
            <ul className="list-unstyled main-header__contact-list">
              <li>
                <div className="icon">
                  <i className="icon-phone"></i>
                </div>
                <div className="text">
                  <p>
                    <Link href={`tel:${data.phone_1_call}`}>
                      {data.phone_1}
                    </Link>
                  </p>
                </div>
              </li>

              <li>
                <div className="icon">
                  <i className="icon-envelope"></i>
                </div>
                <div className="text">
                  <p>
                    <Link href={`mailto:${data.mail_1}`}>{data.mail_1}</Link>
                  </p>
                </div>
              </li>
            </ul>
            <div className="main-header__top-social-box">
              <div className="main-header__top-social">
                <Link href={data.facebook}>
                  <i className="fab fa-facebook"></i>
                </Link>
                <Link href={data.instagram}>
                  <i className="fab fa-instagram"></i>
                </Link>
                <Link href={data.youtube}>
                  <i className="fab fa-youtube"></i>
                </Link>
                <Link href={data.linkedin}>
                  <i className="fab fa-linkedin"></i>
                </Link>
                <Link href={data.twitter}>
                  <i className="fab fa-twitter"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <nav className="main-menu">
          <div className="main-menu__wrapper">
            <div className="main-menu__wrapper-inner">
              <div className="main-menu__left">
                <div className="main-menu__logo">
                  <Link href="/geo">
                    <img
                      src={`${process.env.NEXT_PUBLIC_IP}${data.logo.data.attributes.url}`}
                      alt=""
                    />
                  </Link>
                </div>
                <div className="main-menu__main-menu-box">
                  <Link
                    href="#"
                    className="mobile-nav__toggler"
                    onClick={handleMobileMenu}
                  >
                    <i className="fa fa-bars"></i>
                  </Link>
                  <Menu />
                </div>
              </div>
              <div className="main-menu__right">
                <div className="main-menu__btn-box">
                  <Link href="/geo/contact" className="main-menu__btn thm-btn">
                    მიიღეთ ინფორმაცია
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <MobileMenu data={data} handleMobileMenu={handleMobileMenu} />

      <div
        className={`stricky-header stricked-menu main-menu ${
          scroll ? "stricky-fixed" : ""
        }`}
      >
        <div className="sticky-header__content">
          <nav className="main-menu">
            <div className="main-menu__wrapper">
              <div className="main-menu__wrapper-inner">
                <div className="main-menu__left">
                  <div className="main-menu__logo">
                    <Link href="/geo">
                      <img
                        src={`${process.env.NEXT_PUBLIC_IP}${data.logo.data.attributes.url}`}
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="main-menu__main-menu-box">
                    <Link
                      href="#"
                      className="mobile-nav__toggler"
                      onClick={handleMobileMenu}
                    >
                      <i className="fa fa-bars"></i>
                    </Link>
                    <Menu />
                  </div>
                </div>
                <div className="main-menu__right">
                  <div className="main-menu__btn-box">
                    <Link
                      href="/geo/contact"
                      className="main-menu__btn thm-btn"
                    >
                      მიიღეთ ინფორმაცია
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
