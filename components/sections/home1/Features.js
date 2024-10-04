import Link from "next/link"
export default function Features() {
    return (
        <>
            <section className="features-section">
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <h2>Developing leaders &amp; <br /> High-performance creative teams</h2>
                        <div className="text-decoration">
                            <span className="left" />
                            <span className="right" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 feature-block-one wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="image">
                                    <div className="icon"><span className="flaticon-career" /></div>
                                    <img className="lazy-image owl-lazy" src="/assets/images/resource/image-1.jpg" alt="" />
                                </div>
                                <div className="content">
                                    <h5>Explore</h5>
                                    <h4>Our Company History</h4>
                                </div>
                                <div className="overlay">
                                    <div className="content">
                                        <h5>Explore</h5>
                                        <h4>Our Company History</h4>
                                    </div>
                                    <div className="text" style={{ backgroundImage: 'url(assets/images/resource/image-1.jpg)' }}>
                                        <p>In a free hour when our power choices when proveprevents best all easy to distinguish.</p>
                                        <div className="link-btn"><Link href="#"><i className="flaticon-right-arrow" /></Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 feature-block-one wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="image">
                                    <div className="icon"><span className="flaticon-question" /></div>
                                    <img className="lazy-image owl-lazy" src="/assets/images/resource/image-2.jpg" alt="" />
                                </div>
                                <div className="content">
                                    <h5>Knowledge</h5>
                                    <h4>Smart self services</h4>
                                </div>
                                <div className="overlay">
                                    <div className="content">
                                        <h5>Knowledge</h5>
                                        <h4>Smart self services</h4>
                                    </div>
                                    <div className="text" style={{ backgroundImage: 'url(assets/images/resource/image-1.jpg)' }}>
                                        <p>In a free hour when our power choices when proveprevents best all easy to distinguish.</p>
                                        <div className="link-btn"><Link href="#"><i className="flaticon-right-arrow" /></Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 feature-block-one wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="image">
                                    <div className="icon"><span className="flaticon-customer-service" /></div>
                                    <img className="lazy-image owl-lazy" src="/assets/images/resource/image-3.jpg" alt="" />
                                </div>
                                <div className="content">
                                    <h5>Connect</h5>
                                    <h4>Integrated Support</h4>
                                </div>
                                <div className="overlay">
                                    <div className="content">
                                        <h5>Connect</h5>
                                        <h4>Integrated Support</h4>
                                    </div>
                                    <div className="text" style={{ backgroundImage: 'url(assets/images/resource/image-1.jpg)' }}>
                                        <p>In a free hour when our power choices when proveprevents best all easy to distinguish.</p>
                                        <div className="link-btn"><Link href="#"><i className="flaticon-right-arrow" /></Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-content text-center">
                        <div className="text">We help take your small business to the next level. Don’t hesitate to contact us.</div>
                        <h3>30 Minutes Free Consultation</h3>
                        <div className="link-btn"><Link href="#" className="theme-btn btn-style-two"><span className="btn-title">Send request</span></Link></div>
                    </div>
                </div>
            </section>
        </>
    )
}
