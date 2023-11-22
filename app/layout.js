import './globals.css'
// import { Inter } from 'next/font/google'
import { Urbanist, Inter, Cinzel, Diphylleia, Roboto, Merriweather } from 'next/font/google'

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
  variable: '--font-roboto',
});

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-merriweather',
});

export const metadata = {
  title: 'Karnovah',
  description: 'Personal Business & Blog Site Under Development',
  openGraph: {
    url: 'https://karnovah.netlify.app',
    type: 'website',
    title: 'Karnovah',
    description: 'Personal Business & Blog Site Under Development', 
    images: 'https://i.postimg.cc/bwm0ZQJb/kx.png'
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <meta property="og:url" content="https://karnovah.netlify.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.openGraph.images} />
      <body className={`${diphylleia.variable} ${cinzel.variable} ${inter.variable} ${urbanist.variable} ${roboto.variable} ${merriweather.variable} font-sans`}>{children}
      </body>
    </html>
  )
}
