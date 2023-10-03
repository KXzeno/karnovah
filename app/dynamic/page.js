"use client";

/* Global Imports */
import React from 'react';
// import Script from 'next/script'

/* Local Imports */
import { scriptTest } from 'components';
import './styles.css';

export default function Home() {
  return (
    <>
      {scriptTest()}
      <div>
        <h2>Hello</h2>
      </div>
    </>
  );
}

