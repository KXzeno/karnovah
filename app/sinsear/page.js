"use client";
/** Global Imports **/

import React from 'react';
import Image from 'next/image';

/** Local imports **/

import './styles.css';
import { MenuIcon, ChevronDownIcon, DiscordIcon } from 'components';

export default function Home() {
  return (
    <div>
      <div className="h-16">
        <nav className="flex justify-between items-center text-white px-5 py-3 text-sm absolute top-0 left-0 right-0">
          <div>
            <Image 
              className="h-8"
              src="/img/kxblade.png"
              width="32"
              height="32"
            />
          </div>
          <div className="text-md hidden md:block">
            <a href="One" className="mx-2 text-white hover:text-gray-400">One</a>
            <a href="Two" className="mx-2 text-white hover:text-gray-400">Two</a>
            <a href="Three" className="mx-2 text-white hover:text-gray-400">Three</a>
            <a href="Four" className="mx-2 text-white hover:text-gray-400">Four</a>
            <a href="Five" className="mx-2 text-white hover:text-gray-400">Five</a>
          </div>
          <div className="flex items-center mx-2 text-md text-white hover:text-gray-400">
            <a href="Six" className="mx-2 text-white hover:text-gray-400">Six</a>
            <a href="Seven" className="mx-2 text-white hover:text-gray-400">Seven</a>
            <MenuIcon className="fill-white" />
          </div>
        </nav>
      </div>
      <div className="bg-gradient-to-t from-[#040D12] from-3% via-[#313866] via-90% to-[#352F44] to-95% h-screen">
        <div className="flex flex-col justify-center items-center pt-64">
          <p className="text-white text-5xl p-4 text-center">String 1</p>
          <div className="flex flex-col sm:flex-row w-1/2 mb-4">
            <button className="bg-white text-black rounded-full hover:text-white hover:bg-black mx-2 my-2 flex-grow border-4 border-white py-2 uppercase text-sm">String 2</button>
            <button className="bg-white text-black rounded-full hover:text-white hover:bg-black mx-2 my-2 flex-grow border-4 border-white py-2 uppercase text-sm">String 3</button>
          </div>
          <a href="#" className="underline text-white text-lg tracking-wider">String 4</a>
        </div>
        <footer className="bottom-0 left-0 right-0 absolute">
          <p className="text-center text-white leading-loose tracking-wider">String 5</p>
          <div className="flex items-center text-center justify-center cursor-pointer">
            <ChevronDownIcon className="fill-white" />
          </div>
        </footer>
      </div>
    </div>
  );
}
