/* Global Imports */
import React from 'react';
import Image from 'next/image';
import './styles.css';

/* Local Imports */
import { Navbar, Testimonials, Features, Title, Press, Carousel } from 'components/page';

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

        <div className="container mx-auto max-w-max">

          { /* Features */ }

          <Features />

        </div>

        { /* Testimonials */ }

        <Testimonials />
        
        { /* Press */ }

        <Press />

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
