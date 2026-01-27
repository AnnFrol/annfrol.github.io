import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./css/projects.css";
import AnimatedText from "./AnimatedText";
import appChooseRight from "./assets/img/AppChooseRight.png";
import webPromrating from "./assets/img/promrating.png";
import appMarkIt from "./assets/img/mark_it.png";
import bubbleWeb from "./assets/img/BubbleWeb.mp4";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectsRef = useRef([]);
  const cardsRef = useRef([]);

  const projects = [
    {
      id: "choose-right",
      image: appChooseRight,
      category: "APP Design, Development",
      title: "Choose Right",
      description: "Applications for iPhones Choose Right help users make a choice from a variety of options.",
      link: "/chooseright",
    },
    {
      id: "mark-it",
      image: appMarkIt,
      category: "Art Direction",
      title: "Mark it",
      description: "Concept of an innovative AR-application - Mark it. Creating an ecosystem in augmented reality.",
    },
    {
      id: "promrating",
      image: webPromrating,
      category: "WEB Design, Micromotion",
      title: "Promrating",
      description: "Redesign of the research agency. There was no corporate identity for the agency. The task is to create a fresh and serious website.",
    },
    {
      id: "bubble",
      video: bubbleWeb,
      category: "Art Direction",
      title: "Bubble",
      description: "Online store for a comic book publisher. Featuring the creation of 3D characters and inter-universe crossovers.",
    },
  ];

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (card) {
        const media = card.querySelector(".project-media");
        const info = card.querySelector(".project-info");

        gsap.fromTo(
          card,
          {
            y: 100,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none",
              once: true,
            },
          }
        );

        if (media) {
          gsap.fromTo(
            media,
            {
              scale: 1.1,
            },
            {
              scale: 1,
              duration: 1.5,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none none",
                once: true,
              },
            }
          );
        }

        if (info) {
          gsap.fromTo(
            info,
            {
              y: 30,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              delay: 0.3,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none none",
                once: true,
              },
            }
          );
        }
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <main className="projects">
      <div className="projects-H1">
        <AnimatedText title="Projects" />
      </div>
      <div className="projects-grid" ref={projectsRef}>
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="project-card"
            ref={(el) => (cardsRef.current[index] = el)}
          >
            <div className="project-media">
              {project.video ? (
                <video src={project.video} muted loop autoPlay playsInline />
              ) : (
                <img 
                  src={project.image} 
                  alt={project.title}
                  loading="eager"
                  decoding="async"
                />
              )}
              <div className="project-overlay"></div>
            </div>
            <div className="project-info">
              <h4 className="project-category">{project.category}</h4>
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
              {project.link && (
                <Link to={project.link} className="project-link">
                  <span>View Project</span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Projects;
