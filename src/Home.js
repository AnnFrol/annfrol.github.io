import React from "react";
import Game from "./Game";
import photo from "./assets/img/Photome.png";
import Works from "./Works";
import Services from "./Services";
import runWorks from "./assets/img/run_works.svg";
import Cube from "./Cube";

function Home() {
  const handleClick = () => {
    const email = "Ann&desi&d@gmail&com".replace(/&/g, ".");
    window.open(`mailto:${email}?subject=New Dream Project`, "_blank");
  };

  return (
    <div>
      <Game />
      <div className="bg-desktop">
        <svg
          id="bg-desktop-one"
          height="200px"
          width="200px"
          filter="blur(100px)"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle r="48%" cx="50%" cy="50%" fill="var(--maxgreenyellow)" />
        </svg>
      </div>
      <div className="bg">
        <svg id="bg-one" xmlns="http://www.w3.org/2000/svg">
          <circle r="48%" cx="50%" cy="50%" fill="var(--maxgreenyellow)" />
        </svg>
      </div>
      <div className="main_home-title">
        <p className="main_home-title_before">Hey, I am</p>
        <h1 className="home-title">Digital Designer</h1>
      </div>
      <div className="mephoto">
        <img src={photo} alt="Froltsova Anna photo" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 174 174"
          fill="none"
        >
          <path
            id="Ears"
            vectorEffect="non-scaling-stroke"
            stroke="url(#a)"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M67.7 34.597c4.06-12.18-15.66-31.9-5.22-27.84 10.865 4.226 17.98 11.02 17.4 16.82m20.3 1.74c-4.06-9.86 15.08-11.252 15.08-21.46 0-12.76 11.02 20.88 0 29M35.64 165.385c-2.106-15.698-8.003-48.193-14.876-53.782m0 0a5.434 5.434 0 0 0-.204-.158c-1.203-.882-2.25-2.123-3.16-3.615m3.364 3.773c5.037.507 9.225-.706 9.656-4.798.303-2.873-.866-6.071-2.806-9.245m-6.85 14.043c-1.865-.188-3.845-.612-5.795-1.212m2.432-2.561c-.864-1.416-1.602-3.057-2.232-4.83m2.232 4.83c2.656-2.905 5.33-6.166 7.782-9.39m-7.782 9.39a89.902 89.902 0 0 1-2.432 2.561m.2-7.391c-1.466-4.124-2.34-8.958-2.82-13.32M15.17 103c-2.605 1.378-5.087 2.855-7.225 4.336M15.169 103a92.747 92.747 0 0 1 10.014-4.56M12.35 89.68c-.352-3.211-.49-6.166-.49-8.395 1.74 1.28 3.922 3.05 6.175 5.127M12.35 89.68C6.839 93.145 2.415 96.94 2 99.845c-.366 2.561 2.21 5.294 5.944 7.491M12.35 89.68a86.846 86.846 0 0 1 5.685-3.268m0 0c3.114 2.871 6.363 6.327 8.758 9.872m-8.758-9.872c8.666-4.568 17.605-7.56 17.605-5.127 0 1.745-3.77 8.08-8.847 15m0 0c.286.424.56.85.821 1.275m-.821-1.276c-.524.714-1.061 1.434-1.61 2.156m2.431-.88c-.789.269-1.602.563-2.43.88m2.43-.88c3.26-1.108 6.112-1.774 8.026-1.774M14.97 110.39c-2.496-.769-4.941-1.828-7.025-3.055m7.025 3.055C9.536 115.88 4.498 119.327 2 117.246c-2.748-2.29.47-6.117 5.944-9.91"
          />
        </svg>
      </div>
      <button className="main_button button" onClick={handleClick}>
        <div className="main_send-message">
          <span>Send Message</span>
        </div>
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
      <div className="main_Works">
        <div className="main_run runWORKS">
          <img src={runWorks} alt="works" />
        </div>
        <div className="bg-desktop">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="bg-desktop-four"
            height="180"
            width="180"
            filter="blur(150px)"
          >
            <circle r="48%" cx="50%" cy="50%" fill="var(--maxgreenyellow)" />
          </svg>
        </div>
        <Works />
        <Services />
      </div>
      <Cube />
    </div>
  );
}

export default Home;
