import Menu from "../Menu"
import Link from "next/link"
import MobileMenu from "../MobileMenu"
export default function Header4({ scroll, isMobileMenu, handleMobileMenu }) {
    return (
        <>

        <header className="main-header-four">
            <div className="main-header-four__top">
                <div className="container">
                    <div className="main-header-four__top-inner">
                        <div className="main-header-four__top-left">
                            <div className="main-header-four__logo">
                                <Link href="index"><img src="assets/images/resources/logo-4.png" alt=""/></Link>
                            </div>
                            <div className="main-header-four__search-box">
                                <form action="#" className="main-header-four__search-form">
                                    <input type="search" placeholder="Search...."/>
                                    <button type="submit"><i className="icon-search"></i></button>
                                </form>
                            </div>
                        </div>
                        <ul className="list-unstyled main-header-four__contact-list">
                            <li>
                                <div className="text">
                                    <span>email</span>
                                    <p><Link href="mailto:sonchoy@gmail.com">sonchoy@gmail.com</Link></p>
                                </div>
                            </li>
                            <li>
                                <div className="text">
                                    <span>PHONE</span>
                                    <p><Link href="tel:18000000000">1800 000 0000 </Link></p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <nav className="main-menu main-menu-four">
                <div className="main-menu-four__wrapper">
                    <div className="container">
                        <div className="main-menu-four__wrapper-inner">
                            <div className="main-menu-four__left">
                                <div className="main-menu-four__main-menu-box">
                                    <Link href="#" className="mobile-nav__toggler"><i className="fa fa-bars"></i></Link>
                                    <Menu />
                                </div>
                            </div>
                            <div className="main-menu-four__right">
                                <div className="main-menu-four__cart">
                                    <Link href="#"><span className="icon-cart"></span></Link>
                                </div>
                                <div className="main-menu-four__btn-box">
                                    <Link href="contact" className="main-menu-four__btn thm-btn">GET A QUOTE</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>

        <MobileMenu handleMobileMenu={handleMobileMenu} />
        
        <div className={`stricky-header stricked-menu main-menu main-menu-four ${scroll ? "stricky-fixed" : ""}`}>
            <div className="sticky-header__content">
                <nav className="main-menu main-menu-four">
                    <div className="main-menu-four__wrapper">
                        <div className="container">
                            <div className="main-menu-four__wrapper-inner">
                                <div className="main-menu-four__left">
                                    <div className="main-menu-four__main-menu-box">
                                        <Link href="#" className="mobile-nav__toggler"><i className="fa fa-bars"></i></Link>
                                        <Menu />
                                    </div>
                                </div>
                                <div className="main-menu-four__right">
                                    <div className="main-menu-four__cart">
                                        <Link href="#"><span className="icon-cart"></span></Link>
                                    </div>
                                    <div className="main-menu-four__btn-box">
                                        <Link href="contact" className="main-menu-four__btn thm-btn">GET A QUOTE</Link>
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
