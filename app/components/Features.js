import React from 'react';

export default function Features () {
  return (
    <div className="md:grid md:grid-cols-3 md:columns-3 gap-x-[4rem]" id="features">

      <div className="features-box">
        <svg className="mx-auto stroke-2 stroke-red-700 fill-black hover:fill-gray-950" xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 640 512">
          { /* Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */ }
          <path d="M160 24c0-13.3 10.7-24 24-24H296c13.3 0 24 10.7 24 24s-10.7 24-24 24H280L384 192H500.4c7.7 0 15.3 1.4 22.5 4.1L625 234.4c9 3.4 15 12 15 21.6s-6 18.2-15 21.6L522.9 315.9c-7.2 2.7-14.8 4.1-22.5 4.1H384L280 464h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-13.3 0-24-10.7-24-24s10.7-24 24-24h8V320H160l-54.6 54.6c-6 6-14.1 9.4-22.6 9.4H64c-17.7 0-32-14.3-32-32V288c-17.7 0-32-14.3-32-32s14.3-32 32-32V160c0-17.7 14.3-32 32-32H82.7c8.5 0 16.6 3.4 22.6 9.4L160 192h32V48h-8c-13.3 0-24-10.7-24-24zM80 240c-8.8 0-16 7.2-16 16s7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16H80z"/>
        </svg>
        <h3 className="mb-2">Immediate handling</h3>
        <p className="text-slate-500">Your projects become my priority—no time left behind.</p>
      </div>

      <div className="features-box">
        <svg className="inline-block stroke-2 stroke-red-700 fill-black hover:fill-gray-950" xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 576 512">
          { /* Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */ }
          <path d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384v47l-92.8 37.1c-21.3 8.5-35.2 29.1-35.2 52c0 56.6 18.9 148 94.2 208.3c-9 4.8-19.3 7.6-30.2 7.6H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128zm39.1 97.7c5.7-2.3 12.1-2.3 17.8 0l120 48C570 277.4 576 286.2 576 296c0 63.3-25.9 168.8-134.8 214.2c-5.9 2.5-12.6 2.5-18.5 0C313.9 464.8 288 359.3 288 296c0-9.8 6-18.6 15.1-22.3l120-48zM527.4 312L432 273.8V461.7c68.2-33 91.5-99 95.4-149.7z"/>
        </svg>
        <h3 className="mb-2">Bolstered Security</h3>
        <p className="text-slate-500">I have your <i className="pr-[0.15625rem]">front</i> covered, as well as your <i>back</i>.</p>
      </div>

      <div className="features-box"> 
        <svg className="inline-block stroke-2 stroke-red-700 fill-black hover:fill-gray-950" xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 640 512">
          { /* Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */ } 
          <path d="M128 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm32 97.3c28.3-12.3 48-40.5 48-73.3c0-44.2-35.8-80-80-80S48 51.8 48 96c0 32.8 19.7 61 48 73.3V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H288v54.7c-28.3 12.3-48 40.5-48 73.3c0 44.2 35.8 80 80 80s80-35.8 80-80c0-32.8-19.7-61-48-73.3V288H608c17.7 0 32-14.3 32-32s-14.3-32-32-32H544V169.3c28.3-12.3 48-40.5 48-73.3c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 32.8 19.7 61 48 73.3V224H160V169.3zM488 96a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM320 392a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/>
        </svg>
        <h3 className="mb-2"> Cutting-edge Tech</h3>
        <p className="text-slate-500">Latest and most effective technologies at your service.</p>
      </div>

    </div>
  )
}
