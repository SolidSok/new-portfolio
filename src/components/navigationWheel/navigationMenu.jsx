import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import './nav.css';

export default function NavigationMenu() {
  return (
    <div>
      <div className="navbar">
        <div>
          <Link className="nav-item" to="/">
            <button>Home</button>
          </Link>
          <Link className="nav-item" to="/aboutme">
            <button>About Me</button>
          </Link>
          <Link className="nav-item" to="/work">
            <button>My Work</button>
          </Link>
          <Link className="nav-item" to="/contact">
            <button>Contact Me</button>
          </Link>
          <Link className="nav-item" to="/resume">
            <button>Resume</button>
          </Link>
        </div>
      </div>
      <Outlet />
      <div className="footer">
        <div className="left-footer">
          <h2>left item</h2>
        </div>
        <div className="socials">
          <h2>Socials</h2>
          <button>FaceBook</button>
          <button>Github</button>
        </div>
        <div className="quick-links">
          <h2>Quick Links</h2>
          <Link className="footer-item" to="/contact">
            <button>Contact Me</button>
          </Link>
          <Link className="footer-item" to="/resume">
            <button>Resume</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
