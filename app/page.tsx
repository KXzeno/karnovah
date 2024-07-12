"use client";
import React, {SyntheticEvent} from 'react';
// import Image from 'next/image';
import { useRouter } from 'next/navigation';

function reducer(notices: string) {
  let msg: string;
  return notices === 'Ongoing Site Reconstruction...'
    ? 'Ongoing Site Reconstruction'
    : `${notices}.`;
}

export default function Home() {
  let [notices, dispatch] = React.useReducer(reducer, 'Ongoing Site Reconstruction');
  let [inputVal, setInputVal] = React.useState('');

  const id = React.useId();
  const userId: string = `${id}-username`;
  const passId: string = `${id}-password`;

  let router = useRouter();
  return(
    <>
      <div className="container min-w-full min-h-screen">
        <form className='inline-flex w-screen place-content-center' onSubmit={(event: SyntheticEvent) => {
          event.preventDefault();
          if (event.target && /*(event.target as HTMLInputElement).value*/ inputVal === 'kx') router.push('https://blog.karnovah.com/');
          setInputVal('');
        }}>
          <input 
            className='relative z-0 text-center translate-y-[-10%] bg-black border-none rounded-none outline-none'
            type="text"
            value={inputVal}
            onChange={event => {
              setInputVal(event.target.value);
            }}
          />
        </form>
        <div className="flex flex-auto bg-black min-h-screen">
          <div className="place-self-center mx-auto animate-bounce hover:animate-spin">
            <p className="z-10 font-sono text-[2rem] max-sm:text-[1.1rem]">{notices}</p>
          </div>
        </div>
      </div>
    </>
  );
}
