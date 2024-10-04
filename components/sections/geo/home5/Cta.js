import Link from "next/link"
export default function Cta() {
    return (
        <>
           {/* CTA Four Start  */}
        <section className="cta-four">
            <div className="cta-four__bg" style={{ backgroundImage: 'url(assets/images/backgrounds/cta-four-bg.jpg)' }} ></div>
            <div className="container">
                <div className="cta-four__inner">
                    <h3 className="cta-four__title">Have an Idea in Your Mind</h3>
                    <p className="cta-four__sub-title">Don’t Hesitate to Say Hello</p>
                    <div className="cta-four__btn-box">
                        <Link href="contact" className="cta-four__btn thm-btn">LET’S TALK WITH US</Link>
                    </div>
                </div>
            </div>
        </section>
        {/* CTA Four End  */}
        </>
    )
}
