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
    </div>
  )
}
