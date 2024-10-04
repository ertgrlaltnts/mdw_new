import Link from "next/link"
export default function Account() {
    return (
        <>
        {/*  Open Account Start  */}
        <section className="open-account">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="open-account__left">
                            <div className="open-account__img-box">
                                <div className="open-account__shape-1 float-bob-x">
                                    <img src="assets/images/shapes/open-account-shape-1.png" alt=""/>
                                </div>
                                <div className="open-account__img">
                                    <img src="assets/images/resources/open-account-img-1.png" alt=""/>
                                </div>
                                <div className="open-account__quick-box">
                                    <div className="open-account__quick-icon">
                                        <span className="icon-check"></span>
                                    </div>
                                    <h4 className="open-account__quick-text">Quick, Easy and
                                        <br/> Hassle Free</h4>
                                </div>
                                <div className="open-account__policy">
                                    <div className="open-account__policy-icon">
                                        <span className="icon-check"></span>
                                    </div>
                                    <h4 className="open-account__policy-text">Save up to 50% in
                                        <br/> Our all Policy</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="open-account__right">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <p className="section-title__tagline">OPEN AN ACCOUNT</p>
                                </div>
                                <h2 className="section-title__title">Let’s Get Started
                                    <br/> With Us for Updates</h2>
                            </div>
                            <ul className="open-account__list list-unstyled">
                                <li>
                                    <div className="open-account__count"></div>
                                    <h3>Sign Up in a Few Minutes</h3>
                                </li>
                                <li>
                                    <div className="open-account__count"></div>
                                    <h3>Let Us Verify Your Identity</h3>
                                </li>
                                <li>
                                    <div className="open-account__count"></div>
                                    <h3>Your Account is Open; You Can Send
                                        <br/> Your First Payment</h3>
                                </li>
                            </ul>
                            <div className="open-account__btn-box">
                                <Link href="contact" className="open-account__btn thm-btn">open an account</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*  Open Account End  */}

        </>
    )
}
