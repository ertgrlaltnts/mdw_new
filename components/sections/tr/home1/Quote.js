'use client'
import { useState } from "react"

export default function Quote() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>
            {/* Get Quote Start  */}
        <section className="get-quote">
            <div className="get-quote__shape-4 float-bob-x">
                <img src="assets/images/shapes/get-quote-shape-4.png" alt=""/>
            </div>
            <div className="get-quote__shape-5 float-bob-y">
                <img src="assets/images/shapes/get-quote-shape-5.png" alt=""/>
            </div>
            <div className="get-quote__shape-7 float-bob-y">
                <img src="assets/images/shapes/get-quote-shape-7.png" alt=""/>
            </div>
            <div className="get-quote__shape-8 float-bob-x">
                <img src="assets/images/shapes/get-quote-shape-8.png" alt=""/>
            </div>
            <div className="get-quote__shape-9 float-bob-y">
                <img src="assets/images/shapes/get-quote-shape-9.png" alt=""/>
            </div>
            <div className="get-quote__shape-10 float-bob-x">
                <img src="assets/images/shapes/get-quote-shape-10.png" alt=""/>
            </div>
            <div className="get-quote__shape-11 float-bob-y">
                <img src="assets/images/shapes/get-quote-shape-11.png" alt=""/>
            </div>
            <div className="get-quote__img-1">
                <img src="assets/images/resources/get-quote-img-1.jpg" alt=""/>
            </div>
            <div className="get-quote__img-2">
                <img src="assets/images/resources/get-quote-img-2.png" alt=""/>
            </div>
            <div className="container">
                <div className="get-quote__inner">
                    <div className="row tabs-box">
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="get-quote__left clearfix">
                                <div className="get-quote__shape-6 float-bob-y">
                                    <img src="assets/images/shapes/get-quote-shape-6.png" alt=""/>
                                </div>
                                <div className="get-quote__tab-box clearfix">
                                    <ul className="tab-buttons clearfix list-unstyled">
                                        <li className={activeIndex == 1 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(1)}>
                                            <div className="get-quote__tab-btn-content">
                                                <div className="get-quote__tab-icon">
                                                    <span className="icon-life-insurance-1"></span>
                                                </div>
                                                <div className="get-quote__tab-text-box">
                                                    <p className="get-quote__tab-text">Life</p>
                                                </div>
                                            </div>
                                        </li>

                                        <li className={activeIndex == 2 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(2)}>
                                            <div className="get-quote__tab-btn-content">
                                                <div className="get-quote__tab-icon">
                                                    <span className="icon-insurance-1"></span>
                                                </div>
                                                <div className="get-quote__tab-text-box">
                                                    <p className="get-quote__tab-text">Veichle</p>
                                                </div>
                                            </div>
                                        </li>

                                        <li className={activeIndex == 3 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(3)}>
                                            <div className="get-quote__tab-btn-content">
                                                <div className="get-quote__tab-icon">
                                                    <span className="icon-home-insurance"></span>
                                                </div>
                                                <div className="get-quote__tab-text-box">
                                                    <p className="get-quote__tab-text">Home</p>
                                                </div>
                                            </div>
                                        </li>

                                        <li className={activeIndex == 4 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(4)}>
                                            <div className="get-quote__tab-btn-content">
                                                <div className="get-quote__tab-icon">
                                                    <span className="icon-briefcase"></span>
                                                </div>
                                                <div className="get-quote__tab-text-box">
                                                    <p className="get-quote__tab-text">Business</p>
                                                </div>
                                            </div>
                                        </li>

                                        <li className={activeIndex == 5 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(5)}>
                                            <div className="get-quote__tab-btn-content">
                                                <div className="get-quote__tab-icon">
                                                    <span className="icon-health-insurance"></span>
                                                </div>
                                                <div className="get-quote__tab-text-box">
                                                    <p className="get-quote__tab-text">Health</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="get-quote__right">
                                <div className="get-quote__shape-1">
                                    <img src="assets/images/shapes/get-quote-shape-1.png" alt=""/>
                                </div>
                                <div className="get-quote__shape-2">
                                    <img src="assets/images/shapes/get-quote-shape-2.png" alt=""/>
                                </div>
                                <div className="get-quote__shape-3">
                                    <img src="assets/images/shapes/get-quote-shape-3.png" alt=""/>
                                </div>
                                <div className="tabs-content">
                                    {/* tab */}
                                    <div  className={activeIndex == 1 ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated"}>
                                        <div className="get-quote__content">
                                            <p className="get-quote__tagline">GET FREE QUOTE</p>
                                            <h2 className="get-quote__title">Life Insurance</h2>
                                            <form className="get-quote__form">
                                                <div className="get-quote__content-box">
                                                    <div className="get-quote__input-box">
                                                        <input type="text" placeholder="Your Name" name="name"/>
                                                    </div>
                                                    <div className="get-quote__input-box">
                                                        <input type="email" placeholder="Email Address" name="email"/>
                                                    </div>
                                                    <div className="get-quote__input-box">
                                                        <input type="email" placeholder="Phone Number" name="email"/>
                                                    </div>
                                                    <div className="get-quote__input-box">
                                                        <input type="email" placeholder="Property Types" name="email"/>
                                                    </div>
                                                </div>
                                                <div className="get-quote__progress">
                                                    <div className="get-quote__progress-single">
                                                        <h4 className="get-quote__progress-title">Limits of Blance</h4>
                                                        <div className="bar">
                                                            <div className="bar-inner count-bar" data-percent="70%" style={{ width: '70%' }}>
                                                                <div className="count-text"></div>
                                                            </div>
                                                        </div>
                                                        <div className="get-quote__balance-box">
                                                            <p className="get-quote__balance">$65254</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="get-quote__content-bottom">
                                                    <button type="submit" className="thm-btn get-quote__btn">GET YOUR
                                                        QUOTE</button>
                                                    <div className="get-quote__content-bottom-text-box">
                                                        <div className="get-quote__count-box">
                                                            <div className="get-quote__count count-box">
                                                                <h3 className="count-text" data-stop="212"
                                                                    data-speed="1500">212
                                                                </h3>
                                                                <span>+</span>
                                                            </div>
                                                            <p>Reviews</p>
                                                        </div>
                                                        <div className="get-quote__ratting">
                                                            <span className="icon-star-1"></span>
                                                            <span className="icon-star-1"></span>
                                                            <span className="icon-star-1"></span>
                                                            <span className="icon-star-1"></span>
                                                            <span className="icon-star-1"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    {/* tab */}
                                    <div  className={activeIndex == 2 ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated"}>
                                        <div className="get-quote__content">
                                            <p className="get-quote__tagline">GET FREE QUOTE</p>
                                            <h2 className="get-quote__title">Veichle Insurance</h2>
                                            <form className="get-quote__form">
                                                <div className="get-quote__content-box">
                                                    <div className="get-quote__input-box">
                                                        <input type="text" placeholder="Your Name" name="name"/>
                                                    </div>
                                                    <div className="get-quote__input-box">
                                                        <input type="email" placeholder="Email Address" name="email"/>
                                                    </div>
                                                    <div className="get-quote__input-box">
                                                        <input type="email" placeholder="Phone Number" name="email"/>
                                                    </div>
                                                    <div className="get-quote__input-box">
                                                        <input type="email" placeholder="Property Types" name="email"/>
                                                    </div>
                                                </div>
                                                <div className="get-quote__progress">
                                                    <div className="get-quote__progress-single">
                                                        <h4 className="get-quote__progress-title">Limits of Blance</h4>
                                                        <div className="bar">
                                                            <div className="bar-inner count-bar" data-percent="70%">
                                                                <div className="count-text"></div>
                                                            </div>
                                                        </div>
                                                        <div className="get-quote__balance-box">
                                                            <p className="get-quote__balance">$65254</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="get-quote__content-bottom">
                                                    <button type="submit" className="thm-btn get-quote__btn">GET YOUR
                                                        QUOTE</button>
                                                    <div className="get-quote__content-bottom-text-box">
                                                        <div className="get-quote__count-box">
                                                            <div className="get-quote__count count-box">
                                                                <h3 className="count-text" data-stop="212"
                                                                    data-speed="1500">00
                                                                </h3>
                                                                <span>+</span>
                                                            </div>
                                                            <p>Reviews</p>
                                                        </div>
                                                        <div className="get-quote__ratting">
                                                            <span className="icon-star-1"></span>
                                                            <span className="icon-star-1"></span>
                                                            <span className="icon-star-1"></span>
                                                            <span className="icon-star-1"></span>
                                                            <span className="icon-star-1"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    {/* tab */}
                                    <div  className={activeIndex == 3 ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated"}>
                                        <div className="get-quote__content">
                                            <p className="get-quote__tagline">GET FREE QUOTE</p>
                                            <h2 className="get-quote__title">Home Insurance</h2>
                                            <form className="get-quote__form">
                                                <div className="get-quote__content-box">
                                                    <div className="get-quote__input-box">
                                                        <input type="text" placeholder="Your Name" name="name"/>
                                                    </div>
                                                    <div className="get-quote__input-box">
                                                        <input type="email" placeholder="Email Address" name="email"/>
                                                    </div>
                                                    <div className="get-quote__input-box">
                                                        <input type="email" placeholder="Phone Number" name="email"/>
                                                    </div>
                                                    <div className="get-quote__input-box">
                                                        <input type="email" placeholder="Property Types" name="email"/>
                                                    </div>
                                                </div>
                                                <div className="get-quote__progress">
                                                    <div className="get-quote__progress-single">
                                                        <h4 className="get-quote__progress-title">Limits of Blance</h4>
                                                        <div className="bar">
                                                            <div className="bar-inner count-bar" data-percent="70%">
                                                                <div className="count-text"></div>
                                                            </div>
                                                        </div>
                                                        <div className="get-quote__balance-box">
                                                            <p className="get-quote__balance">$65254</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="get-quote__content-bottom">
                                                    <button type="submit" className="thm-btn get-quote__btn">GET YOUR
                                                        QUOTE</button>
                                                    <div className="get-quote__content-bottom-text-box">
                                                        <div className="get-quote__count-box">
                                                            <div className="get-quote__count count-box">
                                                                <h3 className="count-text" data-stop="212"
                                                                    data-speed="1500">00
                                                                </h3>
                                                                <span>+</span>
                                                            </div>
                                                            <p>Reviews</p>
                                                        </div>
                                                        <div className="get-quote__ratting">
                                                            <span className="icon-star-1"></span>
                                                            <span className="icon-star-1"></span>
                                                            <span className="icon-star-1"></span>
                                                            <span className="icon-star-1"></span>
                                                            <span className="icon-star-1"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    {/* tab */}
                                    <div  className={activeIndex == 4 ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated"}>
                                        <div className="get-quote__content">
                                            <p className="get-quote__tagline">GET FREE QUOTE</p>
                                            <h2 className="get-quote__title">Business Insurance</h2>
                                            <form className="get-quote__form">
                                                <div className="get-quote__content-box">
                                                    <div className="get-quote__input-box">
                                                        <input type="text" placeholder="Your Name" name="name"/>
                                                    </div>
                                                    <div className="get-quote__input-box">
                                                        <input type="email" placeholder="Email Address" name="email"/>
                                                    </div>
                                                    <div className="get-quote__input-box">
                                                        <input type="email" placeholder="Phone Number" name="email"/>
                                                    </div>
                                                    <div className="get-quote__input-box">
                                                        <input type="email" placeholder="Property Types" name="email"/>
                                                    </div>
                                                </div>
                                                <div className="get-quote__progress">
                                                    <div className="get-quote__progress-single">
                                                        <h4 className="get-quote__progress-title">Limits of Blance</h4>
                                                        <div className="bar">
                                                            <div className="bar-inner count-bar" data-percent="70%">
                                                                <div className="count-text"></div>
                                                            </div>
                                                        </div>
                                                        <div className="get-quote__balance-box">
                                                            <p className="get-quote__balance">$65254</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="get-quote__content-bottom">
                                                    <button type="submit" className="thm-btn get-quote__btn">GET YOUR
                                                        QUOTE</button>
                                                    <div className="get-quote__content-bottom-text-box">
                                                        <div className="get-quote__count-box">
                                                            <div className="get-quote__count count-box">
                                                                <h3 className="count-text" data-stop="212"
                                                                    data-speed="1500">00
                                                                </h3>
                                                                <span>+</span>
                                                            </div>
                                                            <p>Reviews</p>
                                                        </div>
                                                        <div className="get-quote__ratting">
                                                            <span className="icon-star-1"></span>
                                                            <span className="icon-star-1"></span>
                                                            <span className="icon-star-1"></span>
                                                            <span className="icon-star-1"></span>
                                                            <span className="icon-star-1"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    {/* tab */}
                                    <div  className={activeIndex == 5 ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated"}>
                                        <div className="get-quote__content">
                                            <p className="get-quote__tagline">GET FREE QUOTE</p>
                                            <h2 className="get-quote__title">Health Insurance</h2>
                                            <form className="get-quote__form">
                                                <div className="get-quote__content-box">
                                                    <div className="get-quote__input-box">
                                                        <input type="text" placeholder="Your Name" name="name"/>
                                                    </div>
                                                    <div className="get-quote__input-box">
                                                        <input type="email" placeholder="Email Address" name="email"/>
                                                    </div>
                                                    <div className="get-quote__input-box">
                                                        <input type="email" placeholder="Phone Number" name="email"/>
                                                    </div>
                                                    <div className="get-quote__input-box">
                                                        <input type="email" placeholder="Property Types" name="email"/>
                                                    </div>
                                                </div>
                                                <div className="get-quote__progress">
                                                    <div className="get-quote__progress-single">
                                                        <h4 className="get-quote__progress-title">Limits of Blance</h4>
                                                        <div className="bar">
                                                            <div className="bar-inner count-bar" data-percent="70%">
                                                                <div className="count-text"></div>
                                                            </div>
                                                        </div>
                                                        <div className="get-quote__balance-box">
                                                            <p className="get-quote__balance">$65254</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="get-quote__content-bottom">
                                                    <button type="submit" className="thm-btn get-quote__btn">GET YOUR
                                                        QUOTE</button>
                                                    <div className="get-quote__content-bottom-text-box">
                                                        <div className="get-quote__count-box">
                                                            <div className="get-quote__count count-box">
                                                                <h3 className="count-text" data-stop="212"
                                                                    data-speed="1500">00
                                                                </h3>
                                                                <span>+</span>
                                                            </div>
                                                            <p>Reviews</p>
                                                        </div>
                                                        <div className="get-quote__ratting">
                                                            <span className="icon-star-1"></span>
                                                            <span className="icon-star-1"></span>
                                                            <span className="icon-star-1"></span>
                                                            <span className="icon-star-1"></span>
                                                            <span className="icon-star-1"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Get Quote End  */}
        </>
    )
}
