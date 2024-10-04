import Link from "next/link"
export default function Services() {
    return (
        <>
            {/* Services Two Start */}
                <section className="services-two">
                    <div className="services-two__shape-2 float-bob-y">
                        <img src="assets/images/shapes/services-two-shape-2.png" alt=""/>
                    </div>
                    <div className="services-two__shape-3">
                        <img src="assets/images/shapes/services-two-shape-3.png" alt=""/>
                    </div>
                    <div className="services-two__shape-4">
                        <img src="assets/images/shapes/services-two-shape-4.png" alt=""/>
                    </div>
                    <div className="services-two__top">
                        <div className="container">
                            <div className="section-title text-center">
                                <div className="section-title__tagline-box">
                                    <p className="section-title__tagline">SONCHOY POPULAR SERVICE</p>
                                </div>
                                <h2 className="section-title__title">Amazing Products
                                    <br/> that Protect and Reward</h2>
                            </div>
                            <div className="services-two__inner">
                                <ul className="services-two__services-list list-unstyled">
                                    <li className="wow fadeInUp" data-wow-delay="100ms">
                                        <div className="services-two__single-inner">
                                            <div className="services-two__single">
                                                <div className="services-two__icon">
                                                    <span className="icon-life-insurance"></span>
                                                </div>
                                                <h3 className="services-two__title"><Link href="life-insurance">Life Insurance</Link>
                                                </h3>
                                                <div className="services-two__arrow">
                                                    <Link href="#"><span className="icon-next"></span></Link>
                                                </div>
                                            </div>
                                            <div className="services-two__hover-single">
                                                <div className="services-two__shape-1 img-bounce">
                                                    <img src="assets/images/shapes/services-two-shape-1.png" alt=""/>
                                                </div>
                                                <div className="services-two__hover-icon">
                                                    <span className="icon-life-insurance"></span>
                                                </div>
                                                <h3 className="services-two__hover-title"><Link href="life-insurance">Life
                                                        Insurance</Link></h3>
                                                <p className="services-two__hover-text">Nullam eu nibh vitae est
                                                    tempor molestie id</p>
                                                <div className="services-two__hover-arrow">
                                                    <Link href="life-insurance"><span className="icon-next"></span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="wow fadeInUp" data-wow-delay="200ms">
                                        <div className="services-two__single-inner">
                                            <div className="services-two__single">
                                                <div className="services-two__icon">
                                                    <span className="icon-protection-1"></span>
                                                </div>
                                                <h3 className="services-two__title"><Link href="health-insurance">Health Cover</Link>
                                                </h3>
                                                <div className="services-two__arrow">
                                                    <Link href="health-insurance"><span className="icon-next"></span></Link>
                                                </div>
                                            </div>
                                            <div className="services-two__hover-single">
                                                <div className="services-two__shape-1 img-bounce">
                                                    <img src="assets/images/shapes/services-two-shape-1.png" alt=""/>
                                                </div>
                                                <div className="services-two__hover-icon">
                                                    <span className="icon-protection-1"></span>
                                                </div>
                                                <h3 className="services-two__hover-title"><Link href="health-insurance">Health
                                                        Cover</Link></h3>
                                                <p className="services-two__hover-text">Nullam eu nibh vitae est
                                                    tempor molestie id</p>
                                                <div className="services-two__hover-arrow">
                                                    <Link href="health-insurance"><span className="icon-next"></span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="wow fadeInUp" data-wow-delay="300ms">
                                        <div className="services-two__single-inner">
                                            <div className="services-two__single">
                                                <div className="services-two__icon">
                                                    <span className="icon-car-1"></span>
                                                </div>
                                                <h3 className="services-two__title"><Link href="car-insurance">Car Cover</Link></h3>
                                                <div className="services-two__arrow">
                                                    <Link href="car-insurance"><span className="icon-next"></span></Link>
                                                </div>
                                            </div>
                                            <div className="services-two__hover-single">
                                                <div className="services-two__shape-1 img-bounce">
                                                    <img src="assets/images/shapes/services-two-shape-1.png" alt=""/>
                                                </div>
                                                <div className="services-two__hover-icon">
                                                    <span className="icon-car-1"></span>
                                                </div>
                                                <h3 className="services-two__hover-title"><Link href="car-insurance">Car Cover</Link>
                                                </h3>
                                                <p className="services-two__hover-text">Nullam eu nibh vitae est
                                                    tempor molestie id</p>
                                                <div className="services-two__hover-arrow">
                                                    <Link href="car-insurance"><span className="icon-next"></span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="wow fadeInUp" data-wow-delay="400ms">
                                        <div className="services-two__single-inner">
                                            <div className="services-two__single">
                                                <div className="services-two__icon">
                                                    <span className="icon-travel-insurance"></span>
                                                </div>
                                                <h3 className="services-two__title"><Link href="family-insurance">Travels
                                                        Cover</Link></h3>
                                                <div className="services-two__arrow">
                                                    <Link href="family-insurance"><span className="icon-next"></span></Link>
                                                </div>
                                            </div>
                                            <div className="services-two__hover-single">
                                                <div className="services-two__shape-1 img-bounce">
                                                    <img src="assets/images/shapes/services-two-shape-1.png" alt=""/>
                                                </div>
                                                <div className="services-two__hover-icon">
                                                    <span className="icon-travel-insurance"></span>
                                                </div>
                                                <h3 className="services-two__hover-title"><Link href="family-insurance">Travels
                                                        Cover</Link></h3>
                                                <p className="services-two__hover-text">Nullam eu nibh vitae est
                                                    tempor molestie id</p>
                                                <div className="services-two__hover-arrow">
                                                    <Link href="family-insurance"><span className="icon-next"></span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="wow fadeInUp" data-wow-delay="500ms">
                                        <div className="services-two__single-inner">
                                            <div className="services-two__single">
                                                <div className="services-two__icon">
                                                    <span className="icon-home-security"></span>
                                                </div>
                                                <h3 className="services-two__title"><Link href="home-insurance">Home Cover</Link>
                                                </h3>
                                                <div className="services-two__arrow">
                                                    <Link href="home-insurance"><span className="icon-next"></span></Link>
                                                </div>
                                            </div>
                                            <div className="services-two__hover-single">
                                                <div className="services-two__shape-1 img-bounce">
                                                    <img src="assets/images/shapes/services-two-shape-1.png" alt=""/>
                                                </div>
                                                <div className="services-two__hover-icon">
                                                    <span className="icon-home-security"></span>
                                                </div>
                                                <h3 className="services-two__hover-title"><Link href="home-insurance">Home
                                                        Cover</Link></h3>
                                                <p className="services-two__hover-text">Nullam eu nibh vitae est
                                                    tempor molestie id</p>
                                                <div className="services-two__hover-arrow">
                                                    <Link href="home-insurance"><span className="icon-next"></span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="services-two__bottom">
                        <div className="container">
                            <div className="services-two__bottom-inner">
                                <div className="services-two__bottom-img">
                                    <img src="assets/images/services/services-two-bottom-img.jpg" alt=""/>
                                </div>
                                <h3 className="services-two__bottom-title">Compare & Get
                                    <br/> Your Insurance in Right Way</h3>
                                <div className="services-two__bottom-btn-box">
                                    <Link href="contact" className="services-two__bottom-btn thm-btn">GET A QUOTE</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            {/* Services Two End */}
        </>
    )
}
