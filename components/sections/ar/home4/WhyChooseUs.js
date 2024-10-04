import Link from "next/link";
export default function WhyChooseUs({ pd, data }) {
  return (
    <>
      {/* Why Choose Three Start */}
      <section style={pd && { paddingBottom: 60 }} className="why-choose-three">
        <div className="why-choose-three__shape-1">
          <img src="assets/images/shapes/why-choose-three-shape-1.png" alt="" />
        </div>
        <div className="why-choose-three__shape-2 img-bounce">
          <img src="assets/images/shapes/why-choose-three-shape-2.png" alt="" />
        </div>

        <div className="container">
          <div className="section-title text-center">
            <div className="section-title__tagline-box">
              <p className="section-title__tagline">MEDIWALI</p>
            </div>
            <h2 className="section-title__title">
              {data.step_title}
              <br /> {data.steps_title_2}
            </h2>
          </div>
          <div className="row">
            {data.steps.map((item, index) => (
              <div
                key={index}
                className="col-xl-4 col-lg-4 wow fadeInLeft"
                data-wow-delay="100ms"
              >
                <div className="why-choose-three__single">
                  <div className="why-choose-three__icon">
                    <img
                      src={`${process.env.NEXT_PUBLIC_IP}${item.icon.data.attributes.url}`}
                      style={{ width: 50, height: 50 }}
                    />
                  </div>
                  <div className="why-choose-three__content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                  <div className="why_number">0{index + 1}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
