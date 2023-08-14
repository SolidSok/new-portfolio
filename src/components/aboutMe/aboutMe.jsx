import './aboutMe.css';
export default function AboutMe() {
  return (
    <div className="content page about-me">
      <h1>About Me</h1>
      <div>
        <h2>Growing Up</h2>
        <p>
          I grew up in different parts of California living in a military
          household. Since my parents were usually busy with work, I often spent
          my time playing video games or browsing the internet on our PC. I
          would often gravitate toward browsing video game guides on sites like
          GameSpot or GameFAQs.
        </p>
        <h2>My Early Education and Work</h2>
        <p>
          Despite my interest in technology, I pursued a degree in political
          science. I graduated with a Bachelor of Arts in Political Science in
          2014 from CSU San Marcos. I intended to use this to go to law school.
          After pursuing it for awhile I decided that law was not what I wanted
          to spend my life on, and worked in a few unrelated fields, eventually
          ending up with a job at the casino. My job was relatively easy-going,
          and I liked my co-workers, but I wasn't satisfied with the work. I
          wanted something more challenging and related to my interests.
        </p>
        <h2>Web Development</h2>
        <p>
          One day, a co-worker put the idea of coding bootcamps into my head,
          and I found one by the name of CareerFoundry. They gave me a solid
          foundation to work from, and I was able to finish it online while
          working a job at a casino. Since then, I've been working on hobby
          projects and volunteer work to shore up my skills.
        </p>
        <h2>My Hobbies</h2>
        <h3>Computers</h3>
        <p>
          I have several memories growing up, of my dad showing me how to build
          and use a PC. When I was little, I didn't think much of it, and just
          wanted to play video games. These days though, I enjoy building
          computers, and like to spend free time looking at potential part
          upgrades.
        </p>
        <div className="about-me-div">
          {' '}
          <h3>Video Games</h3>
          <p>
            Growing up in a military household meant I didn't have many
            opportunities to make friends or even spend time with my parents.
            Video Games filled the void, taking me on many wondeful adventures.
            The increasing accessiblity of the internet also gave me an avenue
            to spend time with friends even if they were thousands of miles
            away.
          </p>
          <div className="about-me-images">
            <img
              className="video-game-image"
              src="assets/video-games/hsr.png"
            />
            <img
              className="video-game-image"
              src="assets/video-games/bg3.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
