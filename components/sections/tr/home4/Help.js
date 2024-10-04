import Link from "next/link"
export default function Help() {
    return (
        <>
            {/* Need Help Start  */}
        <section className="need-help">
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-3">
                        <div className="need-help__left">
                            <div className="need-help__experience">
                                <div className="need-help__experience-shape-1">
                                    <img src="assets/images/shapes/need-help-experience-shape-1.png" alt=""/>
                                </div>
                                <div className="need-help__count count-box">
                                    <h3> 12 </h3>
                                </div>
                                <p>Years of Experience</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-9 col-lg-9">
                        <div className="need-help__right">
                            <div className="need-help__insurance">
                                <div className="need-help__insurance-shape-1"></div>
                                <div className="need-help__insurance-shape-2"></div>
                                <div className="need-help__insurance-shape-3"></div>
                                <div className="need-help__insurance-shape-4">
                                    <img src="assets/images/shapes/need-help-insurance-shape-4.png" alt=""/>
                                </div>
                                <div className="need-help__insurance-title-box">
                                    <p>Do you need</p>
                                    <h4>Insurance Policy</h4>
                                </div>
                                <div className="need-help__insurance-contact">
                                    <p>Call us for free</p>
                                    <Link href="tel:+19993452577">+1 (999) 345 2577</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Need Help End  */}

        </>
    )
}
