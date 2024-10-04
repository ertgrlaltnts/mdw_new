import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function Home({data}) {
  return (
    <>
      <section className="services-one">
        <div className="services-one__shape-1 float-bob-x">
          <img src="assets/images/shapes/services-one-shape-1.png" alt="" />
        </div>
        <div className="services-one__shape-2 rotate-me">
          <img src="assets/images/shapes/services-one-shape-2.png" alt="" />
        </div>
        <div className="container">
          <div className="section-title text-left">
            <div className="section-title__tagline-box">
              <p className="section-title__tagline">MEDIWALI</p>
            </div>
            <h2 className="section-title__title">{data.offers_title}</h2>
          </div>
          <div className="services-one__bottom">
            <div className="row">
              {data.offers.map((item, index) => (
                <div key={index} className="col-xl-4 col-lg-4">
                  <div className="services-one__single">
                    <div className="services-one__title-box">
                      <h3 className="services-one__title">
                        <Link href={item.link}>
                          {item.title}
                        </Link>
                      </h3>
                    </div>
                    <div className="services-one__img-box">
                      <div className="services-one__img">
                        <img src={`${process.env.NEXT_PUBLIC_IP}${item.image.data.attributes.url}`} alt="" />
                      </div>
                      <div className="services-one__icon">
                        <img
                          src={`${process.env.NEXT_PUBLIC_IP}${item.icon.data.attributes.url}`}
                          style={{ width: 50, height: 50 }}
                        />
                      </div>
                    </div>
                    <div className="services-one__read-more">
                      <Link href={item.link}>
                        REVIEW OFFER<span className="icon-next"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
