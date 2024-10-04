
export default function BackToTop({ scroll }) {

    return (
        <>
            {scroll && (
                <a className="scroll-to-top scroll-to-target d-block" href="https://wa.me/905377770388">
                    <i className="fab fa-whatsapp"></i>
                </a>
            )}
        </>
    )
}