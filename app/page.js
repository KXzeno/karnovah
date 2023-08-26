import Image from 'next/image'

export default function Home() {
  return (
    <div class="bg-slate-900 divide-slate-500">
      <table class="table-auto">
        <tr>
          <td><img src="/img/img-modified.png" alt="author" width="400" height="400" /></td> 
          <td>  <h1>KX</h1>
            <p><em>Founder of Void and Author of <a href="https://karnovah.com/" rel="noreferrer" target="_blank">Karnovah</a></em></p>
            <p>I am an upcoming Web Dev</p>
          </td>
        </tr>
      </table>
      <div class="border-dotted border-b-8 w-20 mx-auto"></div>
      <h3>Books and Courses</h3>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <div class="border-dotted border-b-8 w-20 mx-auto"></div>
      <h3>Work Experience</h3>
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
      <div class="border-dotted border-b-8 w-20 mx-auto"></div>
      <h3>Skills</h3>
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
      <div class="border-dotted border-b-8 w-20 mx-auto"></div>
      <a href="hobbies.html">Hobbies</a>
      <a href="contacts.html">Contacts</a>
    </div>
  )
}
