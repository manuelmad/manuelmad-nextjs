import './globals.css';
//import { Inter } from 'next/font/google';
//import { Roboto_Condensed } from 'next/font/google';

// import para poder usar una fuente local
import localFont from 'next/font/local';
 
// Font files can be colocated inside of `app`
const myFont = localFont({
  display: 'swap',
  src: [
    {
      path: '../public/fonts/Roboto_Condensed/RobotoCondensed-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Roboto_Condensed/RobotoCondensed-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/fonts/Roboto_Condensed/RobotoCondensed-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/Roboto_Condensed/RobotoCondensed-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/Roboto_Condensed/RobotoCondensed-LightItalic.ttf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../public/fonts/Roboto_Condensed/RobotoCondensed-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/fonts/Roboto_Condensed/RobotoCondensed-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    }
  ]
})

//const inter = Inter({ subsets: ['latin'] });

// const roboto_condensed = Roboto_Condensed({
//   subsets: ['latin'],
//   weight: '400',
// });

export const metadata = {
  title: "Manuel Araujo's Website",
  description: "Manuel Araujo's Website",
  robots: {
    index: true,
    follow: true,
  }
  /*La metadata para viewport y charset ya están incluidas por default*/
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>{/*Agrego la etiqueta head aquí para poder agregar la etiqueta meta de http-equiv, la cual no está soportada por Next JS*/}
      </head>
      <body className={myFont.className}>{children}</body>
    </html>
  )
}
