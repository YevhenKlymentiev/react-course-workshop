import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

function Header() {
  const user = {};

  function renderPrivateLinks() {
    return (
      <>
        <Link to="/profile">Profile</Link>
        <Link to="/cards">My Cards</Link>
        <Link to="/toggle">Toggle</Link>
        <Link to="/timer">Timer</Link>
      </>
    );
  }

  function renderAuthLinks() {
    return (
      <>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </>
    );
  }

  return (
    <div className={styles.container}>
      <h2>
        <Link to="/">Logo</Link>
      </h2>
      <menu>
        { user
          ? renderPrivateLinks()
          : renderAuthLinks()
        }
      </menu>
    </div>
  );
}

export default Header;
