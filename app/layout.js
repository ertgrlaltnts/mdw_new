import "@/node_modules/react-modal-video/css/modal-video.css"
import "public/assets/css/sonchoy.css"
import "public/assets/css/sonchoy-responsive.css"
import 'swiper/css'
// import "swiper/css/navigation"
import "swiper/css/pagination"
import 'swiper/css/free-mode';
import {syne, dm_sans} from '@/lib/font'

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${dm_sans.variable} ${syne.variable}`}>
            <body>{children}</body>
        </html>
    )
}
