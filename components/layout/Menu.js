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
          <Link href="/">Home </Link>
        </li>
        <li className="dropdown">
          <Link href="/about">Our Company</Link>
          <ul>
            <li>
              <Link href="/about">About Mediwali</Link>
            </li>
            <li>
              <Link href="/how-we-works">How We Works ?</Link>
            </li>

            <li>
              <Link href="/health-services">Health Services</Link>
            </li>
            <li>
              <Link href="/contracted-institutions">
                Contracted Institutions
              </Link>
            </li>
            <li>
              <Link href="/contracted-doctors">Contracted Doctors</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/special-offers">Special Offers</Link>
        </li>

        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>


        <li className="dropdown">
          <Link href="#"><img className="lng_flag" src="https://api.mediwali.com/uploads/en_d15f5612a9.png" /></Link>
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
