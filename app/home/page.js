"use client";
/* Global Imports */
import React from 'react';
import Image from 'next/image';

/*Local Imports*/
import './styles.css';
import { MenuIcon } from 'components';

export default function Home() {
  return(
    <>
      <div className="">
        <nav className="flex justify-between items-center text-white px-5 py-3 text-sm absolute top-0 inset-x-0">
          <div>
            <Image 
              className="h-8"
              src="/img/kxblade.png"
              width="32"
              height="32"
            />
          </div>
          <div className="text-md hidden md:block">
            <a href="Five" className="mx-2 text-white hover:text-gray-400">Placeholder text</a>
          </div>
          <div className="flex items-center mx-2 text-md text-white hover:text-gray-400">
            <a href="Six" className="mx-2 text-white hover:text-gray-400">1</a>
            <a href="Seven" className="mx-2 text-white hover:text-gray-400">2</a>
            <MenuIcon className="fill-white" />
          </div>
        </nav>
      </div>
    </>
  );
}
