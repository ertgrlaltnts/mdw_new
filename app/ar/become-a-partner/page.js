import Layout from "@/components/layout/ar/Layout";
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
    `${process.env.NEXT_PUBLIC_IP}/api/become-a-partner/?populate=deep`
  );
  return res.data.data.attributes.ar;
}

export const metadata = {
  title: "Mediwali Health Tourism",
  description: `يمكنك الوصول إلى أفضل خيارات العلاج مع Mediwali، شركة السياحة الطبية الرائدة في تركيا. نحن نقدم خدمات رعاية صحية عالية الجودة وأسعار معقولة وحلول رعاية شخصية. ثق بنا بصحتك.`,
};

export default async function Home() {
  const data = await getData();
  const general = await getGeneralData();

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
