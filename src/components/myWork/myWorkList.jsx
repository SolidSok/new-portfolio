import myWork from './myWorkInfo';
import './myWork.css';
import { Link } from 'react-router-dom';
export default function MyWorkList() {
  return (
    <div className="content page">
      <h1>My Work</h1>
      {myWork.map(work => {
        return (
          <div className="card" key={work.name}>
            {' '}
            <h2>{work.project}</h2>
            {work.images.map(image => (
              <img className="project-image" src={image} />
            ))}
            <p>{work.purpose}</p>
            <Link to="/work/:project">
              {' '}
              <button>Case Study</button>
            </Link>
            <button>GItHub</button>
          </div>
        );
      })}
    </div>
  );
}
