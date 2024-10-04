"use client";
import Link from "next/link";
import { useState } from "react";

const MobileMenu = ({ isSidebar, handleMobileMenu, handleSidebar, data }) => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
    subMenuKey: "",
  });

  const handleToggle = (key, subMenuKey = "") => {
    if (isActive.key === key && isActive.subMenuKey === subMenuKey) {
      setIsActive({
        status: false,
        key: "",
        subMenuKey: "",
      });
    } else {
      setIsActive({
        status: true,
        key,
        subMenuKey,
      });
    }
  };
  return (
    <>
      <div className="mobile-nav__wrapper">
        <div
          className="mobile-nav__overlay mobile-nav__toggler"
          onClick={handleMobileMenu}
        ></div>
        <div className="mobile-nav__content">
          <span
            className="mobile-nav__close mobile-nav__toggler"
            onClick={handleMobileMenu}
          >
            <i className="fa fa-times"></i>
          </span>

          <div className="logo-box">
            <a href="/" aria-label="logo image">
              <img
                src={`${process.env.NEXT_PUBLIC_IP}${data.logo_white.data.attributes.url}`}
                width="150"
                alt=""
              />
            </a>
          </div>

          <div className="mobile-nav__container">
            <div
              className="collapse navbar-collapse show clearfix"
              id="navbarSupportedContent"
            >
              <ul className="main-menu__list">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li
                  className={
                    isActive.key == 1 ? "dropdown current" : "dropdown"
                  }
                >
                  <Link href="/about">Our Company</Link>
                  <ul
                    style={{
                      display: `${isActive.key == 1 ? "block" : "none"}`,
                    }}
                  >
                    <li>
                      <Link href="/about">About Mediwali</Link>
                    </li>
                    <li>
                      <Link href="/how-we-works">How We Works ?</Link>
                    </li>
                    <li>
                      <Link href="/health-services">Health Services</Link>
                    </li>
                    <li>
                      <Link href="/contracted-institutions">
                        Contracted Institutions
                      </Link>
                    </li>
                    <li>
                      <Link href="/contracted-doctors">Contracted Doctors</Link>
                    </li>
                  </ul>
                  <div
                    className={
                      isActive.key == 1 ? "dropdown-btn open" : "dropdown-btn"
                    }
                    onClick={() => handleToggle(1)}
                  >
                    <span className="fa fa-angle-right" />
                  </div>
                </li>
                <li>
                  <Link href="/special-offers">Special Offers</Link>
                </li>

                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
                <li
                  className={
                    isActive.key == 1 ? "dropdown current" : "dropdown"
                  }
                >
                  <Link href="#">
                    <img
                      className="lng_flag"
                      src="https://api.mediwali.com/uploads/en_d15f5612a9.png"
                    />
                  </Link>
                  <ul
                    style={{
                      display: `${isActive.key == 2 ? "block" : "none"}`,
                    }}
                  >
                    <li>
                      <Link href="/">English</Link>
                    </li>
                    <li>
                      <Link href="/tr">Türkçe</Link>
                    </li>

                    <li>
                      <Link href="/ar">اللغة العربية</Link>
                    </li>

                    <li>
                      <Link href="/geo">ქართული</Link>
                    </li>
                  </ul>
                  <div
                    className={
                      isActive.key == 2 ? "dropdown-btn open" : "dropdown-btn"
                    }
                    onClick={() => handleToggle(2)}
                  >
                    <span className="fa fa-angle-right" />
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <ul className="mobile-nav__contact list-unstyled">
            <li>
              <i className="fa fa-envelope"></i>
              <a href={`mailto:${data.mail_1}`}>{data.mail_1}</a>
            </li>

            <li>
              <i className="fa fa-envelope"></i>
              <a href={`mailto:${data.mail_2}`}>{data.mail_2}</a>
            </li>
            <li>
              <i className="fa fa-phone-alt"></i>
              <a href={`tel:${data.phone_1_call}`}>{data.phone_1}</a>
            </li>
            <li>
              <i className="fa fa-phone-alt"></i>
              <a href={`tel:${data.phone_2_call}`}>{data.phone_2}</a>
            </li>
          </ul>
          <div className="mobile-nav__top">
            <div className="mobile-nav__social">
              <a href={data.facebook} className="fab fa-facebook-square"></a>
              <a href={data.instagram} className="fab fa-instagram"></a>
              <a href={data.youtube} className="fab fa-youtube"></a>
              <a href={data.linkedin} className="fab fa-linkedin"></a>
              <a href={data.twitter} className="fab fa-twitter"></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MobileMenu;
