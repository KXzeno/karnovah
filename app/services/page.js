/* Global Imports */
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './styles.css';

/* Local Imports */
import { Navbar, Testimonials, Features, Title, Press, Footer, More, } from 'components';

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

        <div className="ctr-max z-auto">

          { /* Features */ }

          <Features />

        </div>

        { /* Testimonials */ }

        <Testimonials />

        { /* Press */ }

        <Press />

        { /* Details */ }

        <div className="container mx-auto my-8">

          <More />

        </div>

        { /* Call to Action */ }

        <div className="ctr-full" id="cta">

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
