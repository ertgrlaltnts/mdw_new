import Layout from "@/components/layout/Layout";
import About from "@/components/sections/home1/About";
import Banner from "@/components/sections/home4/Banner";
import Feature from "@/components/sections/home1/Feature";
import Funfacts from "@/components/sections/home1/Funfacts";
import WhyChooseUs from "@/components/sections/home4/WhyChooseUs";
import Service from "@/components/sections/home1/Service_2";
import Video from "@/components/sections/home1/video";
import Work from "@/components/sections/home1/Work";
import Brand from "@/components/sections/home1/Brand";
import Blog from "@/components/sections/home1/Blog";
import Faq from "@/components/sections/home1/Faq";
import Quote from "@/components/sections/home1/Quote";
import Download from "@/components/sections/home4/Download";
import FeaturesTwo from "@/components/sections/home4/FeaturesTwo";
import Testimonial from "@/components/sections/home1/Testimonial";
import Link from "next/link";
import axios from "axios";

export const metadata = {
  title: "Mediwali Health Tourism",
  description: `Access the best treatment options with Mediwali, Turkey's leading medical tourism company. We offer high quality healthcare services, affordable prices and personalized care solutions. Entrust your health to us with confidence.`,
};

async function getGeneralData() {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/general?populate=deep`
  );
  return res.data.data.attributes;
}


async function getBlogData() {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/blogs?populate=deep`
  );
  return res.data.data;
}


async function getHomeData() {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/home?populate=deep`
  );
  return res.data.data.attributes;
}

export default async function Home() {
  const general = await getGeneralData();
  const home = await getHomeData();
  const blog = await getBlogData();

  return (
    <>
      <Layout data={general} headerStyle={1} footerStyle={1}>
        <Banner data={home.en.slider} />
        <Service data={home.en} />
        <About data={home.en.about} general={general} />
        <Funfacts data={home.en.counter} />
        <WhyChooseUs data={home.en} />
        <FeaturesTwo data={general} />
        <Faq data={home.en} />
        <Video />
        <Testimonial data={home.en} />
        <Blog data={blog} />
        {/* CTA One Start  */}
        <section className="cta-one cta-five">
          <div className="container">
            <div className="update_time">{home.en.update}</div>
            <div className="cta-one__inner">
              <div
                className="cta-one__bg"
                style={{
                  backgroundImage:
                    "url(assets/images/shapes/cta-three-bg-shape-2.png)",
                }}
              ></div>
              <div className="cta-one__title-box">
                <h3>
                  Get an Instant <span>Quote</span> Right Now
                </h3>
                <p>Contact us to learn about our special offers for you.</p>
              </div>
              <div className="cta-one__btn-box">
                <Link href="/contact" className="cta-one__btn thm-btn">
                  GET YOUR FREE QUOTE NOW
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
