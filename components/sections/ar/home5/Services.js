
import Link from "next/link"
export default function Services() {
    return (
        <>
            {/* Services Five Start  */}
        <section className="services-five">
            <div className="services-five__shape-1 img-bounce">
                <img src="assets/images/shapes/services-five-shape-1.png" alt=""/>
            </div>
            <div className="services-five__shape-2 float-bob-x">
                <img src="assets/images/shapes/services-five-shape-2.png" alt=""/>
            </div>
            <div className="container">
                <div className="section-title text-center">
                    <div className="section-title__tagline-box">
                        <p className="section-title__tagline">SONCHOY POPULAR SERVICE</p>
                    </div>
                    <h2 className="section-title__title">Amazing Insurance Services</h2>
                </div>
                <div className="services-five__inner">
                    <div className="row">
                        {/* Services Five Single Start */}
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className="services-five__single">
                                <div className="services-five__icon">
                                    <span className="icon-healthcare"></span>
                                </div>
                                <h3 className="services-five__title"><Link href="health-insurance">Medical Insurance</Link>
                                </h3>
                                <Link href="health-insurance" className="services-five__arrow"><span
                                        className="icon-next"></span></Link>
                            </div>
                        </div>
                        {/* Services Five Single End */}
                        {/* Services Five Single Start */}
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className="services-five__single">
                                <div className="services-five__icon">
                                    <span className="icon-protection-1"></span>
                                </div>
                                <h3 className="services-five__title"><Link href="health-insurance">Health Insurance</Link>
                                </h3>
                                <Link href="health-insurance" className="services-five__arrow"><span
                                        className="icon-next"></span></Link>
                            </div>
                        </div>
                        {/* Services Five Single End */}
                        {/* Services Five Single Start */}
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className="services-five__single">
                                <div className="services-five__icon">
                                    <span className="icon-family-insurance"></span>
                                </div>
                                <h3 className="services-five__title"><Link href="family-insurance">Family Insurance</Link>
                                </h3>
                                <Link href="family-insurance" className="services-five__arrow"><span
                                        className="icon-next"></span></Link>
                            </div>
                        </div>
                        {/* Services Five Single End */}
                        {/* Services Five Single Start */}
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className="services-five__single">
                                <div className="services-five__icon">
                                    <span className="icon-wallet"></span>
                                </div>
                                <h3 className="services-five__title"><Link href="business-insurance">Business
                                        Insurance</Link>
                                </h3>
                                <Link href="business-insurance" className="services-five__arrow"><span
                                        className="icon-next"></span></Link>
                            </div>
                        </div>
                        {/* Services Five Single End */}
                    </div>
                </div>
            </div>
        </section>
        {/* Services Five End  */}

        </>
    )
}
