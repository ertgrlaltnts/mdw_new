import Link from "next/link"
export default function Team() {
    return (
        <>
            {/* Team Two Start  */}
        <section className="team-two">
            <div className="team-two__bg-shape" style={{ backgroundImage: 'url(assets/images/shapes/team-two-bg-shape.jpg)' }} >
            </div>
            <div className="container">
                <div className="section-title text-center">
                    <div className="section-title__tagline-box">
                        <p className="section-title__tagline">OUR TEAM MEMBER</p>
                    </div>
                    <h2 className="section-title__title">Our Talented Team
                        <br/> Member Behind Sonchoy</h2>
                </div>
                <div className="row">
                    {/* Team Two Single Start */}
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="team-two__single">
                            <div className="team-two__img-box">
                                <div className="team-two__img">
                                    <img src="assets/images/team/team-2-1.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="team-two__content">
                                <h3 className="team-two__title"><Link href="team-details">William Hender</Link></h3>
                                <p className="team-two__sub-title">CEO of Company</p>
                                <div className="team-two__share-and-social">
                                    <div className="team-two__share">
                                        <Link href="team-details"><span className="icon-share"></span></Link>
                                    </div>
                                    <div className="team-two__social">
                                        <Link href="team-details"><span className="icon-google-plus-logo"></span></Link>
                                        <Link href="team-details"><span className="icon-vimeo"></span></Link>
                                        <Link href="team-details"><span className="icon-instagram-1"></span></Link>
                                        <Link href="team-details"><span className="icon-facebook"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Team Two Single End */}
                    {/* Team Two Single Start */}
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="300ms">
                        <div className="team-two__single">
                            <div className="team-two__img-box">
                                <div className="team-two__img">
                                    <img src="assets/images/team/team-2-2.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="team-two__content">
                                <h3 className="team-two__title"><Link href="team-details">Janes Cooper</Link></h3>
                                <p className="team-two__sub-title">Designer</p>
                                <div className="team-two__share-and-social">
                                    <div className="team-two__share">
                                        <Link href="team-details"><span className="icon-share"></span></Link>
                                    </div>
                                    <div className="team-two__social">
                                        <Link href="team-details"><span className="icon-google-plus-logo"></span></Link>
                                        <Link href="team-details"><span className="icon-vimeo"></span></Link>
                                        <Link href="team-details"><span className="icon-instagram-1"></span></Link>
                                        <Link href="team-details"><span className="icon-facebook"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Team Two Single End */}
                    {/* Team Two Single Start */}
                    <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="600ms">
                        <div className="team-two__single">
                            <div className="team-two__img-box">
                                <div className="team-two__img">
                                    <img src="assets/images/team/team-2-3.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="team-two__content">
                                <h3 className="team-two__title"><Link href="team-details">Jonas Blueyar</Link></h3>
                                <p className="team-two__sub-title">Insurance Manager</p>
                                <div className="team-two__share-and-social">
                                    <div className="team-two__share">
                                        <Link href="team-details"><span className="icon-share"></span></Link>
                                    </div>
                                    <div className="team-two__social">
                                        <Link href="team-details"><span className="icon-google-plus-logo"></span></Link>
                                        <Link href="team-details"><span className="icon-vimeo"></span></Link>
                                        <Link href="team-details"><span className="icon-instagram-1"></span></Link>
                                        <Link href="team-details"><span className="icon-facebook"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Team Two Single End */}
                </div>
            </div>
        </section>
        {/* Team Two End  */}
        </>
    )
}
