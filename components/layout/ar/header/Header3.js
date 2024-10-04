import Menu from "../Menu"
import Link from "next/link"
import MobileMenu from "../MobileMenu"
export default function Header3({ scroll, isMobileMenu, handleMobileMenu, handlePopup  }) {
    return (
        <>
        
        <header className="main-header-three">
            <nav className="main-menu main-menu-three">
                <div className="main-menu-three__wrapper">
                    <div className="container">
                        <div className="main-menu-three__wrapper-inner">
                            <div className="main-menu-three__left">
                                <div className="main-menu-three__logo">
                                    <Link href="/"><img src="assets/images/resources/logo-3.png" alt=""/></Link>
                                </div>
                                <div className="main-menu-three__main-menu-box">
                                    <Link href="#" className="mobile-nav__toggler"><i className="fa fa-bars"></i></Link>
                                    <Menu />
                                </div>
                            </div>
                            <div className="main-menu-three__right">
                                <div className="main-menu-three__search-box">
                                    <Link href="#" className="main-menu-three__search search-toggler icon-search"  onClick={handlePopup}></Link>
                                </div>
                                <div className="main-menu-three__cart">
                                    <Link href="products"><span className="icon-cart"></span></Link>
                                </div>
                                <div className="main-menu-three__btn-box">
                                    <Link href="contact" className="main-menu-three__btn thm-btn">GET A QUOTE</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>

        <MobileMenu handleMobileMenu={handleMobileMenu} />

        <div className={`stricky-header stricked-menu main-menu main-menu-three ${scroll ? "stricky-fixed" : ""}`}>
            <div className="sticky-header__content">
                <nav className="main-menu main-menu-three">
                    <div className="main-menu-three__wrapper">
                        <div className="container">
                            <div className="main-menu-three__wrapper-inner">
                                <div className="main-menu-three__left">
                                    <div className="main-menu-three__logo">
                                        <Link href="/"><img src="assets/images/resources/logo-3.png" alt=""/></Link>
                                    </div>
                                    <div className="main-menu-three__main-menu-box">
                                        <Link href="#" className="mobile-nav__toggler"><i className="fa fa-bars"></i></Link>
                                        <Menu />
                                    </div>
                                </div>
                                <div className="main-menu-three__right">
                                    <div className="main-menu-three__search-box">
                                        <Link href="#" className="main-menu-three__search search-toggler icon-search"  onClick={handlePopup}></Link>
                                    </div>
                                    <div className="main-menu-three__cart">
                                        <Link href="products"><span className="icon-cart"></span></Link>
                                    </div>
                                    <div className="main-menu-three__btn-box">
                                        <Link href="contact" className="main-menu-three__btn thm-btn">GET A QUOTE</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>{/*  /.sticky-header__content  */}
        </div>{/*  /.stricky-header  */}

        </>
    )
}
