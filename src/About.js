import React from "react";
import "./css/about.css";
import photo_me_about from "./assets/img/PhotomeAbout.png";
import about from "./assets/img/about.svg";
import AnimatedText from "./AnimatedText";
import FallingBalls from "./FallingBalls";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function About() {
  return (
    <div className="about">
      <div className="bg-desktop">
        <svg
          id="bg-desktop-one"
          height="200px"
          width="200px"
          filter="blur(100px)"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle r="48%" cx="50%" cy="50%" fill="var(--pink)" />
        </svg>
      </div>
      <div className="bg">
        <svg
          id="bg-one"
          className="bg-about"
          height="300px"
          width="300px"
          filter="blur(200px)"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle r="48%" cx="50%" cy="50%" fill="var(--pink)" />
        </svg>
      </div>
      <AnimatedText imgSrc={about} />
      <div className="about-h1">
        <AnimatedText page="about" title={"About me"} />
      </div>
      <FallingBalls page="about" />
      <div className="about-description">
        <AnimatedText
          text={`7 years of extensive \nexperience in web \nagencies, collaborating \nwith both large-scale \ncompanies and innovative \nsmaller ones. This has \nequipped me with the \nability to effectively \nunderstand and meet \ncompanies' preferences \nand needs.`}
        />
      </div>
      <div className="about-description-desktop">
        <AnimatedText
          text={`
					7 years of extensive experience in web \nagencies, collaborating with both \nlarge-scale companies and innovative \nsmaller ones. This has equipped me with the \nability to effectively understand and meet \ncompanies' preferences and needs.`}
        />
      </div>

      <div className="about-Principles">
        <div className="mephoto-about">
          <img src={photo_me_about} alt="Froltsova Anna photo About" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 285 285"
            fill="none"
          >
            <path
              stroke="url(#ab)"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              strokeLinejoin="round"
              d="M101.679 131.573c-9.52-7.703-6.745-17.126 4.485-22.769 11.241-5.151 16.266-.318 17.397 7.056 1.13 7.374-12.363 23.417-21.882 15.713Z"
            />
            <path
              vectorEffect="non-scaling-stroke"
              stroke="url(#ab)"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M178.832 143.378c11.501-16.99-6.842-22.055-16.681-20.876-10.843.212-8.225 8.05-5.606 15.888h0c2.619 7.838 10.785 21.978 22.287 4.988Z"
            />
          </svg>
        </div>
        <AnimatedText subtitle={"Principles \n& Guidelines"} />
        <div className="about-p">
          <AnimatedText
            blockText={
              "I am dedicated to accountability and excellence, always meeting deadlines and putting forth maximum effort."
            }
          />
          <AnimatedText
            blockText={
              "Driven by passion, I take on projects that captivate me, ensuring innovative and unique solutions."
            }
          />
          <AnimatedText
            blockText={
              "In collaboration, I prioritize respectful, harmonious relationships, fostering a positive and calm working environment."
            }
          />
        </div>
      </div>
      <div className="about_Skills">
        <AnimatedText subtitle="Skills" />
        <h3 className="about-p">
          <span>
            <strong>UX UI</strong> / <strong>Web Design</strong> /{" "}
            <strong>Motions</strong>
          </span>{" "}
          /<br />
          <span>
            <strong>Presentation</strong> / <strong>CJM</strong> /{" "}
            <strong>JTBD</strong>
          </span>{" "}
          /<br />
          <span>
            <strong>Front-End</strong>
          </span>
        </h3>
        <DotLottieReact
          className="about_skills-SVG"
          src="https://lottie.host/35cf7791-d321-4ba2-b336-755f237c0d8b/X51rEiwGJY.json"
          backgroundColor="transparent"
          mode="normal"
          direction={1}
          loop
          autoplay
        />
      </div>
    </div>
  );
}

export default About;
