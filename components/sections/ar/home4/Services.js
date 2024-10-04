

import Link from "next/link"
export default function Services() {
    return (
        <>
            {/* Services Four Start  */}
        <section className="services-four">
            <div className="container">
                <div className="section-title text-center">
                    <div className="section-title__tagline-box">
                        <p className="section-title__tagline">OUR SERVICE FOR YOU</p>
                    </div>
                    <h2 className="section-title__title">Our Effective Insurence
                        <br/> Services & Solutions</h2>
                </div>
                <div className="row">
                    {/* Services Four Single Start */}
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="services-four__single">
                            <div className="services-four__img-box">
                                <div className="services-four__img">
                                    <img src="assets/images/services/services-4-1.jpg" alt=""/>
                                </div>
                                <div className="services-four__content">
                                    <div className="services-four__icon">
                                        <span className="icon-healthcare"></span>
                                    </div>
                                    <h3 className="services-four__title"><Link href="health-insurance">Health
                                            Insurance</Link></h3>
                                </div>
                                <div className="services-four__arrow">
                                    <Link href="health-insurance"><span className="icon-next"></span></Link>
                                </div>
                                <div className="services-four__hover-content">
                                    <div className="services-four__hover-icon">
                                        <span className="icon-healthcare"></span>
                                    </div>
                                    <h3 className="services-four__hover-title"><Link href="health-insurance">Health
                                            Insurance</Link></h3>
                                    <p className="services-four__hover-text">Arki features minimal and stylish
                                        theme is well crafted for</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Services Four Single End */}
                    {/* Services Four Single Start */}
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="300ms">
                        <div className="services-four__single">
                            <div className="services-four__img-box">
                                <div className="services-four__img">
                                    <img src="assets/images/services/services-4-2.jpg" alt=""/>
                                </div>
                                <div className="services-four__content">
                                    <div className="services-four__icon">
                                        <span className="icon-family-insurance"></span>
                                    </div>
                                    <h3 className="services-four__title"><Link href="family-insurance">Family
                                            Insurance</Link></h3>
                                </div>
                                <div className="services-four__arrow">
                                    <Link href="family-insurance"><span className="icon-next"></span></Link>
                                </div>
                                <div className="services-four__hover-content">
                                    <div className="services-four__hover-icon">
                                        <span className="icon-family-insurance"></span>
                                    </div>
                                    <h3 className="services-four__hover-title"><Link href="family-insurance">Family
                                            Insurance</Link></h3>
                                    <p className="services-four__hover-text">Arki features minimal and stylish
                                        theme is well crafted for</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Services Four Single End */}
                    {/* Services Four Single Start */}
                    <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="600ms">
                        <div className="services-four__single">
                            <div className="services-four__img-box">
                                <div className="services-four__img">
                                    <img src="assets/images/services/services-4-3.jpg" alt=""/>
                                </div>
                                <div className="services-four__content">
                                    <div className="services-four__icon">
                                        <span className="icon-wallet"></span>
                                    </div>
                                    <h3 className="services-four__title"><Link href="business-insurance">Business
                                            Insurance</Link></h3>
                                </div>
                                <div className="services-four__arrow">
                                    <Link href="business-insurance"><span className="icon-next"></span></Link>
                                </div>
                                <div className="services-four__hover-content">
                                    <div className="services-four__hover-icon">
                                        <span className="icon-wallet"></span>
                                    </div>
                                    <h3 className="services-four__hover-title"><Link href="business-insurance">Business
                                            Insurance</Link></h3>
                                    <p className="services-four__hover-text">Arki features minimal and stylish
                                        theme is well crafted for</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Services Four Single End */}
                </div>
            </div>
        </section>
        {/* Services Four End  */}
        </>
    )
}
