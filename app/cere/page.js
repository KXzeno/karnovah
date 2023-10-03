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
          <div className="relative z-20 bg-[#2C3333] md:flex justify-between p-12 shadow-lg rounded-lg w-full max-w-4xl">
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
            <p className="pt-2 text-xl">What I Offer</p>
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
      <section id="work" className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-gray-700">Work</h1>
            <p className="pt-2 text-xl">My portfolio</p>
          </div>
          <div className="grid mt-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
            <div className="bg-white rounded-md shadow-md lg:col-span-2">
              { /* <Image 
                  src=
                  className="object-cover w-full h-80 rounded-t-md"
                  />
                  */ }
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800">Work Title</h3>
                <p className="pt-3">[ ... ]</p>
                <a href="" className="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-primary to-secondary rounded-md shadow-md text-white font-bold text-sm">View More</a>
              </div>
            </div>
            <div className="bg-white rounded-md shadow-md">
              { /* <Image 
                  src=
                  className="object-cover w-full h-80 rounded-t-md"
                  />
                  */ }
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800">Work Title</h3>
                <p className="pt-3">[ ... ]</p>
                <a href="" className="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-primary to-secondary rounded-md shadow-md text-white font-bold text-sm">View More</a>
              </div>
            </div>
            <div className="bg-white rounded-md shadow-md">
              { /* <Image 
                  src=
                  className="object-cover w-full h-80 rounded-t-md"
                  />
                  */ }
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800">Work Title</h3>
                <p className="pt-3">[ ... ]</p>
                <a href="" className="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-primary to-secondary rounded-md shadow-md text-white font-bold text-sm">View More</a>
              </div>
            </div>
            <div className="bg-white rounded-md shadow-md lg:col-span-2">
              { /* <Image 
                  src=
                  className="object-cover w-full h-80 rounded-t-md"
                  />
                  */ }
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800">Work Title</h3>
                <p className="pt-3">[ ... ]</p>
                <a href="" className="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-primary to-secondary rounded-md shadow-md text-white font-bold text-sm">View More</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contacts" className="pt-20 pb-36 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-gray-700">Contact</h1>
            <p className="pt-2 text-xl">Get in touch</p>
          </div>
          <div className="mt-16 relative max-w-4xl mx-auto">
            <div className="absolute z-10 inset-0 bg-gradient-to-r from-primary to-secondary shadow-lg transform -skew-y-6 sm:skew-y-0 sm:rotate-6 sm:rounded-lg">
            </div>
            <div className="relative z-20 bg-white rounded-md shadow-md p-12">
              <form action="">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                  <input type="text" placeholder="Name" 
                    className="border border-gray-200 outline-none px-4 py-2 rounded-md hover:border-gray-400 focus:border-gray-600 text-black placeholder:text-slate-400" />
                  <input type="email" placeholder="E-mail" 
                    className="border border-gray-200 outline-none px-4 py-2 rounded-md hover:border-gray-400 focus:border-gray-600 text-black" />
                  <input type="text" placeholder="Subject" 
                    className="border border-gray-200 outline-none px-4 py-2 rounded-md hover:border-gray-400 focus:border-gray-600 md:col-span-2 text-black" />
                  <textarea 
                    className="border border-gray-200 outline-none px-4 py-2 rounded-md hover:border-gray-400 focus:border-gray-600 md:col-span-2 text-black" 
                    rows="5" placeholder="Message"></textarea>
                </div>
                <button className="inline-block w-auto mt-4 px-6 py-2 bg-gradient-to-r from-primary to-secondary rounded-md shadow-md text-white font-bold text-sm">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
