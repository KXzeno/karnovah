import Image from 'next/image'

export default function Home() {
  return (
    <div className="rmain">

      { /* Nav Bar */ }

      <nav className="relative flex flex-wrap items-center content-between py-3 px-4  text-white bg-gray-900">
        <a className="inline-block pt-1 pb-1 mr-4 text-lg whitespace-no-wrap" href="">tindog</a>
        <button className="py-1 px-2 text-md leading-normal bg-transparent border border-transparent rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="px-5 py-1 border border-gray-600 rounded"></span>
        </button>
        <div className="hidden flex-grow items-center" id="navbarTogglerDemo02">
          <ul className="flex flex-wrap list-reset pl-0 mb-0 ms-auto">
            <li className="">
              <a className="inline-block py-2 px-4 no-underline" href="Contact"></a>
            </li>
            <li className="">
              <a className="inline-block py-2 px-4 no-underline" href="Pricing"></a>
            </li>
            <li className="">
              <a className="inline-block py-2 px-4 no-underline" href="">Download</a>
            </li>
          </ul>
        </div>
      </nav>

      { /* Title */ }

      <div className="" id="title">

        <div>
          <h1>Meet new and interesting dogs nearby.</h1>
          <button type="button">Download</button>
          <button type="button">Download</button>
        </div>
        <div>
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
          <h2 class="testimonial-text">My dog used to be so lonely, but with TinDog's help, they've found the love of their life. I think.</h2>
          <img class="testimonial-image" src="images/lady-img.jpg" alt="lady-profile">
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
