import React from "react";
import { SOCIAL_LINKS } from "../../constants";
import "./SocialLinks.css";

const SocialLinks = ({ className = "" }) => {
  return (
    <ul className={`sidebar_list ${className}`}>
      <li className="sidebar_item">
        <a
          className="sidebar_link sidebar_be"
          target="_blank"
          href={SOCIAL_LINKS.behance}
          rel="noopener noreferrer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
            <path
              fill="#fff"
              d="M18.667 8.333H14V7h4.667v1.333ZM19.817 15c-.294.865-1.352 2-3.4 2-2.05 0-3.71-1.153-3.71-3.783 0-2.607 1.55-3.947 3.644-3.947 2.055 0 3.31 1.188 3.584 2.95.052.338.072.793.063 1.427h-5.351c.086 2.141 2.322 2.208 3.058 1.353h2.112Zm-5.124-2.667h3.31c-.07-1.031-.757-1.479-1.651-1.479-.977 0-1.518.512-1.659 1.48Zm-6.382 4.659H4V7.014h4.635c3.651.054 3.72 3.63 1.814 4.604 2.307.84 2.384 5.374-2.138 5.374ZM6 11h2.39c1.671 0 1.937-2-.209-2H6v2Zm2.26 2H6v2.01h2.227c2.037 0 1.912-2.01.034-2.01Z"
            />
          </svg>
        </a>
      </li>
      <li className="sidebar_item">
        <a
          className="sidebar_link sidebar_inst"
          target="_blank"
          href={SOCIAL_LINKS.instagram}
          rel="noopener noreferrer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
            <path
              fill="#fff"
              fillRule="evenodd"
              d="M5 11.5c0-2.33 0-3.495.38-4.413A5 5 0 0 1 8.086 4.38C9.006 4 10.17 4 12.5 4c2.33 0 3.494 0 4.413.38a5 5 0 0 1 2.706 2.707C20 8.005 20 9.17 20 11.5s0 3.495-.38 4.413a5 5 0 0 1-2.706 2.706C15.994 19 14.83 19 12.5 19c-2.33 0-3.495 0-4.414-.38a5 5 0 0 1-2.706-2.707C5 14.995 5 13.83 5 11.5Zm7.5-3.97a3.97 3.97 0 1 0 0 7.94 3.97 3.97 0 0 0 0-7.94Zm0 6.452a2.485 2.485 0 0 1-2.482-2.482A2.484 2.484 0 0 1 12.5 9.018a2.484 2.484 0 0 1 2.482 2.482 2.485 2.485 0 0 1-2.482 2.482Zm5-6.857a.625.625 0 1 1-1.25 0 .625.625 0 0 1 1.25 0Z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </li>
      <li className="sidebar_item">
        <a
          className="sidebar_link sidebar_tg"
          target="_blank"
          href={SOCIAL_LINKS.telegram}
          rel="noopener noreferrer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
            <path
              fill="#fff"
              fillRule="evenodd"
              d="M8.44 10.563c-1.096.52-2.222 1.054-3.251 1.67-.538.428.177.73.847 1.014.107.045.212.09.311.135.083.027.166.056.251.085.746.259 1.577.546 2.301.114 1.19-.743 2.311-1.6 3.432-2.458.368-.281.735-.562 1.104-.839l.059-.04c.314-.222 1.022-.72.76-.034-.619.736-1.282 1.387-1.949 2.042-.45.442-.9.885-1.34 1.356-.384.339-.782 1.02-.353 1.494.99.752 1.994 1.486 2.998 2.22l.979.717c.553.48 1.416.092 1.537-.658l.163-1.033c.3-1.904.6-3.81.864-5.72.036-.3.077-.6.118-.9.099-.726.198-1.454.229-2.184-.08-.73-.893-.569-1.346-.405-2.327.962-4.63 1.996-6.925 3.048l-.789.376Z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </li>
    </ul>
  );
};

export default SocialLinks;
