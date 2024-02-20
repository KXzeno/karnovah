"use client";
import React from 'react';
import Image from 'next/image';

export default function Home() {
  let [notice, setNotice] = React.useState("Ongoing Site Reconstruction");

  // Automate elipse animation
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setNotice(prevNotice => prevNotice === "Ongoing Site Reconstruction..."
        ? "Ongoing Site Reconstruction"
        : `${prevNotice}.`);
    }, 500);
    return () => clearTimeout(timer);
  }, [notice]);

  return(
    <>
      <div className="container min-w-full min-h-screen">
        <div className="flex flex-auto bg-black min-h-screen">
          <div className="place-self-center mx-auto animate-bounce hover:animate-spin">
            <p className="z-10 font-sono text-[2rem] max-sm:text-[1.1rem]">{notice}</p>
          </div>
        </div>
      </div>
    </>
  );
}

{ /*
      <div className="container min-w-full min-h-screen bg-slate-900">
        <div className="flex flex-auto bg-black">
          <div className="mx-auto">
            <p>Yes</p>
          </div>
        </div>
        <div className="relative h-32 w-32 bg-black mt-8 mx-auto">
          <div className="absolute text-center inset-0"> 
            <p>Yes</p> // Will align with Head (<><p className="absolute inset-0 text-center"></>)
            <p>Yes</p>
          </div>
        </div>
      </div>
      */ }{/* inset-0 -> |t|b|l|r = 0 */}
