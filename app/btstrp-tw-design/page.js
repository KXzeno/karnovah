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

      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
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
                  className="h-8 w-auto"
                  src="/img/dog-img.jpg"
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
                      className="h-8 w-8 rounded-full" 
                      src="/img/author.png" 
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

      <div className="lg:columns-2" id="title">

        <div className="">
          <h1 className="font-cinzel text-[3rem] leading-normal font-extrabold">Need a professional web developer to rebuild your user experience?.</h1>
          <button type="button">Download</button>
          <button type="button">Download</button>
        </div>

        <div className="">
          <Image
            className=""
            src="/img/iphone6.png"
            width="400"
            height="807"
            alt="iphone-mockup"
          />
        </div>

      </div>


      { /* Features */ }

      <div className="" id="features">

        <h3>Easy to use.</h3>
        <p>So easy to use, even your dog could do it.</p>

        <h3>Guaranteed to work.</h3>
        <p>Find the love of your dog's life or your money back.</p>

      </div>

      { /* testimonials */ }

      <div className="" id="testimonials">

        <h2>I no longer have to sniff other dogs for love. I've found the hottest Corgi on TinDog. Woof.</h2>
        <Image 
          className=""
          src="/img/dog-img.jpg" alt="dog-profile"
          width="300"
          height="300"
        />
        <em>Pebbles, New York</em>

        { /* 
          <h2 className="testimonial-text">My dog used to be so lonely, but with TinDog's help, they've found the love of their life. I think.</h2>
          <img className="testimonial-image" src="images/lady-img.jpg" alt="lady-profile">
          <em>Beverly, Illinois</em> 
          */ } 

      </div>

      { /* Press */ }

      <div className="" id="press">
        <Image 
          src="/img/techcrunch.png"
          alt="tc-logo"
          width="300"
          height="53"
        />
        <Image 
          src="/img/tnw.png"
          alt="tnw-logo"
          width="300"
          height="127"
        />
        <Image 
          src="/img/bizinsider.png"
          alt="biz-insider-logo"
          width="300"
          height="52"
        />
        <Image 
          src="/img/mashable.png"
          alt="mashable-logo"
          width="300"
          height="51"
        />
      </div>

      { /* Pricing */ }

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

      { /* Call to Action */ }

      <div className="" id="cta">

        <h3>Find the True Love of Your Dog's Life Today.</h3>
        <button type="button">Download</button>
        <button type="button">Download</button>

      </div>

      { /* Footer */ }

      <footer id="footer">

        <p>© Copyright TinDog</p>

      </footer>

    </div>
  );
}
