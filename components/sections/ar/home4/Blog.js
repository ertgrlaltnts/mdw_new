import Link from "next/link"
export default function Blog() {
    return (
        <>
            {/* Blog Four Start  */}
        <section className="blog-four">
            <div className="container">
                <div className="section-title text-center">
                    <div className="section-title__tagline-box">
                        <p className="section-title__tagline">OUR LATEST BLOGS</p>
                    </div>
                    <h2 className="section-title__title">Read Our Latest Blog Post</h2>
                </div>
                <div className="row">
                    {/* Blog Four Single Start */}
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="blog-four__single">
                            <div className="blog-four__img-box">
                                <div className="blog-four__img">
                                    <img src="assets/images/blog/blog-4-1.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="blog-four__content">
                                <div className="blog-four__tag-and-date">
                                    <div className="blog-four__tag">
                                        <p>insurance</p>
                                    </div>
                                    <div className="blog-four__date">
                                        <span>August 3, 2023</span>
                                    </div>
                                </div>
                                <h3 className="blog-four__title"><Link href="blog-details">Insurance Horizons
                                        Exploring the Offerings</Link></h3>
                                <div className="blog-four__btn-box">
                                    <Link href="blog-details" className="blog-four__btn thm-btn">READ MORE</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Blog Four Single End */}
                    {/* Blog Four Single Start */}
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="300ms">
                        <div className="blog-four__single">
                            <div className="blog-four__img-box">
                                <div className="blog-four__img">
                                    <img src="assets/images/blog/blog-4-2.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="blog-four__content">
                                <div className="blog-four__tag-and-date">
                                    <div className="blog-four__tag">
                                        <p>insurance</p>
                                    </div>
                                    <div className="blog-four__date">
                                        <span>August 3, 2023</span>
                                    </div>
                                </div>
                                <h3 className="blog-four__title"><Link href="blog-details">Through a unique
                                        construction design</Link></h3>
                                <div className="blog-four__btn-box">
                                    <Link href="blog-details" className="blog-four__btn thm-btn">READ MORE</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Blog Four Single End */}
                    {/* Blog Four Single Start */}
                    <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="600ms">
                        <div className="blog-four__single">
                            <div className="blog-four__img-box">
                                <div className="blog-four__img">
                                    <img src="assets/images/blog/blog-4-3.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="blog-four__content">
                                <div className="blog-four__tag-and-date">
                                    <div className="blog-four__tag">
                                        <p>insurance</p>
                                    </div>
                                    <div className="blog-four__date">
                                        <span>August 3, 2023</span>
                                    </div>
                                </div>
                                <h3 className="blog-four__title"><Link href="blog-details">Amazing Products
                                        that Protect and reward</Link></h3>
                                <div className="blog-four__btn-box">
                                    <Link href="blog-details" className="blog-four__btn thm-btn">READ MORE</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Blog Four Single End */}
                </div>
            </div>
        </section>
        {/* Blog Four End  */}
        </>
    )
}
