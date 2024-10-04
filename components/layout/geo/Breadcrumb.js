import Link from "next/link"

export default function Breadcrumb({ breadcrumbTitle }) {
    return (
        <>
            {/* Page Header Start */}
            <section className="page-header">
                <div className="page-header__bg" style={{ backgroundImage: 'url(../../assets/images/main/breadcrumb.png)' }} >
                </div>
                <div className="container">
                    <div className="page-header__inner">
                        <h2 style={{color:"#fff"}}>{breadcrumbTitle}</h2>
                    </div>
                </div>
            </section>
            {/* Page Header End */}

        </>
    )
}
