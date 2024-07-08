"use client";
import React from 'react';
// import Image from 'next/image';

function reducer(notices: string) {
  let msg: string;
  return notices === 'Ongoing Site Reconstruction...'
    ? 'Ongoing Site Reconstruction'
    : `${notices}.`;
}

export default function Home() {
  let [notices, dispatch] = React.useReducer(reducer, 'Ongoing Site Reconstruction');

  const id = React.useId();
  const userId: string = `${id}-username`;
  const passId: string = `${id}-password`;

  return(
    <>
      <div className="container min-w-full min-h-screen">
        <div className="flex flex-auto bg-black min-h-screen">
          <div className="place-self-center mx-auto animate-bounce hover:animate-spin">
            <p className="z-10 font-sono text-[2rem] max-sm:text-[1.1rem]">{notices}</p>
          </div>
        </div>
      </div>
    </>
  );
}
