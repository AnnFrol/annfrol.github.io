import React, { useState, useEffect, useCallback } from "react";
import { NavLink } from "react-router-dom";
import SocialLinks from "./components/SocialLinks/SocialLinks";
import { openEmailClient } from "./utils/email";
import { ROUTES } from "./constants";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = useCallback((event) => {
    if (menuOpen && !event.target.closest("#menuButton")) {
      setMenuOpen(false);
    }
  }, [menuOpen]);

  useEffect(() => {
    document.addEventListener("click", closeMenu);
    return () => {
      document.removeEventListener("click", closeMenu);
    };
  }, [closeMenu]);

  return (
    <>
      <header id="header">
        <div className="header_logo">
          <a href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="96"
              height="57"
              viewBox="0 0 96 57"
            >
              <path
                id="logo1"
                stroke="url(#a)"
                strokeLinecap="round"
                d="M42.9 56.5c3 .5 7-.5 11.5-5.5s18-26 20-26m-25 14c1.167-1 4.9-3 10.5-3 5.058 0 7.1 2 15.6 2M48.958 51c-8.5-2.3-11.258-9.8-6.058-17 6.5-9 16-10 21.5-10S83 26.5 88 26.5"
              />
              <path
                id="logo2"
                stroke="url(#a)"
                strokeLinecap="round"
                d="M58.459 16.982c-2 1-13.338 5.399-24.459 1.018C9.495 8.346 4.263 38.684 22.5 35c8.614-1.74 20.93-25.168 25.802-29.519 3.898-3.48 5.502 0 4.612 2 0 0-14.267 22.519-12.767 29"
              />
              <path
                id="logoANNFRO"
                fillRule="evenodd"
                d="m25 28.2 7-17h6l5.042 12.244V11.2H47.5l6 7.5v-7.5h5.458l6 7.5v-7.5h5.459v17h-4.459l-6-6.75v6.75H54.5l-6-6.75v6.75H39l-1.071-3H32.07L31 28.2h-6ZM35 17l1.5 4.2h-3L35 17Zm4 11.7c-1.232-.466-2.565-.7-4-.7-1.452 0-2.785.234-4 .7a9.5 9.5 0 0 0-3.165 1.974 9.107 9.107 0 0 0-2.076 3.036C25.253 34.87 25 36.133 25 37.5c0 1.384.253 2.648.76 3.79a8.832 8.832 0 0 0 2.075 3.01 9.29 9.29 0 0 0 3.165 2c1.215.466 2.548.7 4 .7 1.435 0 2.768-.234 4-.7a9.29 9.29 0 0 0 3.165-2 9.141 9.141 0 0 0 2.275-3.45c.57 3.576 4.02 5.35 7.524 5.35H70.96v-17h-5v4h-5l.008 5h4.991v3H60v-12h-5.5v4h-1.228l-2.772-4H44l3.39 5.06c-1.04.58-1.882 1.413-2.413 2.53a9.418 9.418 0 0 0-.711-3.08 9.433 9.433 0 0 0-2.101-3.037A9.5 9.5 0 0 0 39 28.701Zm13 13h2.5v-4H52c-1.157 0-2.001.679-2 2 .001 1.321.842 2 2 2Zm-21-4.2c0-2.341 1.48-4 4-4 2.534 0 4 1.644 4 4 0 2.344-1.48 4-4 4-2.507 0-4-1.67-4-4Z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
        <nav className="header_nav-desktop">
          <NavLink
            to={ROUTES.ABOUT}
            className={({ isActive }) =>
              isActive ? "about-link active-link" : "about-link"
            }
          >
            About
            <svg
              className="header_nav-desktop-svg"
              xmlns="http://www.w3.org/2000/svg"
              width="70"
              height="8"
              fill="none"
            >
              <path
                id="nav-desktop-svg-about"
                stroke="url(#a)"
                strokeLinecap="round"
                d="M62.687 6.439C42.125 6.439 1 6.018 1 4.333c0-2.107 61.687 0 61.687-2.107C62.687.12 6.036 9.311 6.036 6.44s64.205 0 62.946-2.106c-1.26-2.107-50.356-5.016-50.356-2.107"
              />
            </svg>
          </NavLink>
          <NavLink
            to={ROUTES.WORKS}
            className={({ isActive }) =>
              isActive ? "works-link active-link" : "works-link"
            }
          >
            Works
            <svg
              className="header_nav-desktop-svg"
              xmlns="http://www.w3.org/2000/svg"
              width="70"
              height="8"
              fill="none"
            >
              <path
                id="nav-desktop-svg-works"
                stroke="url(#a)"
                strokeLinecap="round"
                d="M62.687 6.439C42.125 6.439 1 6.018 1 4.333c0-2.107 61.687 0 61.687-2.107C62.687.12 6.036 9.311 6.036 6.44s64.205 0 62.946-2.106c-1.26-2.107-50.356-5.016-50.356-2.107"
              />
            </svg>
          </NavLink>
          <NavLink
            to={ROUTES.PROCESS}
            className={({ isActive }) =>
              isActive ? "process-link active-link" : "process-link"
            }
          >
            Process
            <svg
              className="header_nav-desktop-svg"
              xmlns="http://www.w3.org/2000/svg"
              width="106"
              height="8"
              fill="none"
            >
              <path
                id="nav-desktop-svg"
                stroke="url(#a)"
                strokeLinecap="round"
                d="M95.345 6.439C63.897 6.439 1 6.018 1 4.333c0-2.107 94.345 0 94.345-2.107C95.345.12 8.702 9.311 8.702 6.44s98.195 0 96.27-2.106c-1.925-2.107-77.015-5.016-77.015-2.107"
              />
            </svg>
          </NavLink>
        </nav>
        <nav className="header_nav-mobile">
          <button
            id="menuButton"
            className={`menu-button ${menuOpen ? "close" : ""}`}
            onClick={toggleMenu}
          >
            Menu
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="33"
              fill="none"
              viewBox="0 0 40 33"
              style={{
                position: "absolute",
                top: "50%",
                right: "10%",
                transform: "translateY(-50%)",
              }}
            >
              <path
                stroke="url(#m)"
                strokeLinecap="round"
                d="M31 11.5c-43-25-23 28-1.1 14.3C40.5 19.2 44.5.4 27 1.1c-39.3 1.8-14.8 47 7 24.7C46.4 13.2 6.2-18.8 1 19.5"
              />
              <defs>
                <linearGradient
                  id="m"
                  x1="-3.7"
                  x2="37"
                  y1="24.7"
                  y2="7.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FFA1A1" />
                  <stop offset=".5" stopColor="#EDD1CD" />
                  <stop offset="1" stopColor="#CDE052" />
                </linearGradient>
              </defs>
            </svg>
          </button>
        </nav>
      </header>
      <div id="menuItems" style={{ display: menuOpen ? "block" : "none" }}>
        <NavLink className="menu" to={ROUTES.ABOUT}>
          About
        </NavLink>
        <NavLink className="menu" to={ROUTES.WORKS}>
          Works
        </NavLink>
        <NavLink className="menu" to={ROUTES.PROCESS}>
          Process
        </NavLink>
        <button className="menu_main_button" onClick={openEmailClient}>
          <div className="main_send-message">Send Message</div>
          <div className="main_buttonSVG">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="191"
              height="103"
              fill="none"
            >
              <path
                stroke="url(#ab)"
                id="SMbuttonSVG"
                d="M29.126 84c28 25.156 114.5 31 151.5-31 37.777-63.302-74-56.023-118.5-43.5-46.71 13.145-111.5 52 2.5 77.5s170.924-47.514 82.5-74c-108.5-32.5-182 13.5-118 71Z"
              />
            </svg>
          </div>
        </button>
        <div className="sidebar">
          <button className="sidebar_button" type="button"></button>
          <SocialLinks />
        </div>
      </div>
    </>
  );
};

export default Header;
