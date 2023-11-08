"use client";
/* Global Imports */
import React from 'react';
import Image from 'next/image';

/*Local Imports*/
import './styles.css';
import { MenuIcon, DefaultNav, ChevronDownIcon } from 'components';

export default function Home() {
  return(
    <>
      <DefaultNav />
      <footer className="bottom-0 left-0 right-0 absolute">
        <p className="text-center text-white leading-loose tracking-wider">String 5</p>
        <div className="flex items-center text-center justify-center cursor-pointer">
          <ChevronDownIcon className="fill-white" />
        </div>
      </footer>

    </>
  );
}
