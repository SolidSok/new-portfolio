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
            <div className="project-image-div">
              {' '}
              {work.images.map(image => (
                <img key={image} className="project-image" src={image} />
              ))}
            </div>
            <p>{work.purpose}</p>
            <Link to={`/work/${work.urlParams}`}>
              {' '}
              <button>Case Study</button>
            </Link>
            <a target="_blank" rel="noreferrer" href={work.links.github}>
              <button> Github</button>
            </a>
            {work.links.site !== null ? (
              <a target="_blank" rel="noreferrer" href={work.links.site}>
                <button>Website</button>
              </a>
            ) : null}
            {work.links.github2 !== undefined && (
              <a target="_blank" rel="noreferrer" href={work.links.github2}>
                <button>API Github</button>
              </a>
            )}
          </div>
        );
      })}
    </div>
  );
}
