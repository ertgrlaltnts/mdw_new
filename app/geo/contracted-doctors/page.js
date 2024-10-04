import Layout from "@/components/layout/geo/Layout";
import Link from "next/link";
import axios from "axios";

export const metadata = {
  title: "Mediwali Health Tourism | კონტრაქტი ექიმები",
  description: `შეხვდით ექსპერტ ექიმებს მედივალთან ერთად. მიიღეთ პროფესიონალური ჯანდაცვის სერვისები თურქეთის ყველაზე კომპეტენტური ექიმებისგან ესთეტიკის, სტომატოლოგიის, ონკოლოგიის, ორთოპედიის და მრავალი სხვა ფილიალში. თქვენი ჯანმრთელობა უსაფრთხო ხელშია.`,
};

async function getDoctorData() {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/doctors?populate=deep`
  );

  return res.data.data;
}

async function getGeneralData() {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/general?populate=deep`
  );
  return res.data.data.attributes;
}

export default async function Home() {

  const doctors = await getDoctorData();
  const general = await getGeneralData();

  return (
    <>
      <Layout data={general} headerStyle={1} footerStyle={1} breadcrumbTitle="კონტრაქტი ექიმები">
        {/* Team Two Start  */}
        <section className="team-page">
          <div className="container">
            <div className="row">
              {doctors.map((item, index) => (
                <div key={index} className="col-xl-4 col-lg-4">
                  <div className="team-two__single">
                    <div className="team-two__img-box">
                      <div className="team-two__img">
                        <img src={`${process.env.NEXT_PUBLIC_IP}${item.attributes.geo.image.data.attributes.url}`} alt="" />
                      </div>
                      <div className="hospital_logo">
                        <img src={`${process.env.NEXT_PUBLIC_IP}${item.attributes.geo.hospital_logo.data.attributes.url}`} />
                      </div>
                    </div>
                    <div className="team-two__content">
                      <p
                        style={{ fontSize: 13 }}
                        className="team-two__sub-title"
                      >
                       {item.attributes.geo.job}
                      </p>
                      <h3 className="team-two__title">
                        <Link href={`/geo/contracted-doctors/${item.attributes.geo.slug}`}>{item.attributes.geo.name}</Link>
                      </h3>
                      <p
                        style={{ fontSize: 13 }}
                        className="team-two__sub-title"
                      >
                       {item.attributes.geo.department}
                      </p>
                      <div className="team-two__share-and-social">
                        <div className="team-two__share">
                          <Link href={`/geo/contracted-doctors/${item.attributes.geo.slug}`}>
                            <span className="icon-next"></span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Team Two End  */}

        {/* CTA One Start  */}
        <section className="cta-one cta-five">
          <div className="container">
            <div className="update_time">{doctors[0].attributes.geo.update}</div>
            <div className="cta-one__inner">
              <div
                className="cta-one__bg"
                style={{
                  backgroundImage:
                    "url(../../assets/images/shapes/cta-three-bg-shape-2.png)",
                }}
              ></div>
              <div className="cta-one__title-box">
                <h3>
                მიიღეთ <span>შემოთავაზება</span> ახლავე
                </h3>
                <p>დაგვიკავშირდით, რომ მიიღოთ ინფორმაცია თქვენთვის სპეციალური შეთავაზებების შესახებ.</p>
              </div>
              <div className="cta-one__btn-box">
                <Link href="/geo/contact" className="cta-one__btn thm-btn">
                მიიღეთ უფასო შეთავაზება ახლავე
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* CTA One End  */}
      </Layout>
    </>
  );
}
