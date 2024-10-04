import Link from "next/link";
// import { useRouter } from "next/router"

export default function Menu() {
  // const router = useRouter()

  return (
    <>
      {/* <ul className="sub-menu">
                <Link className={router.pathname == "/" ? "active" : ""}>Home Default</Link>
                <Link className={router.pathname == "/index-2" ? "active" : ""}>Home Interior</Link>
            </ul> */}

      <ul className="main-menu__list">
        <li className="current">
          <Link href="/geo">მთავარი </Link>
        </li>
        <li className="dropdown">
          <Link href="/geo/about">ჩვენი კომპანია</Link>
          <ul>
            <li>
              <Link href="/geo/about">ჩვენს შესახებ</Link>
            </li>
            <li>
              <Link href="/geo/how-we-works">როგორ ვმუშაობთ?</Link>
            </li>

            <li>
              <Link href="/geo/health-services">ჯანდაცვის სერვისები</Link>
            </li>
            <li>
              <Link href="/geo/contracted-institutions">
                კონტრაქტი დაწესებულებები
              </Link>
            </li>
            <li>
              <Link href="/geo/contracted-doctors">კონტრაქტი ექიმები</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/geo/special-offers">სპეციალური შეთავაზებები</Link>
        </li>

        <li>
          <Link href="/geo/blog">ბლოგი</Link>
        </li>
        <li>
          <Link href="/geo/contact">კონტაქტი</Link>
        </li>

        <li className="dropdown">
          <Link href="#">
            <img className="lng_flag" src="https://api.mediwali.com/uploads/geo_0f76839404.png" />
          </Link>
          <ul>
            <li>
              <Link href="/">English</Link>
            </li>
            <li>
              <Link href="/tr">Türkçe</Link>
            </li>

            <li>
              <Link href="/ar">اللغة العربية</Link>
            </li>

            <li>
              <Link href="/geo">ქართული</Link>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
}
