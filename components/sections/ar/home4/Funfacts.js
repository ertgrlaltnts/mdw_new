import CounterUp from "@/components/elements/CounterUp"
export default function Funfacts() {
    return (
        <>


        {/* Counter One Start  */}
        <section className="counter-one counter-three">
            <div className="counter-one__shape-1 float-bob-x">
                <img src="assets/images/shapes/counter-two-shape-1.png" alt=""/>
            </div>
            <div className="counter-one__shape-2 float-bob-y">
                <img src="assets/images/shapes/counter-two-shape-2.png" alt=""/>
            </div>
            <div className="counter-one__shape-3 float-bob-x">
                <img src="assets/images/shapes/counter-two-shape-3.png" alt=""/>
            </div>
            <div className="counter-one__shape-4 float-bob-y">
                <img src="assets/images/shapes/counter-two-shape-4.png" alt=""/>
            </div>
            <div className="counter-one__shape-5 img-bounce">
                <img src="assets/images/shapes/counter-two-shape-5.png" alt=""/>
            </div>
            <div className="counter-one__shape-6 float-bob-y">
                <img src="assets/images/shapes/counter-two-shape-6.png" alt=""/>
            </div>
            <div className="counter-one__shape-7 float-bob-x">
                <img src="assets/images/shapes/counter-two-shape-7.png" alt=""/>
            </div>
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
                        <li className="wow fadeInUp" data-wow-delay="200ms">
                            <div className="counter-one__icon">
                                <span className="icon-insurance"></span>
                            </div>
                            <div className="counter-one__count count-box">
                            <CounterUp end={90} />
                                <span>+</span>
                            </div>
                            <p className="counter-one__text">Give Insurance</p>
                        </li>
                        <li className="wow fadeInDown" data-wow-delay="300ms">
                            <div className="counter-one__icon">
                                <span className="icon-rating"></span>
                            </div>
                            <div className="counter-one__count count-box">
                            <CounterUp end={2.56} />
                                <span>k</span>
                            </div>
                            <p className="counter-one__text">Satisfied Customers</p>
                        </li>
                        <li className="wow fadeInRight" data-wow-delay="400ms">
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
