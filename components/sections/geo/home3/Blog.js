
import Link from "next/link"
export default function Blog() {
    return (
        <>
        {/* Blog Two Start  */}
        <section className="blog-two blog-three">
            <div className="container">
                <div className="section-title text-center">
                    <div className="section-title__tagline-box">
                        <p className="section-title__tagline">OUR LATEST BLOGS</p>
                    </div>
                    <h2 className="section-title__title">Read Our Latest Blog Post</h2>
                </div>
                <div className="row">
                    {/* Blog Two Single Start */}
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="blog-two__single">
                            <div className="blog-two__img-box">
                                <div className="blog-two__img">
                                    <img src="assets/images/blog/blog-3-1.jpg" alt=""/>
                                </div>
                                <div className="blog-two__date">
                                    <p><span>25</span><br/>DEC</p>
                                </div>
                            </div>
                            <div className="blog-two__content">
                                <h3 className="blog-two__title"><Link href="blog-details">Insurance Horizons
                                        Exploring the Offerings</Link></h3>
                                <p className="blog-two__text">Start a fast, free auto insurance qu with Alico. We help you
                                    find any insurance coverages that are right</p>
                                <div className="blog-two__btn-box">
                                    <Link href="blog-details" className="blog-two__btn thm-btn">READ MORE</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Blog Two Single End */}
                    {/* Blog Two Single Start */}
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="300ms">
                        <div className="blog-two__single">
                            <div className="blog-two__img-box">
                                <div className="blog-two__img">
                                    <img src="assets/images/blog/blog-3-2.jpg" alt=""/>
                                </div>
                                <div className="blog-two__date">
                                    <p><span>25</span><br/>DEC</p>
                                </div>
                            </div>
                            <div className="blog-two__content">
                                <h3 className="blog-two__title"><Link href="blog-details">insurance coverages that are
                                        right</Link></h3>
                                <p className="blog-two__text">Start a fast, free auto insurance qu with Alico. We help you
                                    find any insurance coverages that are right</p>
                                <div className="blog-two__btn-box">
                                    <Link href="blog-details" className="blog-two__btn thm-btn">READ MORE</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Blog Two Single End */}
                    {/* Blog Two Single Start */}
                    <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="600ms">
                        <div className="blog-two__single">
                            <div className="blog-two__img-box">
                                <div className="blog-two__img">
                                    <img src="assets/images/blog/blog-3-3.jpg" alt=""/>
                                </div>
                                <div className="blog-two__date">
                                    <p><span>25</span><br/>DEC</p>
                                </div>
                            </div>
                            <div className="blog-two__content">
                                <h3 className="blog-two__title"><Link href="blog-details">We help you find any
                                        Insurance</Link></h3>
                                <p className="blog-two__text">Start a fast, free auto insurance qu with Alico. We help you
                                    find any insurance coverages that are right</p>
                                <div className="blog-two__btn-box">
                                    <Link href="blog-details" className="blog-two__btn thm-btn">READ MORE</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Blog Two Single End */}
                </div>
            </div>
        </section>
        {/* Blog Two End  */}
        </>
    )
}
