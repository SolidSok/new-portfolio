import './contactMe.css';
export default function ContactMe() {
  return (
    <div className="content page contact-me">
      <h1>Contact Me</h1>

      <h2>Find me at:</h2>
      <ul>
        <li>
          <b>LinkedIn:</b>{' '}
          <a
            href="https://www.linkedin.com/in/steven-sok-bb2341201/"
            rel="noreferrer"
            target="_blank">
            Steven Sok
          </a>
        </li>
        <li>
          <b>Twitter:</b>
          <a
            className="links"
            href="https://twitter.com/solidsok"
            target="_blank"
            rel="noreferrer">
            {' '}
            @SolidSok
          </a>{' '}
        </li>
        <li>
          {' '}
          <b>GitHub</b>:{' '}
          <a
            className="links"
            href="https://github.com/SolidSok"
            target="_blank"
            rel="noreferrer">
            SolidSok
          </a>
        </li>
        <li>
          {' '}
          <b>Email:</b>{' '}
          <a className="links" href="mailto:sokidsok@gmail.com">
            stevenysok@gmail.com
          </a>
        </li>
      </ul>
    </div>
  );
}
