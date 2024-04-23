import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a href="/" className={styles.navbar_title}>
        Portfolio
      </a>
      <div className={styles.menu}>
        <img
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          className={styles.menu_button}
          onClick={() => setMenuOpen(!menuOpen)}
          alt=""
        />
        <ul
          className={`${styles.menu_items} ${menuOpen && styles.menu_open}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#about">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
