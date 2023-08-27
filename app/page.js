import Image from 'next/image'

export default function Home() {
  return (
    <div className="bg-slate-900 divide-slate-500 text-center mx-auto space-y-8 min-h-screen flex flex-col">
      <div className="flex items-center justify-center pr-48">
        <table className="table-auto" cellSpacing="20">
          <tr>
            <td><img className="object-scale-down h-48 w-48 pr-4" src="/img/img-modified.png" alt="author" width="400" height="400" /></td> 
            <td className="italic text-center"> <h1>Kathekon</h1>
              <p><em>Founder of <a href="https://karnovah.com/" rel="noreferrer" target="_blank" className="text-cyan-400">Karnovah</a></em></p>
              <p className="text-[11px]/[17px] text-center italic">Aspiring Web Dev</p>
            </td>
          </tr>
        </table>
      </div>
      <div className="my-hrule"></div>
      <h3>Books and Courses</h3>
      <ul className="text-center">
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <div className="my-hrule"></div>
      <h3>Work Experience</h3>
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
            <td>2003-2023</td>
            <td>Lead Programmer of My Self</td>
          </tr>
          <tr>
            <td>2017</td>
            <td>2017 Researcher at The Bruh</td>
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
          </tr>
        </table>
      </div>
      <div className="my-hrule"></div>
      <div className="space-x-4 text-cyan-800 underline">
        <a href="/hobbies/">Hobbies</a>
        <a href="/contacts/">Contacts</a>
      </div>
    </div>
  )
}
