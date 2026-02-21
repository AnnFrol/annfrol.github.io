import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import appChooseRight from "./assets/img/AppChooseRight.png";
import webPromrating from "./assets/img/promrating.png";
import appMarkIt from "./assets/img/mark_it.png";
import bubbleWeb from "./assets/img/BubbleWeb.mp4";
import LottieFire from "./LottieFire";
import { ROUTES, APP_STORE } from "./constants";

/* Та же иконка Behance, что в футере (SocialLinks) */
function BehanceIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      aria-hidden
    >
      <path d="M22 7h-7V5h7v2Zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168Zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219Zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061ZM3 11h3.584c2.508 0 2.906-3-.312-3H3v3Zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016Z" />
    </svg>
  );
}

function WorksGrid() {
  useEffect(() => {
    const videos = document.querySelectorAll("video");
    videos.forEach((video) => {
      video.muted = true;
      video.play().catch((e) => console.log("Autoplay prevented:", e));
    });
  }, []);

  return (
    <div className="works-grid">
      <div className="work-item" id="choose-right">
        <div className="work-media">
          <Link to={ROUTES.CHOOSERIGHT} className="work-media-link">
            <img src={appChooseRight} alt="App Choose Right" />
          </Link>
          <LottieFire href={APP_STORE.CHOOSERIGHT} />
        </div>
        <div className="work-info">
          <h4 className="work-category">APP Design, Development</h4>
          <h3 className="work-description">
            <svg
              className="oneWork-SVGone"
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 70 28"
              fill="none"
            >
              <path
                stroke="url(#a)"
                vectorEffect="non-scaling-stroke"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M.5 20.5c15.7 2 54.5 5.8 62.5 1 10-6 4.5-16 0-17S12.8-.9 7.5 1.5c-6.5 3-10.5 14 2 22S58 22.5 65 16"
              />
            </svg>
            <svg
              className="oneWork-SVGtwo"
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 51 8"
              fill="none"
            >
              <path
                stroke="url(#a)"
                vectorEffect="non-scaling-stroke"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.5 4.5c14-.5 42.6-1.2 45 0 3 1.5-45-5-47-2.5S50 8.5 50 6.5c0-1.6-31-.7-46.5 0"
              />
            </svg>
            Applications for iPhones{" "}
            <a href="/chooseright">
              Choose
              <br />
              Right
            </a>{" "}
            help users make a choice <br />
            from a variety of options.
          </h3>
        </div>
      </div>

      <div className="work-item" id="mark-it">
        <div className="work-media">
          <img src={appMarkIt} alt="App Mark it" />
          <a
            href="https://www.behance.net/gallery/93143637/MarkIT-Social-AR-App?tracking_source=project_owner_other_projects"
            target="_blank"
            rel="noopener noreferrer"
            className="work-behance-link"
            aria-label="View on Behance"
          >
            <BehanceIcon />
          </a>
        </div>
        <div className="work-info">
          <h4 className="work-category">Art Direction</h4>
          <h3 className="work-description">
            <svg
              className="twoWork-SVGone"
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 25 41"
              fill="none"
            >
              <path
                stroke="url(#a)"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.595 6.808C.395 13.608.5 16 3 21.5S12.5 47 16.5 41c1.664-2.496 4.158-8.28 5.595-12.692 2.905-8.917 2.012-17.808 0-21.5-3.712-6.808-14.5-8.5-18.5 0Z"
              />
              <path
                stroke="var(--lightred)"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.309 23.237c-3.844 3.694-10.085 1.026-13.816-2.886C1.52 16.183.688 9.385 4.293 5.921c3.603-3.463 10.21-1.731 13.815 1.155 3.604 2.886 6.006 11.544 1.201 16.161Z"
              />
            </svg>
            Concept of an innovative <br />
            <strong>AR-application</strong> - Mark it.
            <br />
            Creating an ecosystem <br />
            in augmented reality.
            <br />
          </h3>
        </div>
      </div>

      <div className="work-item" id="promrating">
        <div className="work-media">
          <img src={webPromrating} alt="Promrating" />
          <a
            href="https://www.behance.net/gallery/96466109/Research-Agency"
            target="_blank"
            rel="noopener noreferrer"
            className="work-behance-link"
            aria-label="View on Behance"
          >
            <BehanceIcon />
          </a>
        </div>
        <div className="work-info">
          <h4 className="work-category">WEB Design, Micromotion</h4>
          <h3 className="work-description">
            <svg
              className="threeWork-SVGone"
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 50 22"
              fill="none"
            >
              <path
                stroke="url(#a)"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.443 16.102c-.548 1.383-1.167 2.684-1.722 3.798-2.818 5.663-20 5.766-17.977-8.592C2.362-.179 10.364.377 14.161 2.09c9.544 1.345 8.516 8.366 6.282 14.012Zm0 0c8.691 2.403 23 4.96 28.557 11.398"
              />
            </svg>
            Redesign of <strong>the research agency</strong>.<br /> There was no
            corporate identity
            <br />
            for the agency. The task is to create
            <br />a <strong>fresh</strong> and <strong>serious website</strong>.
          </h3>
        </div>
      </div>

      <div className="work-item" id="Bubble">
        <div className="work-media">
          <video src={bubbleWeb} muted loop autoPlay playsInline></video>
          <a
            href="https://www.behance.net/gallery/87550669/BUBBLE-Web"
            target="_blank"
            rel="noopener noreferrer"
            className="work-behance-link"
            aria-label="View on Behance"
          >
            <BehanceIcon />
          </a>
        </div>
        <div className="work-info">
          <h4 className="work-category">Art Direction</h4>
          <h3 className="work-description">
            <svg
              className="fourWork-SVGone"
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 52 27"
              fill="none"
            >
              <path
                stroke="url(#a)"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M1 13C1-2.207 16-.5 24.5 7 27.333 5.167 35.79-2.321 44 2c9.5 5 8 15 1.5 19-6.762 4.161-16 1-21-2C18.5 30 1 28 1 13Z"
              />
            </svg>
            <svg
              className="fourWork-SVGtwo"
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 42 37"
              fill="none"
            >
              <path
                stroke="url(#a)"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M32 .5c0 2.4-7.333 8-11 10.5-3.2 2.338-10.667-2.693-14-5.5.5 2.667 2.6 9.2 3 14 .4 4.8-6.5 9-9.5 10.5 2.667-.5 8.5-1.5 10.5-1.5s4.167 5 5 7.5c2.5-3.167 7.8-9.1 9-7.5 1.5 2 13.5 5 13.5 2.5S34 27 34 23.5c0-2.8 4.667-8.667 7.5-10-3.5.167-9.5 2.4-9.5 0V.5Z"
              />
            </svg>
            Online store for a <strong>comic book</strong>
            <br />
            publisher. Featuring the creation <br />
            of <strong>3D characters</strong> and inter-
            <br />
            universe crossovers.
          </h3>
        </div>
      </div>
    </div>
  );
}

export default WorksGrid;