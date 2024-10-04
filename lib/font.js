import { Syne, DM_Sans } from 'next/font/google'

export const dm_sans = DM_Sans({
    weight: ['400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    variable: "--sonchoy-font",
    display: 'swap',
})
export const syne = Syne({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    variable: "--sonchoy-font-two",
    display: 'swap',
})
