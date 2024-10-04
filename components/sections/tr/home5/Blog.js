import Link from "next/link"
export default function Blog() {
    return (
        <>
            {/* Blog One Start */}
        <section className="blog-one">
            <div className="container">
                <div className="section-title text-center">
                    <div className="section-title__tagline-box">
                        <p className="section-title__tagline">OUR LATEST BLOGS</p>
                    </div>
                    <h2 className="section-title__title">Read Our Latest Blog Post</h2>
                </div>
                <div className="row">
                    {/* BLog One Single Start */}
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="blog-one__single">
                            <div className="blog-one__img-box">
                                <div className="blog-one__img">
                                    <img src="assets/images/blog/blog-5-1.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="blog-one__content">
                                <div className="blog-one__tag">
                                    <span>Insurance</span>
                                    <span>Agency</span>
                                </div>
                                <h3 className="blog-one__title"><Link href="blog-details">How Get People to
                                        Like Travel Insurance.</Link></h3>
                                <div className="blog-one__client-info">
                                    <div className="blog-one__client-img">
                                        <img src="assets/images/blog/blog-one__client-img-1.jpg" alt=""/>
                                    </div>
                                    <div className="blog-one__client-content">
                                        <h3>Janes Cooper</h3>
                                        <p>August 3, 2023</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* BLog One Single End */}
                    {/* BLog One Single Start */}
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="300ms">
                        <div className="blog-one__single">
                            <div className="blog-one__img-box">
                                <div className="blog-one__img">
                                    <img src="assets/images/blog/blog-5-2.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="blog-one__content">
                                <div className="blog-one__tag">
                                    <span>Insurance</span>
                                    <span>Agency</span>
                                </div>
                                <h3 className="blog-one__title"><Link href="blog-details">Insurance Horizons
                                        Exploring the Offerings</Link></h3>
                                <div className="blog-one__client-info">
                                    <div className="blog-one__client-img">
                                        <img src="assets/images/blog/blog-one__client-img-2.jpg" alt=""/>
                                    </div>
                                    <div className="blog-one__client-content">
                                        <h3>Janes Cooper</h3>
                                        <p>August 3, 2023</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* BLog One Single End */}
                    {/* BLog One Single Start */}
                    <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="600ms">
                        <div className="blog-one__single">
                            <div className="blog-one__img-box">
                                <div className="blog-one__img">
                                    <img src="assets/images/blog/blog-5-3.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="blog-one__content">
                                <div className="blog-one__tag">
                                    <span>Insurance</span>
                                    <span>Agency</span>
                                </div>
                                <h3 className="blog-one__title"><Link href="blog-details">Safeguarding Futures
                                        The Passion Insurance</Link></h3>
                                <div className="blog-one__client-info">
                                    <div className="blog-one__client-img">
                                        <img src="assets/images/blog/blog-one__client-img-3.jpg" alt=""/>
                                    </div>
                                    <div className="blog-one__client-content">
                                        <h3>Janes Cooper</h3>
                                        <p>August 3, 2023</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* BLog One Single End */}
                </div>
            </div>
        </section>
        {/* Blog One End */}
        </>
    )
}
