import './resume.css';
export default function Resume() {
  return (
    <div className="content page">
      <h1>Resume</h1>
      <div className="resume resume-top">
        <div className="resume-top-left">
          <h2>Steven Sok</h2>
          <p>Full Stack Web Developer</p>
        </div>
        <div className="resume-top-right">
          <ul>
            <li>(951) 704-5768</li>
            <li>Riverside County, CA</li>
            <li>Stevenysok@gmail.com</li>
            <li>Github.com/solidsok</li>
          </ul>
        </div>
      </div>
      <div className="resume resume-summary">
        <div className="resume-summary-left">
          <h2>About Me</h2>
        </div>
        <div className="resume-summary-right">
          Web developer with a background in political science and customer
          service. Experienced in working with different types of people and
          environments and providing a positive customer experience.
        </div>
      </div>

      <div className="resume resume-middle">
        <div className="resume-education">
          <h2>Education</h2>
          <p>
            <b>CSU San Marcos</b>
          </p>
          <p>Bachelor of Arts: Political Science</p>
          <p>2012-2014</p>
        </div>
        <div className="resume-skills">
          {' '}
          <h2>Skills</h2>
          <ul>
            <li>Javascript, Typescript, HTML, CSS</li>
            <li>React, Angular</li>
            <li>React Native, Expo</li>
            <li>Bootstrap, Material Design</li>
          </ul>
          <ul>
            <li>Node.JS, Express</li>
            <li>MongoDB, PostgreSQL</li>
            <li>Heroku, Firebase, Netlify, AWS</li>
          </ul>
        </div>
      </div>
      <div className="resume resume-bottom">
        <div className="work-experience">
          <h2>Work Experience</h2>
          <ul>
            <h3>Banker</h3>

            <li>
              Oversee table games to ensure rules are followed and payouts are
              accurate
            </li>
            <li>Responsible for transfer of funds between banks</li>
            <li>
              Input daily activity for banks to make sure records are up to date
            </li>
          </ul>
          <h2>Dev Projects</h2>
          <ul>
            <h3>Riverbank Poker Tournaments</h3>
            <li>App for local community poker tournaments</li>
            <li>
              Updates automatically whenever new tournament data is input to
              display rankings and tournament data
            </li>
          </ul>
          <ul>
            <h3>Engage Builder</h3>
            <li>
              Application for fans of the game, Fire Emblem Engage, to build and
              view parameters and abilities of their units
            </li>
          </ul>
          <ul>
            <h3>Eorzean Cuisine App</h3>
            <li>Full-stack application using MongoDB, React, and Express</li>
            <li>
              Application pulls data from database to display information about
              certain foods and locations from the video game, Final Fantasy 14
            </li>
          </ul>
        </div>
        <div className="certifications">
          <h2>Certifications</h2>
          <ul>
            <h3>Full-Stack Web Development</h3>
            <p>Career Foundy</p>
            <p>April 2022 - October 2022</p>
            <li>Javascript</li>
            <li>Server-side Programming & Node.js</li>
            <li>Client-side Programming & React</li>
            <li>Testing in the Development Process</li>
            <li>Native App Development & React Native</li>
            <li>Collaboration and Documentation</li>
          </ul>
          <ul>
            <h3>Google IT Tech Support</h3>
            <p>Coursera</p>
            <p>June 2020 - September 2020</p>
            <li>IT Security</li>
            <li>Operating Systems</li>
            <li>System Administration and IT Infrastructure Services</li>
            <li>Computer Networking</li>
            <li>Technical Support Fundamentals</li>
          </ul>
        </div>
      </div>
      <a href="./resume.pdf" download>
        <button>Download PDF</button>
      </a>
    </div>
  );
}
