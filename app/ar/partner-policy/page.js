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
    `${process.env.NEXT_PUBLIC_IP}/api/partner-policy/?populate=deep`
  );
  return res.data.data.attributes.ar;
}

export const metadata = {
  title: "Mediwali السياحة الصحية",
  description: `احصل على أفضل خيارات العلاج مع ميديوالي، الشركة الرائدة في مجال السياحة العلاجية في تركيا. نحن نقدم خدمات رعاية صحية عالية الجودة وبأسعار معقولة وحلول رعاية شخصية. ائتمننا على صحتك بكل ثقة.`,
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
