import Image from 'next/image'
/* eslint react/no-unescaped-entities */

export default function Home() {
  return (
    <div className="bg-slate-900 divide-slate-500 text-center mx-auto min-h-screen">
      <h1 className="italic text-center hover-x">Kathekon</h1>
      <p><em>Founder of <a href="https://karnovah.com/" rel="noreferrer" target="_blank" className="text-cyan-400">Karnovah</a></em></p>
      <p className="text-[13px]/[17px] text-center italic mb-4">Aspiring Web Dev</p>
      <div className="h-[200px] w-[200px] bg-green-200 mx-auto">
        s 
      </div>
      <div className="h-[200px] w-[200px] bg-red-200 mx-auto">
        w 
      </div>
    </div>
  );
}
