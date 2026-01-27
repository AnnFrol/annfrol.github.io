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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
          >
            <path d="M22 7h-7V5h7v2Zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168Zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219Zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061ZM3 11h3.584c2.508 0 2.906-3-.312-3H3v3Zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016Z" />
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
          >
            <path
              fillRule="evenodd"
              d="M1 12.25c0-3.495 0-5.242.57-6.62a7.5 7.5 0 0 1 4.06-4.06C7.008 1 8.755 1 12.25 1s5.242 0 6.62.57a7.5 7.5 0 0 1 4.06 4.06c.57 1.378.57 3.125.57 6.62s0 5.242-.57 6.62a7.5 7.5 0 0 1-4.06 4.06c-1.378.57-3.125.57-6.62.57s-5.242 0-6.62-.57a7.5 7.5 0 0 1-4.06-4.06C1 17.492 1 15.745 1 12.25Zm11.25-5.956a5.956 5.956 0 1 0 0 11.912 5.956 5.956 0 0 0 0-11.912Zm0 9.678a3.728 3.728 0 0 1-3.722-3.722 3.727 3.727 0 0 1 3.722-3.723 3.727 3.727 0 0 1 3.723 3.723 3.728 3.728 0 0 1-3.723 3.722Zm7.5-10.285a.937.937 0 1 1-1.875 0 .937.937 0 0 1 1.875 0Z"
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
          >
            <path
              fillRule="evenodd"
              d="M7.055 9.333c-1.93.925-3.91 1.874-5.723 2.97-.946.76.312 1.298 1.491 1.803.188.08.373.16.548.239.145.049.293.1.442.153 1.313.459 2.776.97 4.05.2 2.092-1.319 4.067-2.844 6.04-4.369.647-.5 1.293-.998 1.943-1.49l.103-.073c.554-.394 1.8-1.28 1.339-.059-1.09 1.308-2.257 2.466-3.43 3.63-.792.785-1.586 1.573-2.36 2.411-.675.602-1.376 1.812-.62 2.655 1.74 1.338 3.508 2.643 5.275 3.948.575.424 1.15.848 1.724 1.274.972.852 2.492.163 2.706-1.169l.286-1.838c.527-3.385 1.055-6.772 1.52-10.168.064-.533.136-1.066.208-1.599.174-1.292.348-2.585.403-3.884-.14-1.296-1.572-1.011-2.369-.72-4.095 1.71-8.15 3.548-12.188 5.418-.458.222-.922.445-1.388.668Z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </li>
    </ul>
  );
};

export default SocialLinks;
