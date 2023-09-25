import React from 'react';

export default function More() {
  return(
    <div className="grid grid-cols-3 max-lg:grid-cols-1 gap-3 card text-center" id="more-details">
      <div className="card-nested place-self-center h-64">
        <div className="inline-grid grid-rows-[2.3rem_10rem_1rem] p-5">
          <a href="#">
            <h5 className="card-title">Recent Projects</h5>
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
      <div className="card-nested place-self-center h-64">
        <div className="inline-grid grid-rows-[2.3rem_10rem_1rem] p-5">
          <a href="#">
            <h5 className="card-title">Tech Insights <span className="lg:hidden">& Blog</span></h5>
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
      <div className="card-nested place-self-center h-64">
        <div className="inline-grid grid-rows-[2.3rem_10rem_1rem] p-5">
          <a href="#">
            <h5 className="card-title">Get in Touch</h5>
          </a>
          <p className="card-content">Ready to elevate your online presence? Contact me today to discuss your project and discover how I can turn your ideas into a reality.</p>
          <a href="#" className="card-more">
            Contact me
            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </a>
        </div>
      </div>

    </div>

  )
};
