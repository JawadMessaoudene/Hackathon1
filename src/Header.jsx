import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

export const Header = () => {
  return(
    <header>
      <nav className={styles.menu}>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/form">Form</NavLink>
          </li>
          <li>
            <NavLink>About</NavLink>
          </li>
          <li>
            <NavLink>Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}