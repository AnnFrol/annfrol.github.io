import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./css/cube.css";
import Cube from "./Cube";
import AnimatedText from "./AnimatedText";
import runProcess from "./assets/img/run_process.svg";
import FallingBalls from "./FallingBalls";

gsap.registerPlugin(ScrollTrigger);

const processData = [
  {
    cubeClass: "one-cube",
    title: "Let's get acquainted",
    description:
      "We'll schedule a video meeting to discuss project details and get acquainted. Following that, we'll agree on terms, costs, and finalize the contract.",
    x: 230,
    y: 150,
    z: 156,
  },
  {
    cubeClass: "two-cube",
    title: "Analysis",
    description:
      "I will conduct a competitive analysis and research the target audience for your product. This work will help create a website that is user-friendly, clear, and distinct from competitors' sites.",
    x: 131,
    y: 327,
    z: 152,
  },
  {
    cubeClass: "three-cube",
    title: "Structure Planning",
    description:
      "I will plan the logic and structure of the future website and, for large-scale projects, develop a prototype to visualize its flow. Additionally, I will gather ideas and select graphic, typographic, compositional, and color solutions, along with examples for discussion.",
    x: -140,
    y: 140,
    z: 271,
  },
  {
    cubeClass: "four-cube",
    title: "Design Creation",
    description:
      "I will create up to three design concepts for the first screen, and you can choose the one you like the most. The selected style will define the design of the entire website. I’ll continue working on it, sharing progress along the way, and provide a video presentation explaining the decisions made.",
    x: 38,
    y: 218,
    z: 450,
  },
  {
    cubeClass: "five-cube",
    title: "Website Launch",
    description:
      "I will code the approved design in React, add cool animations, make it responsive for different devices, and integrate forms and other functionality. I’ll also set up basic SEO optimization to ensure the site ranks well in search engines.",
    x: 488,
    y: 219,
    z: 217,
  },
  {
    cubeClass: "six-cube",
    title: "Post-Launch Support",
    description:
      "After the launch, I will give you access and provide a video tutorial on how to manage the site on your own. For the first month, I’ll offer free support to help with any issues or questions that may arise.",
    x: 318,
    y: 153,
    z: 156,
  },
];

const Process = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
  const containerRef = useRef(null);
  const cubeRef = useRef(null);
  const textRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const horizontalWrapperRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    window.addEventListener("resize", handleResize);

    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    if (isMobile) {
      const cube = cubeRef.current;
      const container = containerRef.current;
      const text = textRef.current;

      if (cube && container && text) {
        const sections = processData.length;
        const sectionHeight = window.innerHeight;
        const totalHeight = sectionHeight * sections;
        container.style.height = `${totalHeight}px`;

        gsap.set(cube, {
          rotateX: 230,
          rotateY: 150,
          rotateZ: 156,
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        });

        processData.forEach((data, index) => {
          const progressPosition = index / (sections - 1);

          // Вращение куба и изменение текста одновременно
          tl.to(
            cube,
            {
              rotateX: data.x,
              rotateY: data.y,
              rotateZ: data.z,
              duration: 0.05,
              ease: "none",
              onUpdate: () => {
                // Изменение текста в процессе вращения куба
                text.querySelector(".process-h6").textContent = data.title;
                text.querySelector(".process-p").textContent = data.description;
              },
            },
            progressPosition
          );
        });
      }
    } else {
      const horizontalWrapper = horizontalWrapperRef.current;
      const scrollContainer = scrollContainerRef.current;

      const updateAnimation = () => {
        const totalWidth = horizontalWrapper.scrollWidth;
        const viewportWidth = window.innerWidth;

        // Удаляем предыдущие ScrollTrigger
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

        gsap.to(horizontalWrapper, {
          x: -(totalWidth - viewportWidth),
          ease: "none",
          scrollTrigger: {
            trigger: scrollContainer,
            start: "top top",
            end: () => `+=${totalWidth - viewportWidth}`,
            pin: true,
            scrub: true,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });
      };

      updateAnimation();
      window.addEventListener("resize", updateAnimation);

      return () => {
        window.removeEventListener("resize", updateAnimation);
      };
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isMobile]);

  return (
    <div>
      <div className="bg-desktop">
        <svg
          className="bg-process-one"
          height="200px"
          width="200px"
          filter="blur(110px)"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle r="48%" cx="50%" cy="50%" fill="var(--pink)" />
        </svg>
      </div>
      <div className="bg">
        <svg
          className="bg-process"
          height="300px"
          width="300px"
          filter="blur(200px)"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle r="48%" cx="50%" cy="50%" fill="var(--maxgreenyellow)" />
        </svg>
      </div>

      <div className="process-H1">
        <AnimatedText page="process" title="Process" />
      </div>
      <FallingBalls page="process" />
      {isMobile ? (
        <div className="process-mobile-container" ref={containerRef}>
          <div className="process-mobile">
            <Cube ref={cubeRef} cubeClass="mobile-cube" />
            <div className="process-text" ref={textRef}>
              <h6 className="process-h6">{processData[0].title}</h6>
              <p className="process-p">{processData[0].description}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="scroll-container" ref={scrollContainerRef}>
          <div className="horizontal_wrapper" ref={horizontalWrapperRef}>
            <div className="scene">
              {processData.map((data, index) => (
                <div
                  key={index}
                  className={`process ${data.cubeClass.split("-")[0]}-process`}
                >
                  <div className="process-text">
                    <h6 className="process-h6">{data.title}</h6>
                    <p>{data.description}</p>
                  </div>
                  <Cube cubeClass={data.cubeClass} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Process;
