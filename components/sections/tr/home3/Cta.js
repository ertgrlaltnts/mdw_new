import Link from "next/link"
export default function Cta() {
    return (
        <>
            {/* CTA Two Start  */}
        <section className="cta-two">
            <div className="container">
                <div className="cta-two__inner">
                    <div className="cta-two__left">
                        <div className="cta-two__icon">
                            <span className="icon-support"></span>
                        </div>
                        <h3 className="cta-two__title">Don’t Hesitate, Contact us for Better Help
                            <br/> and Services. Please Contact us !</h3>
                    </div>
                    <div className="cta-two__btn-box">
                        <Link href="contact" className="cta-two__btn thm-btn">CONTACT US</Link>
                    </div>
                </div>
            </div>
        </section>
        {/* CTA Two End  */}
        </>
    )
}
