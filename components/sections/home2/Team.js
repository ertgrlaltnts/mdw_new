import Link from "next/link"
export default function Team() {
    return (
        <>
            {/* Team One Start  */}
                <section className="team-one">
                    <div className="container">
                        <div className="section-title text-center">
                            <div className="section-title__tagline-box">
                                <p className="section-title__tagline">OUR TEAM MEMBER</p>
                            </div>
                            <h2 className="section-title__title">Our Talented Team
                                <br/> Member Behind Sonchoy</h2>
                        </div>
                        <div className="row">
                            {/* Team One Single Start */}
                            <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
                                <div className="team-one__single">
                                    <div className="team-one__img-box">
                                        <div className="team-one__img">
                                            <img src="assets/images/team/team-1-1.jpg" alt=""/>
                                        </div>
                                    </div>
                                    <div className="team-one__content">
                                        <div className="team-one__name-box">
                                            <h3 className="team-one__name"><Link href="team-details">Saiful Islam</Link></h3>
                                            <p className="team-one__sub-title">Developer</p>
                                        </div>
                                        <div className="team-one__share-and-social">
                                            <div className="team-one__share">
                                                <Link href="team-details"><span className="icon-share"></span></Link>
                                            </div>
                                            <div className="team-one__social">
                                                <Link href="team-details"><span className="icon-linkedin"></span></Link>
                                                <Link href="team-details"><span className="icon-instagram"></span></Link>
                                                <Link href="team-details"><span className="icon-facebook-app-symbol"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Team One Single End */}
                            {/* Team One Single Start */}
                            <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="300ms">
                                <div className="team-one__single">
                                    <div className="team-one__img-box">
                                        <div className="team-one__img">
                                            <img src="assets/images/team/team-1-2.jpg" alt=""/>
                                        </div>
                                    </div>
                                    <div className="team-one__content">
                                        <div className="team-one__name-box">
                                            <h3 className="team-one__name"><Link href="team-details">Janes Cooper</Link></h3>
                                            <p className="team-one__sub-title">Designer</p>
                                        </div>
                                        <div className="team-one__share-and-social">
                                            <div className="team-one__share">
                                                <Link href="team-details"><span className="icon-share"></span></Link>
                                            </div>
                                            <div className="team-one__social">
                                                <Link href="team-details"><span className="icon-linkedin"></span></Link>
                                                <Link href="team-details"><span className="icon-instagram"></span></Link>
                                                <Link href="team-details"><span className="icon-facebook-app-symbol"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Team One Single End */}
                            {/* Team One Single Start */}
                            <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="600ms">
                                <div className="team-one__single">
                                    <div className="team-one__img-box">
                                        <div className="team-one__img">
                                            <img src="assets/images/team/team-1-3.jpg" alt=""/>
                                        </div>
                                    </div>
                                    <div className="team-one__content">
                                        <div className="team-one__name-box">
                                            <h3 className="team-one__name"><Link href="team-details">James Bond</Link></h3>
                                            <p className="team-one__sub-title">Creator</p>
                                        </div>
                                        <div className="team-one__share-and-social">
                                            <div className="team-one__share">
                                                <Link href="team-details"><span className="icon-share"></span></Link>
                                            </div>
                                            <div className="team-one__social">
                                                <Link href="team-details"><span className="icon-linkedin"></span></Link>
                                                <Link href="team-details"><span className="icon-instagram"></span></Link>
                                                <Link href="team-details"><span className="icon-facebook-app-symbol"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Team One Single End */}
                        </div>
                    </div>
                </section>
            {/* Team One End  */}
        </>
    )
}
