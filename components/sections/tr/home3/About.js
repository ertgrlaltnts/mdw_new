import Link from "next/link"
export default function About() {
    return (
        <>
        {/* About Three Start  */}
        <section className="about-three">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5">
                        <div className="about-three__left">
                            <div className="about-three__img-box  wow slideInLeft" data-wow-delay="100ms"
                                data-wow-duration="2500ms">
                                <div className="about-three__img">
                                    <img src="assets/images/resources/about-three-img-1.jpg" alt=""/>
                                </div>
                                <div className="about-three__img-2">
                                    <img src="assets/images/resources/about-three-img-2.jpg" alt=""/>
                                </div>
                                <div className="about-three__img-3">
                                    <img src="assets/images/resources/about-three-img-3.jpg" alt=""/>
                                </div>
                                <div className="about-three__shape-1">
                                    <img src="assets/images/shapes/about-three-shape-1.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7">
                        <div className="about-three__right">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <p className="section-title__tagline">KNOW ABOUT SONCHOY</p>
                                </div>
                                <h2 className="section-title__title">Get Insurence Solution
                                    <br/> With Our Experts</h2>
                            </div>
                            <p className="about-three__text">Arki features minimal and stylish design. The theme is well
                                crafted for all the modern architect and interior design website. With Arki, it makes
                                your website look even more attractive and impressive to</p>
                            <div className="about-three__award-box">
                                <div className="icon">
                                    <span className="icon-trophy"></span>
                                </div>
                                <div className="content">
                                    <h3>Award Winning</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                        <br/> sed eiustempor incididunt ut labore et dolore magna
                                        <br/> aliqua. Quis ipsum suspendisse</p>
                                </div>
                            </div>
                            <div className="about-three__progress">
                                <h4 className="about-three__progress-title">Service Expereince</h4>
                                <div className="bar">
                                    <div className="bar-inner count-bar" style={{ width: '90%' }} >
                                        <div className="count-text">90%</div>
                                    </div>
                                </div>
                            </div>
                            <div className="about-three__btn-and-client">
                                <div className="about-three__btn-box">
                                    <Link href="about" className="about-three__btn thm-btn">Discover More</Link>
                                </div>
                                <div className="about-three__client-img">
                                    <img src="assets/images/resources/about-three-client-img.jpg" alt=""/>
                                    <div className="about-three__client-signature">
                                        <img src="assets/images/shapes/about-three-client-signature.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* About Three End  */}
        </>
    )
}
