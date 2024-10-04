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
          <Link href="/ar">الصفحة الرئيسية </Link>
        </li>
        <li className="dropdown">
          <Link href="/ar/about">شركتنا</Link>
          <ul>
            <li>
              <Link href="/ar/about">نبذة عنا</Link>
            </li>
            <li>
              <Link href="/ar/how-we-works">كيف نعمل ?</Link>
            </li>

            <li>
              <Link href="/ar/health-services">الخدمات الصحية</Link>
            </li>
            <li>
              <Link href="/ar/contracted-institutions">
              المؤسسات المتعاقد معها
              </Link>
            </li>
            <li>
              <Link href="/ar/contracted-doctors">الأطباء المتعاقدون</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/ar/special-offers">عروض خاصة</Link>
        </li>

        <li>
          <Link href="/ar/blog">المدونة</Link>
        </li>
        <li>
          <Link href="/ar/contact">اتصل بنا</Link>
        </li>


        <li className="dropdown">
          <Link href="#"><img className="lng_flag" src="https://api.mediwali.com/uploads/ar_c0bc6f66db.png" /></Link>
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
