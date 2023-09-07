import './globals.css';
// import { Inter } from 'next/font/google'
import { Urbanist, Inter, Cinzel } from 'next/font/google';
import fs from 'fs';

const imagePath = 'public/img/author.png';
const imageBuffer = fs.readFileSync(imagePath);
const imageBase64 = imageBuffer.toString('base64');
const imageDataUrl = `data:image/png;base64,${imageBase64}`;

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

export const metadata = {
  title: 'Karnovah',
  description: 'Personal Blog Site',
  openGraph: {
    images: [
      {
        url: imageDataUrl,
        width: 800,
        height: 600,
        alt: 'web-logo',
      },
    ],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${cinzel.variable} ${inter.variable} ${urbanist.variable} font-sans`}>{children}</body>
    </html>
  )
}
