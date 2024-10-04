import Link from "next/link"


export default function Cta() {
    return (
        <>
            <section className="cta-section pb-0">
                <div className="auto-container">
                    <div className="row">
                        <div className="col-lg-5 image-column">
                            <div className="image">
                                <img src="/assets/images/resource/image-2.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-7 content-column">
                            <div className="sec-title text-center">
                                <h2>Any time, any where consulting!..</h2>
                                <div className="text">Foresee the pain and trouble that are bound to ensue; and equal blame <br />which is the same as saying through shrinking.</div>
                                <div className="text-decoration">
                                    <span className="left" />
                                    <span className="right" />
                                </div>
                            </div>
                            <div className="image"><img src="/assets/images/resource/mockup-1.png" alt="" /></div>
                            <div className="bottom-content text-center">
                                <div className="link-btn">
                                    <Link href="#" className="theme-btn btn-style-two"><span className="btn-title"><i className="flaticon-playstore" />Google Play</span></Link>
                                    <Link href="#" className="theme-btn btn-style-one"><span className="btn-title"><i className="flaticon-app" />Apple Store</span></Link>
                                </div>
                                <div className="hint">Privacy policy, Terms &amp; conditions</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
