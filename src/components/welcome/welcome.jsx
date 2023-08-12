import './welcome.css';
export default function Welcome() {
  return (
    <div className="content page">
      <div className="welcome-header content">
        {' '}
        <img src="https://placehold.co/250x300" />
        <div className="header-right">
          <h1>Welcome to my Portfolio!</h1>
          <div className="badge-div">
            {' '}
            <span className="badge">HTML</span>
            <span className="badge">Javascript</span>
            <span className="badge">Typescript</span>
            <span className="badge">MongoDB</span>
            <span className="badge">Express</span>
            <span className="badge">React</span>
            <span className="badge">Node.js</span>
          </div>
        </div>
      </div>

      <h2>Who I Am</h2>
      <p>
        Hi, I’m Steven, a web developer with a bachelor’s degree in political
        science and a background in customer service. I made the switch to web
        development in an attempt to broaden my horizons and grow as a person.
      </p>
      <h2>My History</h2>
      <p>
        My work history has brought me to many places like the courts, retail
        stores, and even the casino. Each of these experiences have developed my
        ability to think about things from a customer’s perspective, as well as
        remain flexible enough to work as a team or independently.
      </p>
      <h2>What I Want To Do</h2>
      <p>
        As a developer I want to provide a positive user experience by
        developing applications that are effective and easy to understand. I
        want to grow from each of these experiences and constantly face new
        challenges.
      </p>
    </div>
  );
}
