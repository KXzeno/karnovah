"use client"
import React from 'react';
import Image from 'next/image';
import Carousel from 'components/carousel';
import '../globals.css';

export default function Testimonials () {
  return (
    <div className="bg-slate-700 container mx-auto max-w-full">

      <Carousel />

      <div className="relative bottom-[8rem] -mb-[8rem]" id="testimonials">

        <h2 className="pb-2"><i>Insert a friend's testimonial here after developing his website.</i></h2>
        <Image 
          className="testimonial-image rounded-full inline-block"
          src="/img/dog-img.jpg" alt="dog-profile"
          width="300"
          height="300"
        />
        <em className="pl-2">First, Last</em>

      </div>

    </div>
  );
}
