import Layout from "@/components/layout/Layout";
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

export default async function Error404() {
  const general = await getGeneralData();
  return (
    <>
      <Layout data={general} headerStyle={1} footerStyle={1}>
        {/* Error Page Start */}
        <section className="error-page">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="error-page__inner">
                  <div className="error-page__img img-bounce">
                    <img
                      src="../assets/images/resources/error-page-img-1.png"
                      alt=""
                    />
                  </div>
                  <h3 className="error-page__tagline">
                    Sorry! Page Not Found!
                  </h3>
                  <p className="error-page__text">
                    Oops! The page you are looking for does not exist. Please
                    return to the site’s homepage.
                  </p>
                  <Link href="/" className="thm-btn error-page__btn">
                    back to home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Error Page End */}
      </Layout>
    </>
  );
}
