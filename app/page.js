import Image from 'next/image'
/* eslint react/no-unescaped-entities */

export default function Home() {
  return (
    <div className="bg-slate-900 divide-slate-500 text-center mx-auto min-h-screen">
      <Image
        src="/img/cloud.png"
        alt="cloud-png"
        width="150"
        height="48"
      />
      <h1 className="italic text-center hover-x">Kathekon</h1>
      <p><em>Founder of <a href="https://karnovah.com/" rel="noreferrer" target="_blank" className="text-cyan-400">Karnovah</a></em></p>
      <p className="text-[13px]/[17px] text-center italic mb-4">Aspiring Full-Stack Dev</p>
      <Image
        src="/img/cloud.png"
        alt="cloud-png"
        width="150"
        height="48"
      />
      <Image 
        src="/img/mountain.png"
        alt="mountain-png" 
        width="598" 
        height="357"
        priority
      />
      <div className="h-[200px] w-[200px] bg-green-200 mx-auto">
      </div>
      <div className="h-[200px] w-[200px] bg-red-200 mx-auto">
        w 
      </div>
    </div>
  );
}
