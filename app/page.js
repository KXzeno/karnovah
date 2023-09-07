import Image from 'next/image'
/* eslint react/no-unescaped-entities */

export default function Home() {
  return (
    <div className="div-main">
      <div className="bg-slate-950 py-4">
        <div className="container absolute w-72 h-24 left-[3.75rem]">
          <div className="flex justify-center relative w-[12.5rem] -right-[5rem] mx-auto">
            <Image
              className=""
              src="/img/cloud.png"
              alt="cloud-png"
              width="150"
              height="48"
            />
          </div>
        </div>
        <div className="my-8">
          <h1 className="italic text-center hover-x mt-20 mb-4">Kathekon</h1>
          <p><em>Founder of <a href="https://karnovah.com/" rel="noreferrer" target="_blank" className="text-cyan-400">Karnovah</a></em></p>
          <p className="text-[13px]/[17px] text-center italic mb-4">Aspiring Full-Stack <span className="text-yellow-300">Dev</span></p>
        </div>
        <div className="container absolute w-72 h-24 right-[3.75rem]">
          <div className="flex justify-center relative w-[12.5rem] -left-[5rem] mx-auto">
            <Image
              className=""
              src="/img/cloud.png"
              alt="cloud-png"
              width="150"
              height="48"
            />
          </div>
        </div>
        <div className="imageWrapper absolute top-12">
          <Image 
            src="/img/mountain.png"
            alt="mountain-png" 
            // width="598" 
            // height="357"
            sizes="(max-width: 768px) 100vw, 700px"
            fill
            priority
          />
        </div>
      </div>
      <div className="mid-ctr mt-24 md:mb-48">
        <div className="profile text-center relative">
          <Image
            className="mx-auto"
            src="/img/author.png"
            alt="author-profile-art"
            width="192"
            height="192"
          />
          <h2 className="text-yellow-300">Sup,</h2>
          <p className="w-5/6 text-center mx-auto">Aspiring Full-Stack Developer and Dark Fantasist with the objective to revolutionize structures through code and to instill necessary values through storytelling.</p>
        </div>
        <div className="my-hrule my-12"></div>
        <div className="skills">
          <h2 className="relative top-16 pb-7">My Skills.</h2>
          <div className="skill-row md:pb-[10rem]">
            <Image
              className="md:relative md:float-left right-[7rem] mx-auto rounded-full mb-8"
              src="/img/coding.gif"
              alt="programming-gif"
              width="272"
              height="272"
            />
            <div className="md:relative top-14">
              <h3 className="my-4 md:relative right-[3.7rem]">Front-end Development</h3>
              <p className="md:relative right-[3.7rem]">At 17, I manifested a passion for having stronger control over document processing and learned markup language with LaTeX. Over time, the passion's scope extended to functional, object oriented, machine, and scripting languages.</p>
            </div>
          </div>
          <div className="relative">
          <div className="skill-row">
            <Image
              className="md:relative md:float-right mx-auto aspect-square rounded-full mb-8"
              src="/img/reading-book.gif"
              alt="reading-book-gif"
              width="272"
              height="272"
            />
            <div className="md:relative top-14 left-2 md:text-right">
              <h3 className="my-4 md:relative right-[3.7rem]">Writing <span className="italic">and Reading</span></h3>
              <span className="font-mono md:relative right-[3.7rem]">"The most powerful person in the world is the story teller," </span>
              <span className="font-urbanist md:relative right-[3.7rem]">a visionary once said. I absorb literary worlds which offer models of realities that are conducive to a healthy outlook of the real; I write similar worlds with similar effects. </span>
          </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bot-ctr text-center mx-auto">
        <div className="my-hrule"></div>
        <div className="contact-me pt-8">
          { /* <button className="btn-primary"
            href="mailto:kaszworkx@outlook.com">
            Contact Me
          </button>
              */ }
          <a className="btn-primary appearance-none no-underline" href="mailto:kaszworkx@outlook.com">Contact Me</a>
        </div>
        <a className="footer-link" href="https://github.com/kxzeno">GitHub</a>
        <a className="footer-link" href="https://karnovah.com/">Old</a>
        <p className="">© K X</p>
      </div>
    </div>
  );
}
