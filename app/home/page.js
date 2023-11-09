"use client";
/* Global Imports */
import React from 'react';
import Image from 'next/image';

/*Local Imports*/
import './styles.css';
import { MenuIcon, DefaultNav, ChevronDownIcon, FooterOne } from 'components';

export default function Home() {
  return(
    <>
      <DefaultNav />
      <FooterOne />
    </>
  );
}
