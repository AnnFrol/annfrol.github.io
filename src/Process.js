import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./css/cube.css";
import Cube from "./Cube";
import AnimatedText from "./AnimatedText";
import runProcess from "./assets/img/run_process.svg";

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
        <svg className="bg-process" xmlns="http://www.w3.org/2000/svg">
          <circle r="48%" cx="50%" cy="50%" fill="var(--maxgreenyellow)" />
        </svg>
      </div>
      <div className="process-H1">
        <AnimatedText title="Process" />
      </div>
      <div className="about-title-balls">
        <svg
          className="ball-one ball-about-one"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          viewBox="0 0 51 46"
          fill="none"
        >
          <path
            fill="#35C8BF"
            d="M6.815 19.444C15.686-8.292 50.548 7.738 48.42 25.088 44.986 53.093-2.056 46.535 6.815 19.444Z"
          />
          <path
            fill="#000"
            fillRule="evenodd"
            d="M45.425 31.614c.307.892.177 1.8-.265 2.643-.388.737-1.036 1.117-1.788 1.145-.672.025-1.37-.229-2.02-.57-1.313-.69-2.89-1.989-4.566-3.592a68.96 68.96 0 0 1-2.149-2.157c-2.206-.362-4.39-.606-6.059-.792-.614-.069-1.159-.13-1.61-.186-2.258-.281-6.606-.707-10.546-.154-.56.079-1.107.177-1.634.296-1.594 2.881-3.295 5.255-4.61 6.516-.375.359-.763.671-1.145.871-.33.172-.931.407-1.556.096-.697-.348-.889-1.085-.936-1.55-.05-.498.012-1.084.138-1.717.448-2.26 1.786-3.826 3.497-4.878.958-.59 2.045-1.026 3.19-1.348l.184-.35c1.708-3.303 3.214-7.173 3.827-10.81.53-3.14.366-5.932-.721-8.056l-.078-.106c-1.488-2.03 1.48-1.61 1.846-1.112a335.8 335.8 0 0 0 8.782 11.393c2.768 3.428 5.71 6.906 8.385 9.75.995.174 1.986.372 2.929.6 2.042.495 4.02 1.16 5.337 2.11.666.481 1.279 1.117 1.568 1.958Zm-6.931-1.748c1.506 1.415 2.78 2.419 3.736 2.92.519.273.832.337.983.331.04-.001.052-.001.059-.008.006-.005.008-.015.017-.033.213-.404.18-.622.136-.748-.06-.178-.245-.454-.712-.791-.889-.642-2.377-1.202-4.22-1.67Zm-6.306-3.436c-2.179-2.433-4.438-5.135-6.572-7.779a332.998 332.998 0 0 1-5.828-7.444c.058 1.43-.064 2.903-.31 4.363-.58 3.437-1.872 6.986-3.366 10.107 4.199-.58 8.74-.127 11.02.157.414.052.93.11 1.52.175 1.002.112 2.222.248 3.536.42Zm-20.704 3.035a7.905 7.905 0 0 0-.19.114c-1.33.817-2.21 1.913-2.517 3.398.747-.731 1.7-1.952 2.707-3.512ZM7.95 33.608l.021-.006-.02.006Z"
            clipRule="evenodd"
          />
          <path
            fill="#000"
            fillRule="evenodd"
            d="M7.496 18.825c-2.04 6.235.265 12.254 3.045 15.703 2.846 3.53 7.52 5.844 12.713 6.56 5.183.713 10.664-.199 14.997-2.843 8.444-5.155 10.509-18.557 3.835-26.099C31.35.014 12.46 3.294 7.496 18.826Zm38.1-7.178c3.375 3.814 5.468 8.622 4.847 13.684-.936 7.638-4.883 13.02-10.152 16.236-5.214 3.183-11.63 4.198-17.572 3.38-5.931-.818-11.61-3.497-15.223-7.978-3.677-4.561-5.032-10.772-2.621-18.144 2.364-7.392 6.543-12.079 11.604-14.482C21.498 1.96 27.146 1.94 32.294 3.4c5.142 1.459 9.923 4.43 13.301 8.248Z"
            clipRule="evenodd"
          />
        </svg>
        <svg
          className="ball-two ball-about-two"
          width="100%"
          viewBox="0 0 49 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.21731 22.233C10.9333 -11.3418 49.1147 8.06332 46.7847 29.0659C43.0237 62.9669 -8.49872 55.027 1.21731 22.233Z"
            fill="#FF2A83"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.69177 18.138C2.26606 31.2302 2.52933 45.8798 20.6604 49.3798C25.745 50.2558 31.1247 49.1421 35.3985 45.8798C39.6252 42.6533 42.9696 37.1732 43.7822 28.8794C46.2292 3.90513 12.0863 -6.88194 5.69177 18.138ZM30.011 1.3094C40.6206 5.07308 50.0584 16.7444 48.8149 29.4357C47.8683 39.0976 43.868 46.0329 38.3514 50.2439C32.8818 54.4191 26.1195 55.7649 19.8502 54.6848C13.5824 53.6049 7.64881 50.0706 3.91214 44.2739C0.140914 38.4235 -1.21346 30.548 1.22864 21.2076C3.62589 11.8336 7.89276 5.74388 13.2362 2.57166C18.5751 -0.597913 24.5871 -0.614666 30.011 1.3094Z"
            fill="black"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M41.6008 24.4708C42.3468 24.5509 42.8843 25.2005 42.8014 25.9217C41.738 35.1742 37.433 40.3314 32.4276 43.0197C27.1804 45.4843 16.9878 45.4843 14.27 42.8566C14.3529 42.1354 18.4308 42.7845 19.1768 42.8646C22.07 43.1754 26.8528 43.0079 31.1076 40.7227C35.2756 38.4841 39.1249 34.1159 40.1 25.6315C40.1829 24.9103 40.8548 24.3907 41.6008 24.4708Z"
            fill="black"
          />
        </svg>
        <svg
          className="ball-three ball-about-three"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          viewBox="0 0 73 69"
          fill="none"
        >
          <path
            fill="#CDE052"
            d="M13.629 42.948C11.393 5.8 55.877-1.786 60.763 20.299 68.65 55.95 15.603 79.3 13.63 42.948Z"
          />
          <path
            fill="#000"
            fillRule="evenodd"
            d="M34.02 10.92c-13.99 4.617-19.874 15.429-19.026 32.287v.016c.362 8.169 3.633 12.306 7.63 14.056 4.209 1.843 10.006 1.397 15.948-1.3 11.914-5.41 22.435-18.911 18.996-34.758C55.37 11.093 42.32 8.181 34.02 10.92Zm17.384-3.432c5.59 1.982 10.023 6.176 11.412 12.578C66.93 39.023 54.298 54.66 40.778 60.8c-6.776 3.076-14.267 4.005-20.362 1.336-6.306-2.761-10.357-9.023-10.783-18.629-.976-19.472 10.7-31.557 23.35-35.732 6.271-2.07 12.909-2.24 18.421-.286Z"
            clipRule="evenodd"
          />
          <path
            fill="#000"
            fillRule="evenodd"
            d="M53.904 22.359c.75-.107 1.442.409 1.544 1.152.56 4.06-.336 10.67-3.23 16.968-2.908 6.327-7.92 12.524-15.751 15.488-6.155 2.33-10.85 2.087-14.198.358-3.332-1.722-5.08-4.789-5.595-7.597a1.37 1.37 0 0 1 1.104-1.587 1.36 1.36 0 0 1 1.595 1.083c.392 2.134 1.713 4.416 4.177 5.689 2.449 1.265 6.281 1.663 11.953-.484 6.953-2.632 11.511-8.17 14.22-14.062 2.72-5.92 3.484-12.01 3.007-15.47a1.372 1.372 0 0 1 1.174-1.538ZM48.46 33.576a1.35 1.35 0 0 1 1.154 1.537c-.264 1.754-1.254 4.01-2.39 6.026-1.146 2.032-2.558 4.03-3.813 5.244-8.296 8.028-14.841 7.43-17.487 5.243a1.348 1.348 0 0 1-.167-1.914 1.383 1.383 0 0 1 1.933-.178c1.06.877 5.964 2.505 13.81-5.089.988-.955 2.25-2.7 3.33-4.619 1.091-1.935 1.881-3.84 2.07-5.096a1.38 1.38 0 0 1 1.56-1.154Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
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
