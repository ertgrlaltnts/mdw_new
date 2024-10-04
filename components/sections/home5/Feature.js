import Link from "next/link"
export default function Feature() {
    return (
        <>
        {/* Feature Three Start  */}
        <section className="feature-three">
            <div className="container">
                <div className="row">
                    {/* Feature Three Single Start */}
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="feature-three__single">
                            <div className="feature-three__icon">
                                <span className="icon-protection"></span>
                            </div>
                            <div className="feature-three__content">
                                <p className="feature-three__sub-title">Insurance Agency</p>
                                <h3 className="feature-three__title"><Link href="about">First & Reliable</Link></h3>
                                <Link href="about" className="feature-three__read-more">READ MORE<span
                                        className="icon-next"></span></Link>
                            </div>
                        </div>
                    </div>
                    {/* Feature Three Single End */}
                    {/* Feature Three Single Start */}
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="300ms">
                        <div className="feature-three__single">
                            <div className="feature-three__icon">
                                <span className="icon-investment"></span>
                            </div>
                            <div className="feature-three__content">
                                <p className="feature-three__sub-title">Insurance Agency</p>
                                <h3 className="feature-three__title"><Link href="about">Invest Your Money</Link></h3>
                                <Link href="about" className="feature-three__read-more">READ MORE<span
                                        className="icon-next"></span></Link>
                            </div>
                        </div>
                    </div>
                    {/* Feature Three Single End */}
                    {/* Feature Three Single Start */}
                    <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="600ms">
                        <div className="feature-three__single">
                            <div className="feature-three__icon">
                                <span className="icon-risk-management"></span>
                            </div>
                            <div className="feature-three__content">
                                <p className="feature-three__sub-title">Insurance Agency</p>
                                <h3 className="feature-three__title"><Link href="about">Get Your Quote</Link></h3>
                                <Link href="about" className="feature-three__read-more">READ MORE<span
                                        className="icon-next"></span></Link>
                            </div>
                        </div>
                    </div>
                    {/* Feature Three Single End */}
                </div>
            </div>
        </section>
        {/* Feature Three End  */}
        </>
    )
}
