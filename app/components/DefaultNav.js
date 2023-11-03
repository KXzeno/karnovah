import React from 'react';

export default function DefaultNav() {
  return (
    <div className="h-16">
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
    <div className="bg-gradient-to-t from-[#040D12] from-3% via-[#313866] via-90% to-[#352F44] to-95% h-screen">
      <div className="flex flex-col justify-center items-center pt-64">
        <p className="text-white text-5xl p-4 text-center">String 1</p>
        <div className="flex flex-col sm:flex-row w-1/2 mb-4">
          <button className="bg-white text-black rounded-full hover:text-white hover:bg-black mx-2 my-2 flex-grow border-4 border-white py-2 uppercase text-sm">String 2</button>
          <button className="bg-white text-black rounded-full hover:text-white hover:bg-black mx-2 my-2 flex-grow border-4 border-white py-2 uppercase text-sm">String 3</button>
        </div>
        <a href="#" className="underline text-white text-lg tracking-wider">String 4</a>
      </div>
    </div>
  );
}
