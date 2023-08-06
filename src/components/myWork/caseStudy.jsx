import myWork from './myWorkInfo';
import { useParams } from 'react-router';

export default function CaseStudy() {
  const { name } = useParams();
  const work = myWork.find(p => p.urlParams === name);
  return (
    <div className="case-study content page card">
      <div>
        <h1>{work.project}</h1>{' '}
        <div>
          <h2>Purpose</h2>

          {work.purpose.map(item => (
            <p key={item}>{item}</p>
          ))}
        </div>
        <div>
          <h2>Tech Stack</h2>
          <p>{work.techStack}</p>
        </div>
        <div>
          <h2>Dev Process</h2>
          <h3>Building the Site</h3>
          <p>{work.devProcess.process}</p>
          <h3>Methods</h3>
          <p>{work.devProcess.methods}</p>
        </div>
        <div>
          <h2>Links</h2>
          <a target="_blank" rel="noreferrer" href={work.links.github}>
            <button> Github</button>
          </a>
          {work.links.site !== null ? (
            <a target="_blank" rel="noreferrer" href={work.links.site}>
              <button>Website</button>
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}
