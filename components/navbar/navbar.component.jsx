/* eslint-disable @next/next/no-img-element */
import styles from './navbar.module.css';

const NavBar = () => {
  return (
    <nav className={styles.navContainer}>
      <div>
        <img
          src="/airbnb-logo.png"
          alt="airbnb logo"
          className={styles.navLogo}
        />
      </div>
    </nav>
  );
};

export default NavBar;
