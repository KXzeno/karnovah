"use client"
/* Global Imports */
import React, { useState } from 'react';
import './styles.css';
import Image from 'next/image';
/* Local Impoarts */
import Navbar from '@/app/components/Navbar';

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isNotificationsDropdownOpen, setIsNotificationsDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const toggleNotificationsDropdown = () => {
    setIsNotificationsDropdownOpen(!isNotificationsDropdownOpen);
  };

  return (
    <div className="rmain">

      { /* Nav Bar */ }

      { /* Old navbar, use as reference
      <div className="flex justify-center w-5/6 mx-auto">
        <p className="inline-block absolute top-2 left-[1%] max-[1000px]:text-[0.8rem]">Karnovah</p>
        <nav className="flex sm:justify-center md:space-x-4 max-[1000px]:text-[0.8rem]">
          {[
            ['Home', '/dashboard'],
            ['Team', '/team'],
            ['Projects', '/projects'],
            ['Reports', '/reports'],
          ].map(([title, url]) => (
            <a href={url} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">{title}</a>
          ))}
        </nav>
      </div>
      */ }

      <div className="pb-[4.5rem]" id="title">

        <Navbar />

        { /* Title */ }

        <div className="container mx-auto">

          <div className="h-screen lg:grid lg:grid-cols-2 lg:columns-2" id="title">

            <div className="relative">
              <h1 className="font-cinzel text-[3rem] leading-normal font-extrabold max-md:text-[2rem] max-md:text-center">Need a professional web developer to rebuild your user experience?</h1>
              <div className="max-md:flex max-md:justify-center mb-2">
                <button 
                  className="rounded-full px-2 py-[0.15625rem] bg-slate-950 mr-2 text-[1.3rem] max-md:self-center w-32"
                  type="button">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-activity inline relative right-2 bottom-[0.1rem]"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                  Works
                </button>
                <button 
                  className="rounded-full border-[0.15625rem] border-neutral-300 px-2 text-[1.3rem] max-lg:my-2 w-32"
                  type="button">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5D9C59" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-dollar-sign inline relative right-2 bottom-[0.1rem]"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                  Pricing
                </button>
              </div>
            </div>

            <div className="">
              <Image
                className=""
                src="/img/btstrp-tw.jpg"
                width="1000"
                height="1200"
                alt="pc-mockup"
              />
            </div>

          </div>

        </div>

      </div>

      <div className="bg-[#2B2730] min-h-screen">

        <div className="container mx-auto max-w-max">

          { /* Features */ }

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

        </div>

        { /* Testimonials */ }

        <div className="container mx-auto max-w-full">

          <div
            id="carouselExampleCrossfade"
            class="relative"
            data-te-carousel-init
            data-te-ride="carousel">
            { /* Carousel indicators */ }
            <div
              class="absolute inset-x-0 bottom-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
              data-te-carousel-indicators>
              <button
                type="button"
                data-te-target="#carouselExampleCrossfade"
                data-te-slide-to="0"
                data-te-carousel-active
                class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                aria-current="true"
                aria-label="Slide 1"></button>
              <button
                type="button"
                data-te-target="#carouselExampleCrossfade"
                data-te-slide-to="1"
                class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                aria-label="Slide 2"></button>
              <button
                type="button"
                data-te-target="#carouselExampleCrossfade"
                data-te-slide-to="2"
                class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                aria-label="Slide 3"></button>
            </div>

            { /* Carousel items */ }
            <div
              class="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
              { /* First item */ }
              <div
                class="relative float-left -mr-[100%] w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-te-carousel-fade
                data-te-carousel-item
                data-te-carousel-active>
                <Image
                  src="/img/dog-img.jpg"
                  class="block w-full"
                  alt="Wild Landscape" 
                  width="500"
                  height="200"
                />
              </div>
              { /* Second item */ }
              <div
                class="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-te-carousel-fade
                data-te-carousel-item>
                <Image
                  src="/img/dog-img.jpg"
                  class="block w-full"
                  alt="Camera" 
                  width="500"
                  height="200"
                />
              </div>
              { /* Third item */ }
              <div
                class="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-te-carousel-fade
                data-te-carousel-item>
                <Image
                  src="/img/dog-img.jpg"
                  class="block w-full"
                  alt="Exotic Fruits" 
                  width="500"
                  height="200"
                />
              </div>
            </div>

            { /* Carousel controls - prev item */ }
            <button
              class="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
              type="button"
              data-te-target="#carouselExampleCrossfade"
              data-te-slide="prev">
              <span class="inline-block h-8 w-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-6 w-6">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </span>
              <span
                class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
              >Previous</span
              >
            </button>
            { /* Carousel controls - next item */ }
            <button
              class="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
              type="button"
              data-te-target="#carouselExampleCrossfade"
              data-te-slide="next">
              <span class="inline-block h-8 w-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-6 w-6">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </span>
              <span
                class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
              >Next</span
              >
            </button>
          </div>

          <div className="" id="testimonials">

            <h2 className="pb-2"><i>Insert a friend's testimonial here after developing his website.</i></h2>
            <Image 
              className="testimonial-image rounded-full inline-block"
              src="/img/dog-img.jpg" alt="dog-profile"
              width="300"
              height="300"
            />
            <em className="pl-2">First, Last</em>

            { /* 
          <h2 className="testimonial-text">My dog used to be so lonely, but with TinDog's help, they've found the love of their life. I think.</h2>
          <img className="testimonial-image" src="images/lady-img.jpg" alt="lady-profile">
          <em>Beverly, Illinois</em> 
          */ } 

          </div>

        </div>

        { /* Press */ }

        <div className="container mx-auto max-w-full">

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

        { /* Pricing */ }

        <div className="container">

          <div className="" id="pricing">

            <h2>A Plan for Every Dog's Needs</h2>
            <p>Simple and affordable price plans for you and your dog</p>


            <h3>Chihuahua</h3>
            <h2>Free</h2>
            <p>5 Matches Per Day</p>
            <p>10 Messages Per Day</p>
            <p>Unlimited App Usage</p>
            <button type="button">Sign Up</button>

            <h3>Labrador</h3>
            <h2>$49 / mo</h2>
            <p>Unlimited Matches</p>
            <p>Unlimited Messages</p>
            <p>Unlimited App Usage</p>
            <button type="button">Sign Up</button>

            <h3>Mastiff</h3>
            <h2>$99 / mo</h2>
            <p>Priority Listing</p>
            <p>Unlimited Matches</p>
            <p>Unlimited Messages</p>
            <p>Unlimited App Usage</p>
            <button type="button">Sign Up</button>

          </div>

        </div>

        { /* Call to Action */ }

        <div className="container">

          <div className="" id="cta">

            <h3>Find the True Love of Your Dog's Life Today.</h3>
            <button type="button">Download</button>
            <button type="button">Download</button>

          </div>

        </div>

        { /* Footer */ }

        <div className="container">

          <footer id="footer">

            <p>© Copyright TinDog</p>

          </footer>

        </div>

      </div>

    </div>
  );
}
