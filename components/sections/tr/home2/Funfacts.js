import CounterUp from "@/components/elements/CounterUp"


export default function Funfacts() {
    return (
        <>

        {/* Counter One Start  */}
        <section className="counter-one">
            <div className="container">
                <div className="counter-one__inner">
                    <ul className="counter-one__count-list list-unstyled">
                        <li className="wow fadeInLeft" data-wow-delay="100ms">
                            <div className="counter-one__icon">
                                <span className="icon-team"></span>
                            </div>
                            <div className="counter-one__count count-box">
                            <CounterUp end={250} />
                                <span>+</span>
                            </div>
                            <p className="counter-one__text">Active Team Members</p>
                        </li>
                        <li className="wow fadeInLeft" data-wow-delay="300ms">
                            <div className="counter-one__icon">
                                <span className="icon-insurance"></span>
                            </div>
                            <div className="counter-one__count count-box">
                            <CounterUp end={90} />
                                <span>+</span>
                            </div>
                            <p className="counter-one__text">Give Insurance</p>
                        </li>
                        <li className="wow fadeInRight" data-wow-delay="600ms">
                            <div className="counter-one__icon">
                                <span className="icon-rating"></span>
                            </div>
                            <div className="counter-one__count count-box">
                            <CounterUp end={2.56} />
                                <span>k</span>
                            </div>
                            <p className="counter-one__text">Satisfied Customers</p>
                        </li>
                        <li className="wow fadeInRight" data-wow-delay="900ms">
                            <div className="counter-one__icon">
                                <span className="icon-team"></span>
                            </div>
                            <div className="counter-one__count count-box">
                            <CounterUp end={99} />
                                <span>%</span>
                            </div>
                            <p className="counter-one__text">Awards Winning</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        {/* Counter One End  */}
            

        </>
    )
}
