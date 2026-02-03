import { NavLink } from "react-router-dom";
import styles from "../Styles/Nav.module.css";

const Navbar = () => {
  return (
    <nav className={`${styles.navbar} container`}>
      <div className={styles.navlogo}>
        <img
          src="https://themejunction.net/html/bexon/demo/assets/images/logos/logo.webp"
          alt="logo"
        ></img>
      </div>
      <ul className={styles.links}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Projects"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Contact"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
