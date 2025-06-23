import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isDisplay, SetIsDisplay] = useState(false);

  return (
    <div className={styles.Navbar}>
      <div className={styles.navbar__logo}>
        <img src={logo} alt="logo" />
        <p>digital project</p>
      </div>
      <section>
        {isDisplay ? (
          <svg
            onClick={() => SetIsDisplay((prev) => !prev)}
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            class="bi bi-x-circle"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
          </svg>
        ) : (
          <svg
            onClick={() => SetIsDisplay((prev) => !prev)}
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            class="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        )}
      </section>
      <ul className={`${styles.navbar__links} ${isDisplay && styles.display}`}>
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Main
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/gallery"
            className={({ isActive }) => {
              return isActive ? styles.active : "";
            }}
          >
            gallery
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/project"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/certifications"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            certifications
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contacts"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            contacts
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
