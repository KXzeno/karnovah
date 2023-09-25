import React from 'react';
import Image from 'next/image';

export default function Press() {
  return (
    <div className="relative container mx-auto max-w-full mb-[8rem]">

      <div className="space-x-[5%]" id="press">
        <Image 
          className="press-logo inline-block"
          src="/img/techcrunch.png"
          alt="tc-logo"
          width="300"
          height="53"
        />
        <Image 
          className="press-logo inline-block"
          src="/img/tnw.png"
          alt="tnw-logo"
          width="300"
          height="127"
        />
        <Image 
          className="press-logo inline-block"
          src="/img/bizinsider.png"
          alt="biz-insider-logo"
          width="300"
          height="52"
        />
        <Image 
          className="press-logo inline-block"
          src="/img/mashable.png"
          alt="mashable-logo"
          width="300"
          height="51"
        />
      </div>

    </div>
  );
}
