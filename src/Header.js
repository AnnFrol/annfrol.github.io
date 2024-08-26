import React, { useState, useEffect } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
	setMenuOpen(!menuOpen);
  };

  const closeMenu = (event) => {
	if (menuOpen && !event.target.closest('#menuButton')) {
	  setMenuOpen(false);
	}
  };

  useEffect(() => {
	document.addEventListener('click', closeMenu);
	return () => {
	  document.removeEventListener('click', closeMenu);
	};
  }, [menuOpen]);
  
return (
  <>
	<header id="header">
	  <div className="header_logo">
		<a href="/">
		 <svg xmlns="http://www.w3.org/2000/svg" width="96" height="57" viewBox="0 0 96 57">
			   <path id="logo1"
				 stroke="url(#a)"
				 strokeLinecap="round"
				 d="M42.9 56.5c3 .5 7-.5 11.5-5.5s18-26 20-26m-25 14c1.167-1 4.9-3 10.5-3 5.058 0 7.1 2 15.6 2M48.958 51c-8.5-2.3-11.258-9.8-6.058-17 6.5-9 16-10 21.5-10S83 26.5 88 26.5"
			   />
			   <path id="logo2"
				 stroke="url(#a)"
				 strokeLinecap="round"
				 d="M58.459 16.982c-2 1-13.338 5.399-24.459 1.018C9.495 8.346 4.263 38.684 22.5 35c8.614-1.74 20.93-25.168 25.802-29.519 3.898-3.48 5.502 0 4.612 2 0 0-14.267 22.519-12.767 29"
			   />
			   <path id="logoANNFRO"
				 fillRule="evenodd"
				 d="m25 28.2 7-17h6l5.042 12.244V11.2H47.5l6 7.5v-7.5h5.458l6 7.5v-7.5h5.459v17h-4.459l-6-6.75v6.75H54.5l-6-6.75v6.75H39l-1.071-3H32.07L31 28.2h-6ZM35 17l1.5 4.2h-3L35 17Zm4 11.7c-1.232-.466-2.565-.7-4-.7-1.452 0-2.785.234-4 .7a9.5 9.5 0 0 0-3.165 1.974 9.107 9.107 0 0 0-2.076 3.036C25.253 34.87 25 36.133 25 37.5c0 1.384.253 2.648.76 3.79a8.832 8.832 0 0 0 2.075 3.01 9.29 9.29 0 0 0 3.165 2c1.215.466 2.548.7 4 .7 1.435 0 2.768-.234 4-.7a9.29 9.29 0 0 0 3.165-2 9.141 9.141 0 0 0 2.275-3.45c.57 3.576 4.02 5.35 7.524 5.35H70.96v-17h-5v4h-5l.008 5h4.991v3H60v-12h-5.5v4h-1.228l-2.772-4H44l3.39 5.06c-1.04.58-1.882 1.413-2.413 2.53a9.418 9.418 0 0 0-.711-3.08 9.433 9.433 0 0 0-2.101-3.037A9.5 9.5 0 0 0 39 28.701Zm13 13h2.5v-4H52c-1.157 0-2.001.679-2 2 .001 1.321.842 2 2 2Zm-21-4.2c0-2.341 1.48-4 4-4 2.534 0 4 1.644 4 4 0 2.344-1.48 4-4 4-2.507 0-4-1.67-4-4Z"
				 clipRule="evenodd"
			   />
		   </svg>
		</a>
	  </div>
	  <nav className="header_nav-desktop">
		<a className="projects-link" href="/projects">
		  Projects
		  <svg className="header_nav-desktop-svg" xmlns="http://www.w3.org/2000/svg" width="106" height="8" fill="none">
			<path
			  id="nav-desktop-svg"
			  stroke="url(#a)"
			  strokeLinecap="round"
			  d="M95.345 6.439C63.897 6.439 1 6.018 1 4.333c0-2.107 94.345 0 94.345-2.107C95.345.12 8.702 9.311 8.702 6.44s98.195 0 96.27-2.106c-1.925-2.107-77.015-5.016-77.015-2.107"
			/>
		  </svg>
		</a>
		<a className="about-link" href="/about">
		  About
		  <svg className="header_nav-desktop-svg" xmlns="http://www.w3.org/2000/svg" width="70" height="8" fill="none">
			<path
			  id="nav-desktop-svg-about"
			  stroke="url(#a)"
			  strokeLinecap="round"
			  d="M62.687 6.439C42.125 6.439 1 6.018 1 4.333c0-2.107 61.687 0 61.687-2.107C62.687.12 6.036 9.311 6.036 6.44s64.205 0 62.946-2.106c-1.26-2.107-50.356-5.016-50.356-2.107"
			/>
		  </svg>
		</a>
	  </nav>
	  <nav className="header_nav-mobile">
		<button  id="menuButton"
			className={`menu-button ${menuOpen ? 'close' : ''}`}
			onClick={toggleMenu}
		  >
			Menu
			<svg xmlns="http://www.w3.org/2000/svg" width="40" height="33" fill="none" viewBox="0 0 40 33" style={{ position: 'absolute', top: '50%', right: '10%', transform: 'translateY(-50%)' }}>
			  <path
				stroke="url(#m)"
				strokeLinecap="round"
				d="M31 11.5c-43-25-23 28-1.1 14.3C40.5 19.2 44.5.4 27 1.1c-39.3 1.8-14.8 47 7 24.7C46.4 13.2 6.2-18.8 1 19.5"
			  />
			  <defs>
				<linearGradient id="m" x1="-3.7" x2="37" y1="24.7" y2="7.5" gradientUnits="userSpaceOnUse">
				  <stop stopColor="#FFA1A1" />
				  <stop offset=".5" stopColor="#EDD1CD" />
				  <stop offset="1" stopColor="#CDE052" />
				</linearGradient>
			  </defs>
			</svg>
		  </button>
	  </nav>
	</header>
	<div id="menuItems" style={{ display: menuOpen ? 'block' : 'none' }}>
	<a className="menu active-menu" href="/">Home</a>
	<a className="menu projects-link" href="/projects">Projects</a>
	<a className="menu about-link" href="/about">About</a>
	<button
	  className="menu_main_button"
	  onClick={() => {
		const email = 'Ann&desi&d@gmail&com'.replace(/&/g, '.');
		window.open(`mailto:${email}?subject= New Dream Project`, '_blank');
	  }}
	>
	  <div className="main_send-message">Send Message</div>
	  <div className="main_buttonSVG">
		  <svg xmlns="http://www.w3.org/2000/svg" width="191" height="103" fill="none">
			<path stroke="url(#ab)" id="SMbuttonSVG" d="M29.126 84c28 25.156 114.5 31 151.5-31 37.777-63.302-74-56.023-118.5-43.5-46.71 13.145-111.5 52 2.5 77.5s170.924-47.514 82.5-74c-108.5-32.5-182 13.5-118 71Z" />
		  </svg>
		</div>
	  </button>
	  <div className="sidebar">
		<button className="sidebar_button" type="button"></button>
		<ul className="sidebar_list">
		  <li className="sidebar_item">
			<a className="sidebar_link sidebar_be" target="_blank" href="https://www.behance.net/AnnKolnbro">
			  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
				<path fill="#fff" d="M18.667 8.333H14V7h4.667v1.333ZM19.817 15c-.294.865-1.352 2-3.4 2-2.05 0-3.71-1.153-3.71-3.783 0-2.607 1.55-3.947 3.644-3.947 2.055 0 3.31 1.188 3.584 2.95.052.338.072.793.063 1.427h-5.351c.086 2.141 2.322 2.208 3.058 1.353h2.112Zm-5.124-2.667h3.31c-.07-1.031-.757-1.479-1.651-1.479-.977 0-1.518.512-1.659 1.48Zm-6.382 4.659H4V7.014h4.635c3.651.054 3.72 3.63 1.814 4.604 2.307.84 2.384 5.374-2.138 5.374s-2.138-4.748 0-4.748 2.138-5.374-2.138-5.374c-1.736 0-1.936 2-0.209 2H6v2h2.26v2.01H6v2.01h2.227c2.037 0 1.912-2.01.034-2.01Z" />
			  </svg>
			</a>
		  </li>
		  <li className="sidebar_item">
			<a className="sidebar_link sidebar_inst" target="_blank" href="https://www.instagram.com/ann_kolnobr/">
			  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
				<path fill="#fff" fillRule="evenodd" d="M5 11.5c0-2.33 0-3.495.38-4.413A5 5 0 0 1 8.086 4.38C9.006 4 10.17 4 12.5 4c2.33 0 3.494 0 4.413.38a5 5 0 0 1 2.706 2.707C20 8.005 20 9.17 20 11.5s0 3.495-.38 4.413a5 5 0 0 1-2.706 2.706C15.994 19 14.83 19 12.5 19c-2.33 0-3.495 0-4.414-.38a5 5 0 0 1-2.706-2.707C5 14.995 5 13.83 5 11.5Zm7.5-3.97a3.97 3.97 0 1 0 0 7.94 3.97 3.97 0 0 0 0-7.94Zm0 6.452a2.485 2.485 0 0 1-2.482-2.482A2.484 2.484 0 0 1 12.5 9.018a2.484 2.484 0 0 1 2.482 2.482 2.485 2.485 0 0 1-2.482 2.482Zm5-6.857a.625.625 0 1 1-1.25 0 .625.625 0 0 1 1.25 0Z" clipRule="evenodd" />
			  </svg>
			</a>
		  </li>
		  <li className="sidebar_item">
			<a className="sidebar_link sidebar_tg" target="_blank" href="https://annkolnobro.t.me/">
			  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
				<path fill="#fff" fillRule="evenodd" d="M8.44 10.563c-1.096.52-2.222 1.054-3.251 1.67-.538.428.177.73.847 1.014.107.045.212.09.311.135.083.027.166.056.251.085.746.259 1.577.546 2.301.114 1.19-.743 2.311-1.6 3.432-2.458.368-.281.735-.562 1.104-.839l.059-.04c.314-.222 1.022-.72.76-.034-.619.736-1.282 1.387-1.949 2.042-.45.442-.9.885-1.34 1.356-.384.339-.782 1.02-.353 1.494.99.752 1.994 1.486 2.998 2.22l.979.717c.553.48 1.416.092 1.537-.658l.163-1.033c.3-1.904.6-3.81.864-5.72.036-.3.077-.6.118-.9.099-.726.198-1.454.229-2.184-.08-.73-.893-.569-1.346-.405-2.327.962-4.63 1.996-6.925 3.048l-.789.376Z" clipRule="evenodd" />
			  </svg>
			</a>
		  </li>
		</ul>
	  </div>
	</div>
	</>
  );
}

export default Header;
