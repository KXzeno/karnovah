/* Global Imports */
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './styles.css';

/* Local Imports */
import { Navbar, Testimonials, Features, Title, Press, Footer, } from 'components';

export default function Home() {
  return (
    <div className="rmain">

      { /* Nav Bar */ }

      <div className="pb-[4.5rem]" id="title">

        <Navbar />

        { /* Title */ }

        <div className="container mx-auto">

          <Title />

        </div>

      </div>

      <div className="bg-[#2B2730] min-h-screen">

        <div className="container z-auto mx-auto max-w-max">

          { /* Features */ }

          <Features />

        </div>

        { /* Testimonials */ }

        <Testimonials />

        { /* Press */ }

        <Press />

        { /* Pricing */ }

        <div className="container mx-auto mt-4">

          <div className="grid grid-cols-3 max-md:grid-cols-1 gap-3 card text-center" id="pricing">
            <div className="card-nested">
              <div className="p-5">
                <a href="#">
                  <h5 className="card-title">Recent Projects Showcase</h5>
                </a>
                <p className="card-content">My portfolio is a testament to my commitment to delivering exceptional web experiences. Take a look at my recent projects to see how I've transformed ideas into digital realities.</p>
                <a href="#" className="card-more">
                  See more
                  <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
                </a>
              </div>
            </div>
            <div className="card-nested">
              <div className="p-5">
                <a href="#">
                  <h5 className="card-title">Tech Insights and Blog</h5>
                </a>
                <p className="card-content">Stay informed and inspired with our tech-centric blog. Explore the latest trends, best practices, and insights in the world of web development and technology.</p>
                <a href="#" className="card-more">
                  Read more
                  <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
                </a>
              </div>
            </div>
            <div className="card-nested">
              <div className="p-5">
                <a href="#">
                  <h5 className="card-title">Get in Touch</h5>
                </a>
                <p className="card-content">Ready to elevate your online presence? Contact me today to discuss your project and discover how I can turn your ideas into a reality.</p>
                <a href="#" className="relative card-more top-6">
                  Contact me
                  <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
                </a>
              </div>
            </div>

          </div>

        </div>

        { /* Call to Action */ }

        <div className="container mx-auto max-w-full" id="cta">

          <div className="relative p-default">

            <h3 className="cta-heading">Don't tarry in mediocrity, revolutionize your platforms today.</h3>
            <button className="btn-primary mr-2" type="button">Download</button>
            <button className="btn-primary ml-2"type="button">Download</button>

          </div>

        </div>

        { /* Footer */ }

        <Footer />

      </div>

    </div>
  );
}
