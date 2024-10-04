

import Link from "next/link"
export default function Services() {
    return (
        <>
        {/* Services Three Start  */}
        <section className="services-three">
            <div className="services-three__shape-2">
                <img src="assets/images/shapes/services-three-shape-2.png" alt=""/>
            </div>
            <div className="services-three__shape-3 float-bob-x">
                <img src="assets/images/shapes/services-three-shape-3.png" alt=""/>
            </div>
            <div className="container">
                <div className="section-title text-center">
                    <div className="section-title__tagline-box">
                        <p className="section-title__tagline">SONCHOY POPULAR SERVICE</p>
                    </div>
                    <h2 className="section-title__title">The fields on Which We have
                        <br/> Given Our Servies</h2>
                </div>
                <div className="row">
                    {/* Services Three Single Start */}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="services-three__single">
                            <div className="services-three__shape-1">
                                <img src="assets/images/shapes/services-three-shape-1.png" alt=""/>
                            </div>
                            <div className="services-three__img-box">
                                <div className="services-three__img">
                                    <img src="assets/images/services/services-3-1.jpg" alt=""/>
                                </div>
                                <div className="services-three__icon">
                                    <span className="icon-badge"></span>
                                </div>
                            </div>
                            <div className="services-three__content">
                                <h3 className="services-three__title"><Link href="life-insurance">Life Insurance</Link>
                                </h3>
                                <p className="services-three__text">Nullam eu nibh vitae est tempo
                                    molestie id sed ex. Quisque</p>
                                <div className="services-three__btn-box">
                                    <Link href="life-insurance" className="services-three__btn thm-btn">READ MORE</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Services Three Single End */}
                    {/* Services Three Single Start */}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="300ms">
                        <div className="services-three__single">
                            <div className="services-three__shape-1">
                                <img src="assets/images/shapes/services-three-shape-1.png" alt=""/>
                            </div>
                            <div className="services-three__img-box">
                                <div className="services-three__img">
                                    <img src="assets/images/services/services-3-2.jpg" alt=""/>
                                </div>
                                <div className="services-three__icon">
                                    <span className="icon-badge"></span>
                                </div>
                            </div>
                            <div className="services-three__content">
                                <h3 className="services-three__title"><Link href="home-insurance">Home Insurance</Link>
                                </h3>
                                <p className="services-three__text">Nullam eu nibh vitae est tempo
                                    molestie id sed ex. Quisque</p>
                                <div className="services-three__btn-box">
                                    <Link href="home-insurance" className="services-three__btn thm-btn">READ MORE</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Services Three Single End */}
                    {/* Services Three Single Start */}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="600ms">
                        <div className="services-three__single">
                            <div className="services-three__shape-1">
                                <img src="assets/images/shapes/services-three-shape-1.png" alt=""/>
                            </div>
                            <div className="services-three__img-box">
                                <div className="services-three__img">
                                    <img src="assets/images/services/services-3-3.jpg" alt=""/>
                                </div>
                                <div className="services-three__icon">
                                    <span className="icon-badge"></span>
                                </div>
                            </div>
                            <div className="services-three__content">
                                <h3 className="services-three__title"><Link href="health-insurance">Medical Insurance</Link>
                                </h3>
                                <p className="services-three__text">Nullam eu nibh vitae est tempo
                                    molestie id sed ex. Quisque</p>
                                <div className="services-three__btn-box">
                                    <Link href="health-insurance" className="services-three__btn thm-btn">READ MORE</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Services Three Single End */}
                    {/* Services Three Single Start */}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="900ms">
                        <div className="services-three__single">
                            <div className="services-three__shape-1">
                                <img src="assets/images/shapes/services-three-shape-1.png" alt=""/>
                            </div>
                            <div className="services-three__img-box">
                                <div className="services-three__img">
                                    <img src="assets/images/services/services-3-4.jpg" alt=""/>
                                </div>
                                <div className="services-three__icon">
                                    <span className="icon-badge"></span>
                                </div>
                            </div>
                            <div className="services-three__content">
                                <h3 className="services-three__title"><Link href="car-insurance">Car Insurance</Link>
                                </h3>
                                <p className="services-three__text">Nullam eu nibh vitae est tempo
                                    molestie id sed ex. Quisque</p>
                                <div className="services-three__btn-box">
                                    <Link href="car-insurance" className="services-three__btn thm-btn">READ MORE</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Services Three Single End */}
                </div>
            </div>
        </section>
        {/* Services Three End  */}
        </>
    )
}
