import CounterUp from "@/components/elements/CounterUp"
export default function Funfacts() {
    return (
        <>


        {/* Counter Four Start  */}
        <section className="counter-four">
            <div className="container">
                <div className="row">
                    {/* Counter Four Single Start */}
                    <div className="col-xl-3 col-lg-6 col-md-6">
                        <div className="counter-four__single">
                            <div className="counter-four__shape-1">
                                <img src="assets/images/shapes/counter-four-shape-1.png" alt=""/>
                            </div>
                            <div className="counter-four__count count-box">
                                <CounterUp end={250} />
                                <span className="counter-four__plus">+</span>
                            </div>
                            <p className="counter-four__text">Active Team Members</p>
                        </div>
                    </div>
                    {/* Counter Four Single End */}
                    {/* Counter Four Single Start */}
                    <div className="col-xl-3 col-lg-6 col-md-6">
                        <div className="counter-four__single">
                            <div className="counter-four__shape-1">
                                <img src="assets/images/shapes/counter-four-shape-1.png" alt=""/>
                            </div>
                            <div className="counter-four__count count-box">
                                <CounterUp end={45} />
                                <span className="counter-four__plus">k</span>
                                <span className="counter-four__plus">+</span>
                            </div>
                            <p className="counter-four__text">Happy Customers</p>
                        </div>
                    </div>
                    {/* Counter Four Single End */}
                    {/* Counter Four Single Start */}
                    <div className="col-xl-3 col-lg-6 col-md-6">
                        <div className="counter-four__single">
                            <div className="counter-four__shape-1">
                                <img src="assets/images/shapes/counter-four-shape-1.png" alt=""/>
                            </div>
                            <div className="counter-four__count count-box">
                                <CounterUp end={80} />
                                <span className="counter-four__plus">%</span>
                            </div>
                            <p className="counter-four__text">Increase Traffics</p>
                        </div>
                    </div>
                    {/* Counter Four Single End */}
                    {/* Counter Four Single Start */}
                    <div className="col-xl-3 col-lg-6 col-md-6">
                        <div className="counter-four__single">
                            <div className="counter-four__shape-1">
                                <img src="assets/images/shapes/counter-four-shape-1.png" alt=""/>
                            </div>
                            <div className="counter-four__count count-box">
                                <CounterUp end={25} />
                                <span className="counter-four__plus">+</span>
                            </div>
                            <p className="counter-four__text">Worldwide Office</p>
                        </div>
                    </div>
                    {/* Counter Four Single End */}
                </div>
            </div>
        </section>
        {/* Counter Four End  */}
            

        </>
    )
}
