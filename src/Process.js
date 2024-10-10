import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./css/cube.css";
import Cube from "./Cube";

gsap.registerPlugin(ScrollTrigger);

const processData = [
  {
    cubeClass: "one-cube",
    title: "Let's get acquainted",
    description:
      "We'll schedule a video meeting to discuss project details and get acquainted. Following that, we'll agree on terms, costs, and finalize the contract.",
  },
  {
    cubeClass: "two-cube",
    title: "Analyze competitors",
    description:
      "We'll analyze your competitors to understand the market and identify opportunities to stand out.",
  },
  {
    cubeClass: "three-cube",
    title: "Develop strategy",
    description:
      "We'll develop a comprehensive strategy to achieve your business goals effectively.",
  },
  {
    cubeClass: "four-cube",
    title: "four strategy",
    description:
      "444 We'll develop a comprehensive strategy to achieve your business goals effectively.",
  },
  {
    cubeClass: "five-cube",
    title: "5 strategy",
    description:
      "555 We'll develop a comprehensive strategy to achieve your business goals effectively.",
  },
  {
    cubeClass: "six-cube",
    title: "6 strategy",
    description:
      "666 We'll develop a comprehensive strategy to achieve your business goals effectively.",
  },
];

const Process = () => {
  const isMobile = window.innerWidth <= 600;
  const containerRef = useRef(null);
  const cubeRef = useRef(null);
  const textRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const horizontalWrapperRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth <= 600) {
      // Мобильная логика
      const sections = processData.length;
      const container = containerRef.current;
      const cube = cubeRef.current;
      const text = textRef.current;

      // Появление куба
      gsap.fromTo(
        cube,
        { opacity: 0 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: container,
            start: "top bottom",
            end: "top center",
            scrub: true,
          },
        }
      );

      // Вращение куба и смена текста
      const rotationPerStep = 360 / sections;
      gsap.to(cube, {
        rotationX: `+=${rotationPerStep * sections}`,
        rotationY: `+=${rotationPerStep * sections}`,
        rotationZ: `+=${rotationPerStep * sections}`,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top center",
          end: "bottom top",
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            const index = Math.min(
              Math.floor(progress * sections),
              sections - 1
            );
            const data = processData[index];

            if (data) {
              textRef.current.querySelector(".process-h6").textContent =
                data.title;
              textRef.current.querySelector(".process-p").textContent =
                data.description;
            }
          },
        },
      });
    } else {
      // Десктопная логика
      let ctx = gsap.context(() => {
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
          ctx.revert();
        };
      });
    }
  }, []);

  if (isMobile) {
    // Мобильная версия
    return (
      <div className="process-mobile" ref={containerRef}>
        <div className="cube-mobile">
          <Cube ref={cubeRef} cubeClass="mobile-cube" />
        </div>
        <div className="process-text" ref={textRef}>
          <h6 className="process-h6">{processData[0].title}</h6>
          <p className="process-p">{processData[0].description}</p>
        </div>
      </div>
    );
  } else {
    // Десктопная версия (ваш текущий код)
    return (
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
    );
  }
};

export default Process;
