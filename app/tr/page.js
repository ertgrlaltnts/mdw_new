import Layout from "@/components/layout/tr/Layout";
import About from "@/components/sections/tr/home1/About";
import Banner from "@/components/sections/tr/home4/Banner";
import Feature from "@/components/sections/tr/home1/Feature";
import Funfacts from "@/components/sections/tr/home1/Funfacts";
import WhyChooseUs from "@/components/sections/tr/home4/WhyChooseUs";
import Service from "@/components/sections/tr/home1/Service_2";
import Video from "@/components/sections/tr/home1/video";
import Work from "@/components/sections/tr/home1/Work";
import Brand from "@/components/sections/tr/home1/Brand";
import Blog from "@/components/sections/tr/home1/Blog";
import Faq from "@/components/sections/tr/home1/Faq";
import Quote from "@/components/sections/tr/home1/Quote";
import Download from "@/components/sections/tr/home4/Download";
import FeaturesTwo from "@/components/sections/tr/home4/FeaturesTwo";
import Testimonial from "@/components/sections/tr/home1/Testimonial";
import Link from "next/link";
import axios from "axios";

export const metadata = {
  title: "Mediwali Sağlık Turizmi",
  description: `Türkiye'nin lider medikal turizm şirketi Mediwali ile en iyi tedavi seçeneklerine erişin. Yüksek kaliteli sağlık hizmetleri, uygun fiyatlar ve kişiselleştirilmiş bakım çözümleri sunuyoruz. Sağlığınızı güvenle bize emanet edin.`,
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
        <Banner data={home.tr.slider} />
        <Service data={home.tr} />
        <About data={home.tr.about} general={general} />
        <Funfacts data={home.tr.counter} />
        <WhyChooseUs data={home.tr} />
        <FeaturesTwo data={general} />
        <Faq data={home.tr} />
        <Video />
        <Testimonial data={home.tr} />
        <Blog data={blog} />
        {/* CTA One Start  */}
        <section className="cta-one cta-five">
          <div className="container">
            <div className="update_time">{home.tr.update}</div>
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
                Hemen Şimdi <span>Teklif</span> Alın
                </h3>
                <p>Size özel tekliflerimiz hakkında bilgi almak için bizimle iletişime geçin.</p>
              </div>
              <div className="cta-one__btn-box">
                <Link href="/tr/contact" className="cta-one__btn thm-btn">
                ÜCRETSİZ TEKLİFİNİZİ ŞİMDİ ALIN
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
