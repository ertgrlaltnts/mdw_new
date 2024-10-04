import Link from "next/link"
export default function Portfolio() {
    return (
        <>
            {/* Portfolio Three Start */}
        <section className="portfolio-three">
            <div className="portfolio-three__bg-box">
                <div className="portfolio-three__bg"
                    style={{ backgroundImage: 'url(assets/images/backgrounds/portfolio-three-bg.jpg)' }} ></div>
            </div>
            <div className="container">
                <div className="section-title text-center">
                    <div className="section-title__tagline-box">
                        <p className="section-title__tagline">OUR PORTFOLIO SHOWCASE</p>
                    </div>
                    <h2 className="section-title__title">Check Our Latest Project
                        <br/> We Have Done</h2>
                </div>
                <div className="row">
                    {/* Portfolio Three Single Start */}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="portfolio-three__single">
                            <div className="portfolio-three__img-box">
                                <div className="portfolio-three__img">
                                    <img src="assets/images/project/portfolio-3-1.jpg" alt=""/>
                                </div>
                                <div className="portfolio-three__content">
                                    <p className="portfolio-three__sub-title">Insurance</p>
                                    <h3 className="portfolio-three__title"><Link href="portfolio-details">Digital
                                            Insurance</Link></h3>
                                </div>
                                <div className="portfolio-three__arrow">
                                    <Link href="assets/images/project/portfolio-3-1.jpg" className="img-popup"><span
                                            className="icon-next"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Portfolio Three Single End */}
                    {/* Portfolio Three Single Start */}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="300ms">
                        <div className="portfolio-three__single">
                            <div className="portfolio-three__img-box">
                                <div className="portfolio-three__img">
                                    <img src="assets/images/project/portfolio-3-2.jpg" alt=""/>
                                </div>
                                <div className="portfolio-three__content">
                                    <p className="portfolio-three__sub-title">Insurance</p>
                                    <h3 className="portfolio-three__title"><Link href="portfolio-details">Annual
                                            Insurance</Link></h3>
                                </div>
                                <div className="portfolio-three__arrow">
                                    <Link href="assets/images/project/portfolio-3-2.jpg" className="img-popup"><span
                                            className="icon-next"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Portfolio Three Single End */}
                    {/* Portfolio Three Single Start */}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="600ms">
                        <div className="portfolio-three__single">
                            <div className="portfolio-three__img-box">
                                <div className="portfolio-three__img">
                                    <img src="assets/images/project/portfolio-3-3.jpg" alt=""/>
                                </div>
                                <div className="portfolio-three__content">
                                    <p className="portfolio-three__sub-title">Insurance</p>
                                    <h3 className="portfolio-three__title"><Link href="portfolio-details">Digital
                                            Insurance</Link></h3>
                                </div>
                                <div className="portfolio-three__arrow">
                                    <Link href="assets/images/project/portfolio-3-3.jpg" className="img-popup"><span
                                            className="icon-next"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Portfolio Three Single End */}
                    {/* Portfolio Three Single Start */}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="900ms">
                        <div className="portfolio-three__single">
                            <div className="portfolio-three__img-box">
                                <div className="portfolio-three__img">
                                    <img src="assets/images/project/portfolio-3-4.jpg" alt=""/>
                                </div>
                                <div className="portfolio-three__content">
                                    <p className="portfolio-three__sub-title">Insurance</p>
                                    <h3 className="portfolio-three__title"><Link href="portfolio-details">Digital
                                            Insurance</Link></h3>
                                </div>
                                <div className="portfolio-three__arrow">
                                    <Link href="assets/images/project/portfolio-3-4.jpg" className="img-popup"><span
                                            className="icon-next"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Portfolio Three Single End */}
                </div>
            </div>
        </section>
        {/* Portfolio Three End */}
        </>
    )
}
