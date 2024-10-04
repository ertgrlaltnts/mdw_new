import Layout from "@/components/layout/geo/Layout";
import About from "@/components/sections/geo/home1/About";
import Banner from "@/components/sections/geo/home4/Banner";
import Feature from "@/components/sections/geo/home1/Feature";
import Funfacts from "@/components/sections/geo/home1/Funfacts";
import WhyChooseUs from "@/components/sections/geo/home4/WhyChooseUs";
import Service from "@/components/sections/geo/home1/Service_2";
import Video from "@/components/sections/geo/home1/video";
import Work from "@/components/sections/geo/home1/Work";
import Brand from "@/components/sections/geo/home1/Brand";
import Blog from "@/components/sections/geo/home1/Blog";
import Faq from "@/components/sections/geo/home1/Faq";
import Quote from "@/components/sections/geo/home1/Quote";
import Download from "@/components/sections/geo/home4/Download";
import FeaturesTwo from "@/components/sections/geo/home4/FeaturesTwo";
import Testimonial from "@/components/sections/geo/home1/Testimonial";
import Link from "next/link";
import axios from "axios";

export const metadata = {
  title: "Mediwali Health Tourism",
  description: `წვდომა საუკეთესო მკურნალობის ვარიანტებზე Mediwali-თან, თურქეთის წამყვან სამედიცინო ტურიზმის კომპანიასთან. ჩვენ გთავაზობთ მაღალი ხარისხის ჯანდაცვის მომსახურებას, ხელმისაწვდომ ფასებს და მოვლის პერსონალიზებულ გადაწყვეტილებებს. გვერწმუნეთ თქვენი ჯანმრთელობა.`,
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
        <Banner data={home.geo.slider} />
        <Service data={home.geo} />
        <About data={home.geo.about} general={general} />
        <Funfacts data={home.geo.counter} />
        <WhyChooseUs data={home.geo} />
        <FeaturesTwo data={general} />
        <Faq data={home.geo} />
        <Video />
        <Testimonial data={home.geo} />
        <Blog data={blog} />
        {/* CTA One Start  */}
        <section className="cta-one cta-five">
          <div className="container">
            <div className="update_time">{home.geo.update}</div>
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
                <p>
                  დაგვიკავშირდით, რომ მიიღოთ ინფორმაცია თქვენთვის სპეციალური
                  შეთავაზებების შესახებ.
                </p>
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
