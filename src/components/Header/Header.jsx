import React from "react";
import PropTypes from "prop-types";
import * as styles from "./Header.scss";
import { Link } from "react-router-dom";
import instagram from "../../images/instagram.svg";

console.log(instagram);
const Header = props => {
  return (
    <header className={styles.header}>
      <img src={instagram} className={styles.logo} />
      <h1>Instagram</h1>
      <nav className={styles.menu}>
        <input type="text" placeholder="search" />
        <Link to="/" className={styles.menu__item}>
          Explore
        </Link>
        <Link to="/" className={styles.menu__item}>
          Heart
        </Link>
        <Link to="/" className={styles.menu__item}>
          Profile
        </Link>
      </nav>
    </header>
  );
};

export default Header;
