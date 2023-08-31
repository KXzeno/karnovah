import Image from 'next/image'
/* eslint react/no-unescaped-entities */

export default function Home() {
  return (
    <div className="bg-slate-900 divide-slate-500 text-center mx-auto space-y-8 min-h-screen flex flex-col">
      <div className="flex items-center justify-center pr-48">
        <table className="table-auto" cellSpacing="20">
          <tr>
            <td><Image className="object-scale-down h-48 w-48 pr-4" src="/img/img-modified.png" alt="author" width="400" height="400" /></td> 
            <td className="italic text-center hover-x"> <h1>Kathekon</h1>
              <p><em>Founder of <a href="https://karnovah.com/" rel="noreferrer" target="_blank" className="text-cyan-400">Karnovah</a></em></p>
              <p className="text-[11px]/[17px] text-center italic">Aspiring Web Dev</p>
            </td>
          </tr>
        </table>
      </div>
      <div className="my-hrule"></div>
      <h3 id="str-head">Currently reading</h3>
      <ul className="text-center">
        <li>Shadow & Claw</li>
        <li>Raven's Mark</li>
        <li>Mistborn</li>
        <li>The Stormlight Archive</li>
        <li>The First Law Trilogy</li>
      </ul>
      <div className="my-hrule"></div>
      <h3>Experience</h3>
      <div className="flex items-center justify-center">
        <table>
          <thead>
            <tr>
              <th>Dates</th>
              <th>Work</th>
            </tr>
          </thead>
          <tbody>

          </tbody>
          <tfoot>

          </tfoot>
          <tr>
            <td>2023</td>
            <td className="flex justify-left">Angela Yu's Fullstack Web Development Bootcamp</td>
          </tr>
          <tr>
            <td>2022-Current</td>
            <td>Karnovah, SSR Personal Website</td>
          </tr>
        </table>
      </div>
      <div className="my-hrule"></div>
      <h3>Skills</h3>
      <div className="flex items-center justify-center">
        <table cellspacing="7">
          <tr>
            <td>Java</td>
            <td>&#9733;&#9733;&#9734;&#9734;&#9734;</td>
            <td>Powershell</td>
            <td>&#9733;&#9733;&#9733;&#9734;&#9734;</td>
          </tr>
          <tr>
            <td>LaTeX</td>
            <td>&#9733;&#9733;&#9733;&#9733;&#9734;</td>
            <td>Tailwind CSS</td>
            <td>&#9733;&#9734;&#9734;&#9734;&#9734;</td>
          </tr>
          <tr>
            <td>Vim</td>
            <td>&#9733;&#9733;&#9733;&#9734;&#9734;</td>
            <td>Next.js</td>
            <td>&#9733;&#9734;&#9734;&#9734;&#9734;</td>
          </tr>
          <tr>
            <td>HTML5</td>
            <td>&#9733;&#9733;&#9733;&#9733;&#9734;</td>
            <td>JavaScript</td>
            <td>&#9733;&#9733;&#9734;&#9734;&#9734;</td>
          </tr>
        </table>
      </div>
      { /*
      <p className="-translate-y-[32px] p-[1px]">Vim &#9733;&#9733;&#9733;&#9734;&#9734;</p>
      */ }
      <div className="my-hrule"></div>
      <div className="space-x-4 text-cyan-800 underline">
        <a href="/hobbies/">Hobbies</a>
        <a href="/contacts/">Contacts</a>
      </div>
    </div>
  );
}
