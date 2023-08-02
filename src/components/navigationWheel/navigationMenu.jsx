import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import './nav.css';

export default function NavigationMenu() {
  return (
    <div className="nav-menu">
      <div>
        <Link className="nav" to="/">
          <button>Home</button>
        </Link>
        <Link className="nav" to="/aboutme">
          <button>About Me</button>
        </Link>
        <Link className="nav" to="/work">
          <button>My Work</button>
        </Link>
        <Link className="nav" to="/contact">
          <button>Contact Me</button>
        </Link>
        <Link className="nav" to="/resume">
          <button>Resume</button>
        </Link>
      </div>
      <Outlet />
      <div className="footer">
        <div>
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
