import React from "react";
import "./css/about.css";
import photo_me_about from "./assets/img/PhotomeAbout.png";
import about from "./assets/img/about.svg";
import AnimatedText from "./AnimatedText";
import FallingBalls from "./FallingBalls";
import { Player } from "@lottiefiles/react-lottie-player";

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
          text={`Over 7 years in digital \nproduct environments, \npartnering with both \nlarge-scale organizations \nand innovative startups.\nThis experience refined \nmy strategic approach, \ndeepened my UX expertise,\nand sharpened my ability \nto align design with real \nbusiness impact.`}
        />
      </div>
      <div className="about-description-desktop">
        <AnimatedText
          text={`
					Over 7 years in digital product \nenvironments, partnering with both \nlarge-scale organizations \nand innovative startups. \nThis experience refined my strategic \napproach, deepened my UX expertise, \nand sharpened my ability to align \ndesign with real business impact.
`}
        />
      </div>

      <div className="about-Principles">
        <div className="mephoto-about">
          <img src={photo_me_about} alt="Froltsova Anna" />
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
            "I approach every product with ownership — from research and strategy to final execution. Clarity and responsibility guide my decisions."
          }
        />
        
        <AnimatedText
          blockText={
            "I believe design is not decoration, but structure. Strong products are built on research, systems, and thoughtful problem-solving."
          }
        />
        </div>
      </div>
      <div className="about_Skills">
        <AnimatedText subtitle="Skills" />
        <h3 className="about-p">
           <span>
             <strong>Product Thinking</strong> / <strong>UX Research</strong> /{" "}
             <strong>CJM</strong> / <strong>JTBD</strong>
           </span>{" "}
           /<br />
           <span>
             <strong>UX/UI Systems</strong> / <strong>iOS Product Design</strong> {" "}
           </span>{" "}
           /<br />
           <span>
             <strong>Design Direction</strong> / <strong>Creative Leadership</strong> / <strong>Dev Collaboration</strong>
           </span>
        </h3>
        <div className="about_skills-SVG">
          <Player
            src="https://lottie.host/35cf7791-d321-4ba2-b336-755f237c0d8b/X51rEiwGJY.json"
            background="transparent"
            loop
            autoplay
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </div>
  );
}

export default About;
