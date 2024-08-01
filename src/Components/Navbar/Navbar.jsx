import React, { useState } from 'react'

import styles from "./Navbar.module.css"
import { getImgSrc } from "../../imgImport";
import { Link } from "react-router-dom";

//Creates the navigation bar for the page.
export const Navbar = () => {
  //Detects when the menu is selected to be open.
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
      {/* Links the portfolio text at the top to load the home page*/}
      <Link className={styles.title} to="/">Portfolio</Link>
      <div className={styles.menu}>
        {/*Creates the menu image for when the screen width is lower than normal, alternating between open and close depending on the user's click*/}
        <img
          className={styles.menuButton}
          src={menuOpen ? getImgSrc("Navbar/closeIcon.png") : getImgSrc("Navbar/menuIcon.png")}
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />


        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={() => setMenuOpen(false)}>
          {/*Sets links for each of the menu texts to send the user to the corrsponding section of the page.*/}
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
