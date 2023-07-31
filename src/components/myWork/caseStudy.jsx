import myWork from './myWork';
export default function CaseStudy() {
  return (
    <div className="case-study">
      <h1>My Work</h1>
      {myWork.map(work => (
        <div key={work.project}>
          <h2>{work.project}</h2>{' '}
          <div>
            <h3>Purpose</h3>

            {work.purpose.map(item => (
              <p key={item}>{item}</p>
            ))}
          </div>
          <div>
            <h3>Tech Stack</h3>
            <p>{work.techStack}</p>
          </div>
          <div>
            <h3>Dev Process</h3>
            <h4>Building the Site</h4>
            <p>{work.devProcess.process}</p>
            <h4>Methods</h4>
            <p>{work.devProcess.methods}</p>
          </div>
          <div>
            <h3>Links</h3>
            <a href={work.links.github}>Github</a>
            <br />
            {work.links.site !== null ? (
              <a href={work.links.site}>Website</a>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}
