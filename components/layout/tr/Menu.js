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
          <Link href="/tr">ANA SAYFA </Link>
        </li>
        <li className="dropdown">
          <Link href="/tr/about">ŞİRKETİMİZ</Link>
          <ul>
            <li>
              <Link href="/tr/about">Hakkımızda</Link>
            </li>
            <li>
              <Link href="/tr/how-we-works">Nasıl Çalışırız ?</Link>
            </li>

            <li>
              <Link href="/tr/health-services">Sağlık Hizmetleri</Link>
            </li>
            <li>
              <Link href="/tr/contracted-institutions">Anlaşmalı Kurumlar</Link>
            </li>
            <li>
              <Link href="/tr/contracted-doctors">Anlaşmalı Doktorlar</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/tr/special-offers">ÖZEL TEKLİFLER</Link>
        </li>

        <li>
          <Link href="/tr/blog">BLOG</Link>
        </li>
        <li>
          <Link href="/tr/contact">İLETİŞİM</Link>
        </li>

        <li className="dropdown">
          <Link href="#">
            <img className="lng_flag" src={"https://api.mediwali.com/uploads/tr_9d8aafc0c2.png"} />
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
