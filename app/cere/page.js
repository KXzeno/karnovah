/* Global Imports  */
import React from 'react';
import Image from 'next/image';

/* Local imports */
import './styles.css';

export default function Home() {
  return(
    <div>
      <div className="absolute w-full min-h-screen">
        <div className="absolute z-0 top-0 w-full h-1/2 bg-cover bg-bottom bg-[url('/img/cere-bg-transformed.png')]">
        </div>
        <div className="absolute z-20 bottom-10 left-0 right-0 inline-flex space-x-20 justify-center font-bold uppercase tracking-wide text-gray-600">
          <a href="#services" className="text-cyan-600">Services</a> 
          <a href="#work" className="text-cyan-600">Work</a> 
          <a href="#contacts" className="text-cyan-600">Contacts</a> 
        </div>
      </div> 
      <div className="relative z-10 flex min-h-screen h-auto justify-center items-center">
        <div className="relative max-w-4xl">
          <div className="absolute z-10 inset-0 bg-gradient-to-r from-primary to-secondary shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-lg">
          </div>
          <div className="relative z-20 bg-slate-950 md:flex justify-between p-12 shadow-lg rounded-lg w-full max-w-4xl">
            <div className="sm:flex flex-col justify-between space-y-6 py-6 md:pr-10">
              <div>
                <h2 className="text-lg">It's</h2>
                <h1 className="pt-1 text-5xl font-bold text-gray-800">KX</h1>
              </div>
              <p className="text-xl leading-relaxed">I am a full stack developer [...]</p>
            </div>
            <Image 
              src="/img/author.png"
              className="w-80 rounded-full flex-shrink-0"
              width="240"
              height="240"
            />
          </div>
        </div>
      </div>
      <section id="services" className="bg-gray-500 pt-20 pb-28 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h1 className="text-6xl text-gray-800">Services</h1>
            <p className="pt-2">What I Offer</p>
          </div>
          <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
            <div className="relative">
              <div className="absolute z-10 inset-0 bg-gradient-to-r from-primary to-secondary shadow-lg transform -skew-y-6 sm:-skew-y-0 sm:-rotate-6 sm:rounded-lg"></div>
              <div className="relative z-20 bg-white h-full rounded-md shadow-md px-10 py-12">
                { /* <Image 
                  src=
                />
                */ }
                <div className="px-10 pb-6">
                  <h2 className="pt-3 font-bold text-2xl text-gray-800">Responsive Websites</h2>
                  <p className="pt-3">Description [...]</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute z-10 inset-0 bg-gradient-to-r from-primary to-secondary shadow-lg transform -skew-y-6 sm:-skew-y-0 sm:-rotate-6 sm:rounded-lg"></div>
              <div className="relative z-20 bg-white h-full rounded-md shadow-md px-10 py-12">
                { /* <Image 
                  src=
                />
                */ }
                <div className="px-10 pb-6">
                  <h2 className="pt-3 font-bold text-2xl text-gray-800">Responsive Websites</h2>
                  <p className="pt-3">Description [...]</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute z-10 inset-0 bg-gradient-to-r from-primary to-secondary shadow-lg transform -skew-y-6 sm:-skew-y-0 sm:-rotate-6 sm:rounded-lg"></div>
              <div className="relative z-20 bg-white h-full rounded-md shadow-md px-10 py-12">
                { /* <Image 
                  src=
                />
                */ }
                <div className="px-10 pb-6">
                  <h2 className="pt-3 font-bold text-2xl text-gray-800">Responsive Websites</h2>
                  <p className="pt-3">Description [...]</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
