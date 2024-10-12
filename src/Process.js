import React, { useEffect, useRef, useState } from "react";
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
    x: 230,
    y: 150,
    z: 156,
  },
  {
    cubeClass: "two-cube",
    title: "Analyze competitors",
    description:
      "We'll analyze your competitors to understand the market and identify opportunities to stand out.",
    x: 131,
    y: 327,
    z: 152,
  },
  {
    cubeClass: "three-cube",
    title: "Develop strategy",
    description:
      "We'll develop a comprehensive strategy to achieve your business goals effectively.",
    x: -140,
    y: 140,
    z: 271,
  },
  {
    cubeClass: "four-cube",
    title: "Four strategy",
    description:
      "444 We'll develop a comprehensive strategy to achieve your business goals effectively.",
    x: 38,
    y: 218,
    z: 450,
  },
  {
    cubeClass: "five-cube",
    title: "5 strategy",
    description:
      "555 We'll develop a comprehensive strategy to achieve your business goals effectively.",
    x: 488,
    y: 219,
    z: 217,
  },
  {
    cubeClass: "six-cube",
    title: "6 strategy",
    description:
      "666 We'll develop a comprehensive strategy to achieve your business goals effectively.",
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
            scrub: true, // Привязываем анимацию к скроллу
            // markers: true, // Для отладки
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

  if (isMobile) {
    return (
      <div className="process-mobile-container" ref={containerRef}>
        <div className="process-mobile">
          <Cube ref={cubeRef} cubeClass="mobile-cube" />
          <div className="process-text" ref={textRef}>
            <h6 className="process-h6">{processData[0].title}</h6>
            <p className="process-p">{processData[0].description}</p>
          </div>
        </div>
      </div>
    );
  } else {
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
