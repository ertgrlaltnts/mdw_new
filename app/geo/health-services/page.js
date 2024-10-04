import Layout from "@/components/layout/geo/Layout";
import Link from "next/link";
import Markdown from "markdown-to-jsx";
import axios from "axios";

export const metadata = {
  title: "Mediwali Health Tourism | ჯანდაცვის სერვისები",
  description: `აღმოაჩინეთ ყოვლისმომცველი ჯანდაცვის სერვისები, რომლებსაც ჩვენ გთავაზობთ თურქეთის საუკეთესო საავადმყოფოებში. იყავით ჯანმრთელი Mediwali-ით მკურნალობის ფართო სპექტრით, პლასტიკური ქირურგიიდან სტომატოლოგიურ მკურნალობამდე, ონკოლოგიიდან ორთოპედიამდე.`,
};

async function getHealthData() {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/health-service?populate=deep`
  );
  return res.data.data.attributes.geo[0];
}

async function getGeneralData() {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/general?populate=deep`
  );
  return res.data.data.attributes;
}

export default async function Home() {
  const health = await getHealthData();
  const general = await getGeneralData();

  return (
    <>
      <Layout
        data={general}
        headerStyle={1}
        footerStyle={1}
        breadcrumbTitle="ჯანდაცვის სერვისები"
      >
        {/* Blog Details Start */}
        <section className="blog-details">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12">
                <div className="blog-details__left">
                  <div className="blog-details__content">
                    <Markdown>{health.description}</Markdown>
                  </div>

                  <div style={{ marginTop: 50 }} className="blog-one__tag">
                    {health.words.map((item, index) => (
                      <span key={index}>{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-one cta-five">
          <div className="container">
            <div className="update_time">{health.update}</div>
            <div className="cta-one__inner">
              <div
                className="cta-one__bg"
                style={{
                  backgroundImage:
                    "url(../assets/images/shapes/cta-three-bg-shape-2.png)",
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
        {/* Blog Details End */}
      </Layout>
    </>
  );
}
