import logo from './logo.svg';
import myImage from './IMG_20230226_222933.jpg';


import './App.css';

function App() {
  return (
 <div>
      <header>
        <h1>Mudassir Rehman</h1>
        <img src={myImage} alt="Profile picture" />
      </header>

      <section className="contact">
        <h2>Contact Information</h2>
        <p>Phone: 03339004605</p>
        <p>Email: Mudassirrehman1989@gmail.com</p>
        <p>
          <a href="https://www.linkedin.com/in/mudassirrehman">
            Linkedin: linkedin.com/in/mudassirrehman
          </a>
        </p>
      </section>

      <section className="education">
        <h2>Education</h2>
        <ul>
          <li className="card">Hifz e Quran [2003]</li>
          <li className="card">
            MA in Islamiyat and Arabic, [Wifaqulmadaris Multan Pakistan], [2014]
          </li>
          <li className="card">
            Full Stack Web Development Course, [IEC], [2022]
          </li>
        </ul>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Bootstrap</li>
          <li>Java Script</li>
          <li>ReactJS</li>
          <li>NextJS</li>
        </ul>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <ul>
          <li className="card">
            <a href="https://www.asimnaveed.com/">www.asimnaveed.com</a>
          </li>
          <li className="card">
            <a href="https://mudirr-mudassirrehman1989-gmailcom.vercel.app/">
              mudirr-mudassirrehman1989-gmailcom.vercel.app
            </a>
          </li>
          <li className="card">
            <a href="https://gorgeous-lebkuchen-9cb76c.netlify.app/">
              gorgeous-lebkuchen-9cb76c.netlify.app
            </a>
          </li>
        </ul>
        <h2>Visit For More</h2>
        <p className="card">
          <a href="https://github.com/Mudassirrahman/">
            github.com/Mudassirrahman
          </a>
        </p>
      </section>

      <section className="experience">
        <h2>Experience</h2>
        <ul>
          <li>
            <h3>Front End Web Developer</h3>
            <p>Mudirr.com |Nav 2022 to Feb 2023</p>
            <ul>
              <li>
                Developed responsive web pages using ReactJs and Next.Js
              </li>
              <li>
                Collaborated with team members to design and implement new
                features.
              </li>
              <li>
                Optimized website performance and ensured cross-browser
                compatibility.
              </li>
            </ul>
          </li>
          <li>
            <h3>Front End Developer Intern</h3>
   <p>IEC POD's | 2022</p>
      <ul>
        <li>Developed responsive web App using React Js.</li>
        <li>Contributed to team meetings and provided feedback on design and functionality.</li>
        <li>Learned and applied new skills in a fast-paced work environment.</li>
      </ul>
    </li>
  </ul>
</section>
</div>
  );
}

export default App;
