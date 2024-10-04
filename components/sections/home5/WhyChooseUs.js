
import Link from "next/link"
export default function WhyChooseUs() {
    return (
        <>
            {/* Why Choose Four Start  */}
        <section className="why-choose-four">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="why-choose-four__left">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6">
                                    <div className="why-choose-four__img-1">
                                        <img src="assets/images/resources/why-choose-four-img-1.jpg" alt=""/>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6">
                                    <div className="why-choose-four__img-2">
                                        <img src="assets/images/resources/why-choose-four-img-2.jpg" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="why-choose-four__right">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <p className="section-title__tagline">WHY CHOOSE SONCHOY</p>
                                </div>
                                <h2 className="section-title__title">What Makes Us
                                    <br/> Different From Others</h2>
                            </div>
                            <p className="why-choose-four__text">Nullam eu nibh vitae est tempor molestie id sed ex. Quisque
                                dignissim maximus ipsum, sed rutrum metus tincidunt et. Sed eget tincidunt
                                ipsum. Eget tincidunt</p>
                            <ul className="why-choose-four__points list-unstyled">
                                <li>
                                    <div className="why-choose-four__icon">
                                        <span className="icon-save-money"></span>
                                    </div>
                                    <h3 className="why-choose-four__title"><Link href="about">Save Your
                                            <br/> Money</Link></h3>
                                    <Link href="about" className="why-choose-four__arrow"><span
                                            className="icon-next"></span></Link>
                                </li>
                                <li>
                                    <div className="why-choose-four__icon">
                                        <span className="icon-creation"></span>
                                    </div>
                                    <h3 className="why-choose-four__title"><Link href="about">Easy & Fast
                                            <br/> Process</Link></h3>
                                    <Link href="about" className="why-choose-four__arrow"><span
                                            className="icon-next"></span></Link>
                                </li>
                                <li>
                                    <div className="why-choose-four__icon">
                                        <span className="icon-file-1"></span>
                                    </div>
                                    <h3 className="why-choose-four__title"><Link href="about">Control Over
                                            <br/> Policy</Link></h3>
                                    <Link href="about" className="why-choose-four__arrow"><span
                                            className="icon-next"></span></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Why Choose Four End  */}
        </>
    )
}
