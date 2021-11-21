import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.navrightmob}>
        <div className={styles.menu}>
          <div className="dropdown dropdown-right">
            <div tabindex="0" className="m-1 btn btn-ghost btn-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </div>
            <ul
              tabindex="0"
              className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-35"
            >
              <li>
                <a>
                  <Link to="/events">Events</Link>
                </a>
              </li>
              <li>
                <a>
                  <Link to="/projects">Projects</Link>
                </a>
              </li>
              <li>
                <a>
                  <Link to="/about">About</Link>
                </a>
              </li>
              <li>
                <a>
                  <Link to="/">Blog</Link>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.logo}>
        <button className="btn btn-md btn-ghost">
          <Link to="/">OSS</Link>
        </button>
      </div>

      <div className={styles.github}>
        <button className="btn btn-md btn-ghost btn-circle">
          <Link
            to={{
              pathname: "https://github.com/ossgecr",
            }}
            target="_blank"
          >
            <svg
              height="32"
              aria-hidden="true"
              viewBox="0 0 16 16"
              version="1.1"
              width="32"
              data-view-component="true"
              className="octicon octicon-mark-github"
            >
              <path
                fill-rule="evenodd"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
              ></path>
            </svg>
          </Link>
        </button>
      </div>

      {/* for large screens */}
      <div className={styles.navright}>
        <button className="btn btn-sm btn-ghost">
          <Link to="/events">Events</Link>
        </button>
        <button className="btn btn-sm btn-ghost">
          <Link to="/projects">Projects</Link>
        </button>
        <button className="btn btn-sm btn-ghost">
          <Link to="/about">About</Link>
        </button>
        <button className="btn btn-sm btn-outline">
          <Link
            to={{
              pathname: "https://github.com/ossgecr",
            }}
            target="_blank"
          >
            GitHub
          </Link>
        </button>
        <button className="btn btn-sm btn-outline">Blog</button>
        <button className="btn btn-sm btn-outline btn-primary">
          <Link to="/login">Login</Link>
        </button>
      </div>
    </div>
  );
};

export default Header;
