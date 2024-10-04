'use client'
import { useState } from 'react'
import ModalVideo from 'react-modal-video'

export default function Question() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
        {/* Have Any Question Start  */}
        <section className="have-any-question">
            <div className="have-any-question__bg-box">
                <div className="have-any-question__bg"
                    style={{ backgroundImage: 'url(assets/images/backgrounds/have-any-question-bg.jpg)' }} ></div>
                <div className="have-any-question__left-img"
                    style={{ backgroundImage: 'url(assets/images/resources/have-any-question-left-img.jpg)' }} ></div>
                <div className="have-any-question__img-1">
                    <img src="assets/images/resources/have-any-question-img-1.png" alt=""/>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="have-any-question__left">
                            <div className="have-any-question__video-link">
                                <a onClick={() => setOpen(true)} className="video-popup">
                                    <div className="have-any-question__video-icon">
                                        <span className="fa fa-play"></span>
                                        <i className="ripple"></i>
                                    </div>
                                </a>
                            </div>
                            <ul className="have-any-question__counter list-unstyled">
                                <li>
                                    <div className="have-any-question__count count-box">
                                        <h3>38</h3>
                                        <span className="have-any-question__plus">+</span>
                                    </div>
                                    <p className="have-any-question__text">Designers and
                                        <br/> developers</p>
                                </li>
                                <li>
                                    <div className="have-any-question__count count-box">
                                        <h3>256</h3>
                                        <span className="have-any-question__plus">+</span>
                                    </div>
                                    <p className="have-any-question__text">Awards for digital
                                        <br/> innovation</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="have-any-question__right">
                            <div className="have-any-question__form-box">
                                <p className="have-any-question__sub-title">CONTACT US</p>
                                <h3 className="have-any-question__title">Have Any Question?</h3>
                                <form action="assets/inc/sendemail.php"
                                    className="have-any-question__form contact-form-validated">
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="have-any-question__input-box">
                                                <input type="text" placeholder="Your Name" name="name"/>
                                            </div>
                                        </div>
                                        <div className="col-xl-12">
                                            <div className="have-any-question__input-box">
                                                <input type="email" placeholder="Email Address" name="email"/>
                                            </div>
                                        </div>
                                        <div className="col-xl-12">
                                            <div className="have-any-question__input-box">
                                                <input type="text" placeholder="Phone Number" name="email"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="have-any-question__input-box text-message-box">
                                                <textarea name="message" placeholder="Write Your Message"></textarea>
                                            </div>
                                            <div className="have-any-question__btn-box">
                                                <button type="submit" className="thm-btn have-any-question__btn">SEND YOUR
                                                    MEASSAGE</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <div className="result"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />
        {/* Have Any Question End  */}
        </>
    )
}
