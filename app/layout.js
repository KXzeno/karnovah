import Head from 'next/head'
import './globals.css'
// import { Inter } from 'next/font/google'
import { Urbanist, Inter, Cinzel, Diphylleia, Roboto } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap'})

const urbanist = Urbanist({ 
  subsets: ['latin'],
  weight: ['100', '300'],
  variable: '--font-urbanist',
});

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-cinzel',
});

const diphylleia = Diphylleia({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-diphylleia',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400'],
});

export const metadata = {
  title: 'Karnovah',
  description: 'Personal Business & Blog Site Under Development',
  openGraph: {
    images: 'https://i.postimg.cc/bwm0ZQJb/kx.png'
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta property="og:url" content="https://karnovah.netlify.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.openGraph.images} />
      </Head>
      <body className={`${diphylleia.variable} ${cinzel.variable} ${inter.variable} ${urbanist.variable} ${roboto.className} font-sans`}>{children}
        <script
          type="text/javascript"
          src="../node_modules/tw-elements/dist/js/tw-elements.umd.min.js">
        </script> 
      </body>
    </html>
  )
}
