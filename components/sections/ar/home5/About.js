import Link from "next/link"
export default function About() {
    return (
        <>
        {/* About Five Start  */}
        <section className="about-five">
            <div className="about-five__shape-1 img-bounce">
                <img src="assets/images/shapes/about-five-shape-1.png" alt=""/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="about-five__left">
                            <div className="about-five__img-box  wow slideInLeft" data-wow-delay="100ms"
                                data-wow-duration="2500ms">
                                <div className="about-five__img">
                                    <img src="assets/images/resources/about-five-img-1.jpg" alt=""/>
                                </div>
                                <div className="about-five__count-box">
                                    <div className="about-five__count count-box">
                                        <h3> 24 </h3>
                                    </div>
                                    <p>YEARS
                                        <br/> WORKIGN
                                        <br/> EXPERIENCE</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="about-five__right">
                            <h3 className="about-five__tilte">We’re Here to
                                <br/> Assist With Protection.</h3>
                            <p className="about-five__text">Arki features minimal and stylish design. The theme is well
                                crafted for all the modern architect and interior design website. With Arki, it makes
                                your website look even more attractive and impressive to</p>
                            <ul className="about-five__progress-list list-unstyled">
                                <li>
                                    <div className="progress-levels">
                                        {/* Skill Box */}
                                        <div className="progress-box">
                                            <div className="inner count-box">
                                                <div className="text">Insurance</div>
                                                <div className="bar">
                                                    <div className="bar-innner">
                                                        <div className="skill-percent">
                                                            <span className="count-text" data-speed="3000"
                                                                data-stop="80">90</span>
                                                            <span className="percent">%</span>
                                                        </div>
                                                        <div className="bar-fill" data-percent="80" style={{ width: '80%' }} ></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="progress-levels">
                                        {/* Skill Box */}
                                        <div className="progress-box">
                                            <div className="inner count-box">
                                                <div className="text">Policy Idea</div>
                                                <div className="bar">
                                                    <div className="bar-innner">
                                                        <div className="skill-percent">
                                                            <span className="count-text" data-speed="3000"
                                                                data-stop="90">90</span>
                                                            <span className="percent">%</span>
                                                        </div>
                                                        <div className="bar-fill" data-percent="90" style={{ width: '90%' }} ></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div className="about-five__btn-and-author">
                                <div className="about-five__btn-box">
                                    <Link href="about" className="about-five__btn thm-btn">Discover More</Link>
                                </div>
                                <div className="about-five__author-img">
                                    <img src="assets/images/resources/about-five-author-img.jpg" alt=""/>
                                    <div className="about-five__author-sign">
                                        <img src="assets/images/resources/about-five-author-sign.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="about-five__bottom-text">
                                <p>Do you have any project on mind? Call Us:<Link href="tel:+123456789"> +123 456789</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* About Five End  */}
        </>
    )
}
