import "./globals.css";
import Header from './../components/header/Header';
import { Roboto, Russo_One, Fugaz_One, Audiowide} from 'next/font/google';

const roboto_init = Roboto({
  subsets:['latin'],
  weight: ['300','400','700'],
  variable: '--font-roboto',
});

const russoOne_init = Russo_One({
  subsets:['latin'],
  weight: ['400'],
  variable: '--font-russo_one',
});

const fugazOne_init = Fugaz_One({
  subsets:['latin'],
  weight: ['400'],
  variable: '--font-fugaz_one',
});

const audiowide_init = Audiowide({
  subsets:['latin'],
  weight: ['400'],
  variable: '--font-audiowide',
});



export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

import {Providers} from "./providers";
import Footer from "@/components/footer/Footer";

export default function RootLayout({children}) {
  return (
    <html lang="en" className='dark'>
      <body className={`${roboto_init.variable} ${russoOne_init.variable} ${fugazOne_init.variable} ${audiowide_init.variable}`}>
        <Providers>
          <Header/>
          {children}
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}
