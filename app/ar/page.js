import Layout from "@/components/layout/ar/Layout";
import About from "@/components/sections/ar/home1/About";
import Banner from "@/components/sections/ar/home4/Banner";
import Funfacts from "@/components/sections/ar/home1/Funfacts";
import WhyChooseUs from "@/components/sections/ar/home4/WhyChooseUs";
import Service from "@/components/sections/ar/home1/Service_2";
import Video from "@/components/sections/ar/home1/video";
import Brand from "@/components/sections/ar/home1/Brand";
import Blog from "@/components/sections/ar/home1/Blog";
import Faq from "@/components/sections/ar/home1/Faq";
import FeaturesTwo from "@/components/sections/ar/home4/FeaturesTwo";
import Testimonial from "@/components/sections/ar/home1/Testimonial";
import Link from "next/link";
import axios from "axios";

export const metadata = {
  title: "Mediwali السياحة الصحية",
  description: `احصل على أفضل خيارات العلاج مع ميديوالي، الشركة الرائدة في مجال السياحة العلاجية في تركيا. نحن نقدم خدمات رعاية صحية عالية الجودة وبأسعار معقولة وحلول رعاية شخصية. ائتمننا على صحتك بكل ثقة.`,
};

async function getGeneralData() {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/general?populate=deep`
  );
  return res.data.data.attributes;
}

async function getHomeData() {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/home?populate=deep`
  );
  return res.data.data.attributes;
}

async function getBlogData() {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/blogs?populate=deep`
  );
  return res.data.data;
}

export default async function Home() {
  const general = await getGeneralData();
  const home = await getHomeData();
  const blog = await getBlogData();

  return (
    <>
      <Layout data={general} headerStyle={1} footerStyle={1}>
        <Banner data={home.ar.slider} />
        <Service data={home.ar} />
        <About data={home.ar.about} general={general} />
        <Funfacts data={home.ar.counter} />
        <WhyChooseUs data={home.ar} />
        <FeaturesTwo data={general} />
        <Faq data={home.ar} />
        <Video />
        <Testimonial data={home.ar} />
        <Blog data={blog} />
        {/* CTA One Start  */}
        <section className="cta-one cta-five">
          <div className="container">
            <div className="update_time">{home.ar.update}</div>
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
                  احصل على <span>العرض</span> الآن
                </h3>
                <p>اتصل بنا للحصول على معلومات حول عروضنا الخاصة لك..</p>
              </div>
              <div className="cta-one__btn-box">
                <Link href="/ar/contact" className="cta-one__btn thm-btn">
                  احصل على عرض أسعارك المجاني الآن
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
