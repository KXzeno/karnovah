import Image from 'next/image'
/* eslint react/no-unescaped-entities */

export default function Home() {
  return (
    <div className="div-main">
      <div className="bg-slate-950">
        <div className="flex justify-center relative">
          <Image
            className="top-cloud"
            src="/img/cloud.png"
            alt="cloud-png"
            width="150"
            height="48"
          />
        </div>
        <div>
          <h1 className="italic text-center hover-x mt-20">Kathekon</h1>
          <p><em>Founder of <a href="https://karnovah.com/" rel="noreferrer" target="_blank" className="text-cyan-400">Karnovah</a></em></p>
          <p className="text-[13px]/[17px] text-center italic mb-4">Aspiring Full-Stack <span className="text-yellow-300">Dev</span></p>
        </div>
        <div className="flex justify-center relative">
          <Image
            className="bot-cloud"
            src="/img/cloud.png"
            alt="cloud-png"
            width="150"
            height="48"
          />
        </div>
        <div className="imageWrapper">
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
      <div className="mid-ctr">
        <div className="profile text-center relative">
          <Image
            className="mx-auto"
            src="/img/author.png"
            alt="author-profile-art"
            width="192"
            height="192"
          />
          <h2 className="text-yellow-300">Sup,</h2>
          <p>Aspiring Full-Stack Developer and Dark Fantasist with the objective to revolutionize structures through code and to instill necessary values through storytelling.</p>
        </div>
        <div className="my-hrule"></div>
        <div className="skills">
          <h2>My Skills.</h2>
          <div className="skill-row">
            <Image
              className="mx-auto rounded-full"
              src="/img/coding.gif"
              alt="programming-gif"
              width="300"
              height="300"
            />
            <h3>Front-end Development</h3>
            <p>At 17, I manifested a passion for having stronger control over document processing and learned markup language with LaTeX. Over time, the passion's scope extended to functional, object oriented, machine, and scripting languages. </p>
          </div>
          <div className="skill-row">
            <Image
              className="mx-auto max-w-none aspect-square rounded-full"
              src="/img/desk.gif"
              alt="books-gif"
              width="300"
              height="300"
              sizes="(max-width: 768px) 100vw, 700px"
              priority
            />
            <h3>Writing <span className="italic">and Reading</span></h3>
            <span className="font-mono">"The most powerful person in the world is the story teller," </span>
            <span className="font-urbanist">Steve Jobs once said. I absorb literary worlds which offer models of realities that are conducive to a healthy outlook of the real; I write similar worlds with similar effects. </span>
          </div>
        </div>
        <div className="my-hrule"></div>
        <div className="contact-me pt-8">
          <button className="btn-primary"
            href="mailto:name@email.com">
            Contact Me
          </button>
        </div>
      </div>
      <div className="bot-ctr space-x-4 relative">
        <a className="footer-link" href="https://github.com/kxzeno">GitHub</a>
        <a className="footer-link" href="https://karnovah.netlify.app/">Old</a>
        <p className="pr-4">© K X.</p>
      </div>
    </div>
  );
}
