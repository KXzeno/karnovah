"use client"
import React, { useState } from 'react'
import './styles.css'
import Image from 'next/image';

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

        <nav className="bg-[#352F44] md:mb-[4.5rem]">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 md:max-w-max lg:max-w-7xl lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                { /*  Mobile menu button */ }
                <button 
                  type="button" 
                  className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" 
                  aria-controls="mobile-menu"
                  aria-expanded="isMobileMenuOpen"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} // Toggle the mobile menu state
                >
                  <span className="absolute -inset-0.5"></span>
                  <span className="sr-only">Open main menu</span>
                  { /* 
                  Icon when menu is closed.

                  Menu open: "hidden", Menu closed: "block"
                  */ }
                  <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                  { /* 
                  Icon when menu is open.

                  Menu open: "block", Menu closed: "hidden"
                  */ }
                  <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Image
                    className="h-10 w-auto rounded-lg"
                    src="/manifest-destiny.svg"
                    width="16"
                    height="16"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    { /*  Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white"  */ }
                    <a href="#" className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">News</a>
                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Updates</a>
                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Projects</a>
                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">About</a>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  onClick={toggleNotificationsDropdown} // Toggle the notifications dropdown state
                >
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">View notifications</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                  </svg>
                </button>

                { /*  Profile dropdown  */ }
                <div className="relative ml-3">
                  <div>
                    <button
                      type="button"
                      className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      id="user-menu-button"
                      aria-expanded={isProfileDropdownOpen ? 'true' : 'false'}
                      aria-haspopup="true"
                      onClick={toggleProfileDropdown}
                    >
                      <span className="absolute -inset-1.5"></span>
                      <span className="sr-only">Open user menu</span>
                      <Image 
                        className="h-10 w-10 rounded-full bg-white" 
                        src="/character-contour.svg" 
                        width="16"
                        height="16"
                        alt=""
                      />
                    </button>
                  </div>

                  { /* 
                              Dropdown menu, show/hide based on menu state.

                              Entering: "transition ease-out duration-100"
                              From: "transform opacity-0 scale-95"
                              To: "transform opacity-100 scale-100"
                              Leaving: "transition ease-in duration-75"
                              From: "transform opacity-100 scale-100"
                              To: "transform opacity-0 scale-95"
                              */ }
                  <div
                    className={`absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
    isProfileDropdownOpen ? 'block' : 'hidden'}`}
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                    tabIndex="-1"
                  >
                    { /*  Active: "bg-gray-100", Not Active: ""  */ }
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          { /*  Mobile menu, show/hide based on menu state.  */ }
          <div className={`sm:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2">
              { /*  Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white"  */ }
              <a href="#" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">News</a>
              <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Updates</a>
              <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>
              <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">About</a>
            </div>
          </div>
        </nav>

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
