import myWork from './myWorkInfo';
import './myWork.css';
import { Link } from 'react-router-dom';
export default function MyWorkList() {
  return (
    <div className="content page">
      <h1>My Work</h1>
      {myWork.map(work => {
        return (
          <div className="card" key={work.urlParams}>
            {' '}
            <h2>{work.project}</h2>
            {work.images.map(image => (
              <img className="project-image" src={image} />
            ))}
            <p>{work.purpose}</p>
            <Link to={`/work/${work.urlParams}`}>
              {' '}
              <button>Case Study</button>
            </Link>
            <button>GItHub</button>
            {work.links.site !== null ? (
              <a target="_blank" rel="noreferrer" href={work.links.site}>
                <button>Website</button>
              </a>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
