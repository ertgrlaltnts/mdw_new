'use client'
import { useState } from 'react'
import ReactCurvedText from 'react-curved-text'
import ModalVideo from 'react-modal-video'


export default function Video() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>

        {/* Video One Start  */}
        <section className="video-one video-two">
            <div className="video-one__bg jarallax" style={{ backgroundImage: 'url(assets/images/backgrounds/video-one__bg.jpg)' }} >
            </div>
            <div className="video-one__shape-1">
                <img src="assets/images/shapes/video-two-shape-1.png" alt=""/>
            </div>
            <div className="video-one__shape-2">
                <img src="assets/images/shapes/video-two-shape-2.png" alt=""/>
            </div>
            <div className="video-one__shape-3">
                <img src="assets/images/shapes/video-one__shape-3.png" alt=""/>
            </div>
            <div className="video-one__shape-4">
                <img src="assets/images/shapes/video-one__shape-4.png" alt=""/>
            </div>
            <div className="video-one__shape-5">
                <img src="assets/images/shapes/video-two-shape-5.png" alt=""/>
            </div>
            <div className="container">
                <div className="video-one__inner">
                    <div className="video-one__icon-box">
                        <a onClick={() => setOpen(true)} className="video-one__icon video-popup"><span
                                className="icon-play-2"></span></a>
                        <a onClick={() => setOpen(true)} className="video-one__curved-circle-box">
                            <div className="curved-circle">
                                <span className="curved-circle--item">
                                <ReactCurvedText width='240'
                                    height='240'
                                    cx='120'
                                    cy='120'
                                    rx='90'
                                    ry='90'
                                    startOffset='0'
                                    reversed={true}
                                    text='QUALITY INSURACE SERVICE COMAPY FOR YOUR FUTURE'
                                    textProps={{ "style": { "fontSize": "20" } }}
                                    textPathProps={{ "fill": "#ffffff" }}
                                    tspanProps={null}
                                    ellipseProps={null}
                                    svgProps={null}
                                />
                                </span>
                            </div>{/*  /.curved-circle  */}
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />
        {/* Video One End  */}
        </>
    )
}
