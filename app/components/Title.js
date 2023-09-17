import React from 'react';
import Image from 'next/image';

export default function Title () {
  return(

    <div className="h-screen lg:grid lg:grid-cols-2 lg:columns-2">

      <div className="relative">
        <h1 className="font-cinzel text-[3rem] leading-normal font-extrabold max-md:text-[2rem] max-md:text-center">Need a professional web developer to rebuild your user experience?</h1>
        <div className="max-md:flex max-md:justify-center mb-2">
          <button 
            className="rounded-full px-2 py-[0.15625rem] bg-slate-950 mr-2 text-[1.3rem] max-md:self-center w-32"
            type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-activity inline relative right-2 bottom-[0.1rem]"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
            Works
          </button>
          <button 
            className="rounded-full border-[0.15625rem] border-neutral-300 px-2 text-[1.3rem] max-lg:my-2 w-32"
            type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5D9C59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-dollar-sign inline relative right-2 bottom-[0.1rem]"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
            Pricing
          </button>
        </div>
      </div>

      <div className="">
        <Image
          className=""
          src="/img/btstrp-tw.jpg"
          width="1000"
          height="1200"
          alt="pc-mockup"
        />
      </div>

    </div>
  )
}
