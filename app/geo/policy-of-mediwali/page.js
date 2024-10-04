import Layout from "@/components/layout/geo/Layout";
import Link from "next/link";
import Markdown from "markdown-to-jsx";
import axios from "axios";

async function getGeneralData() {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/general?populate=deep`
  );
  return res.data.data.attributes;
}

async function getData() {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/policy-of-mediwali?populate=deep`
  );
  return res.data.data.attributes.geo;
}

export const metadata = {
  title: "Mediwali Health Tourism",
  description: `წვდომა საუკეთესო მკურნალობის ვარიანტებზე Mediwali-თან, თურქეთის წამყვან სამედიცინო ტურიზმის კომპანიასთან. ჩვენ გთავაზობთ მაღალი ხარისხის ჯანდაცვის მომსახურებას, ხელმისაწვდომ ფასებს და მოვლის პერსონალიზებულ გადაწყვეტილებებს. გვერწმუნეთ თქვენი ჯანმრთელობა.`,
};

export default async function Home() {
  const general = await getGeneralData();
  const data = await getData();

  return (
    <>
      <Layout data={general} headerStyle={1} footerStyle={1}>
        {/* Blog Details Start */}
        <section className="blog-details">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12">
                <div className="blog-details__left">
                  <div className="blog-details__content">
                    <Markdown>{data.description}</Markdown>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-one cta-five">
          <div className="container">
            <div className="update_time">{data.update}</div>
          </div>
        </section>
        {/* Blog Details End */}
      </Layout>
    </>
  );
}
