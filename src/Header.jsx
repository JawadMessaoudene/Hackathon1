import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "./assets/logoapple.png";

export const Header = () => {
  return (
    <header>
      <img className={styles.logo} src={logo} alt="logo" />
      <nav className={styles.navBar}>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/form">Form</NavLink>
          </li>
          <li>
            <NavLink to="/map">Map</NavLink>
          </li>
          <li>
            <NavLink>About</NavLink>
          </li>
          <li>
            <NavLink>Contact</NavLink>
          </li>
        </ul>
      </nav>
      <button className={styles.donateButton}>Donate</button>
    </header>
  );
};
