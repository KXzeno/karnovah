import React from 'react';

export default function FooterOne() {
  return(
    <footer className="bottom-0 left-0 right-0 absolute">
      <p className="text-center text-white leading-loose tracking-wider">String 5</p>
      <div className="flex items-center text-center justify-center cursor-pointer">
        <ChevronDownIcon className="fill-white" />
      </div>
    </footer>
  );
}
