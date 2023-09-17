"use client"; // marks as client component, every react hook that starts with "use" is indicative of a client component
import React, { useEffect } from 'react';
import Image from 'next/image';
import '../btstrp-tw-design/styles.css';

export default function Carousel () {

  useEffect(() => {
    let counter = 1;
    const interval = setInterval(() => {
      document.getElementById('radio' + counter).checked = true;
      counter++;
      if(counter > 4) {
        counter = 1;
      }
    }, 5000);
    return () => clearInterval(interval); // This is to clear the interval when the component unmounts
  }, []);

  return (
    <div className="sliderCtr">
      { /* Image Slider */ }
      <div className="slider">
        { /* Radio Buttons */ }
        <div className="slides">
          <input type="radio" name="radio-btn" id="radio1" />
          <input type="radio" name="radio-btn" id="radio2" />
          <input type="radio" name="radio-btn" id="radio3" />
          <input type="radio" name="radio-btn" id="radio4" />
          { /* Slide Images */ }
          <div className="slide first">
            <Image 
              className=""
              src="/img/caro1/1.jpg"
              width="800"
              height="500"
              alt="bg-test-1"
            />
          </div>
          <div className="slide">
            <Image 
              className=""
              src="/img/caro1/2.jpg"
              width="800"
              height="500"
              alt="bg-test-1"
            />
          </div>
          <div className="slide">
            <Image 
              className=""
              src="/img/caro1/3.jpg"
              width="800"
              height="500"
              alt="bg-test-3"
            />
          </div>
          <div className="slide">
            <Image 
              className=""
              src="/img/caro1/4.jpg"
              width="800"
              height="500"
              alt="bg-test-4"
            />
          </div>
          { /* Auto Slide */ }
          <div className="navigation-auto">
            <div className="auto-btn1"></div>
            <div className="auto-btn2"></div>
            <div className="auto-btn3"></div>
            <div className="auto-btn4"></div>
          </div>
        </div>
        { /* Manual Navigation */}
        <div className="navigation-manual">
          <label htmlFor="radio1" className="manual-btn"></label>
          <label htmlFor="radio2" className="manual-btn"></label>
          <label htmlFor="radio3" className="manual-btn"></label>
          <label htmlFor="radio4" className="manual-btn"></label>
        </div>
      </div>
    </div>
  );
}
