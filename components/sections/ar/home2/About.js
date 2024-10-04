'use client'
import Link from "next/link"
export default function About() {
    return (
        <>

            {/* About Two Start */}
                <section className="about-two">
                    <div className="about-two_-shape-3 img-bounce">
                        <img src="assets/images/shapes/about-two-shape-3.png" alt=""/>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-5">
                                <div className="about-two__left">
                                    <div className="about-two__img-box  wow slideInLeft" data-wow-delay="100ms"
                                        data-wow-duration="2500ms">
                                        <div className="about-two__img">
                                            <img src="assets/images/resources/about-two-img-1.jpg" alt=""/>
                                        </div>
                                        <div className="about-two__img-2">
                                            <img src="assets/images/resources/about-two-img-2.jpg" alt=""/>
                                        </div>
                                        <div className="about-two__client-box">
                                            <div className="about-two__client-img">
                                                <img src="assets/images/resources/about-two-client-img.jpg" alt=""/>
                                            </div>
                                            <div className="about-two__client-content">
                                                <div className="about-two__count count-box">
                                                    <h3> 4.5</h3>
                                                    <span>K</span>
                                                </div>
                                                <p>Satisfied Clients</p>
                                            </div>
                                        </div>
                                        <div className="about-two__shape-1"></div>
                                        <div className="about-two__shape-2 float-bob-x">
                                            <img src="assets/images/shapes/about-two-shape-2.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-7">
                                <div className="about-two__right">
                                    <div className="section-title text-left">
                                        <div className="section-title__tagline-box">
                                            <p className="section-title__tagline">KNOW ABOUT SONCHOY</p>
                                        </div>
                                        <h2 className="section-title__title">Choose Your Insurance
                                            <br/> Service Company</h2>
                                    </div>
                                    <p className="about-two__text">Arki features minimal and stylish design. The theme is well
                                        crafted for all the modern architect and interior design website. With Arki, it makes
                                        your website look even more attractive and impressive to</p>
                                    <ul className="about-two__points list-unstyled">
                                        <li>
                                            <div className="icon">
                                                <span className="icon-cashback"></span>
                                            </div>
                                            <h3>Moneyback
                                                <br/> Gurantee</h3>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-customer-service"></span>
                                            </div>
                                            <h3>Technical
                                                <br/> Support always</h3>
                                        </li>
                                    </ul>
                                    <h3 className="about-two__big-text">Duis aute irure dolor in reprehenderit in velit
                                        esse cillum dolore eu nulla pariatur. </h3>
                                    <div className="about-two__btn-and-contact">
                                        <div className="about-two__btn-box">
                                            <Link href="about" className="about-two__btn thm-btn">Discover More</Link>
                                        </div>
                                        <div className="about-two__contact">
                                            <div className="icon">
                                                <span className="icon-phone-1"></span>
                                            </div>
                                            <div className="content">
                                                <span>Call Us Free</span>
                                                <p><Link href="tel:+9993256589">+999 325 6589</Link></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            {/* About Two End */}

        </>
    )
}
