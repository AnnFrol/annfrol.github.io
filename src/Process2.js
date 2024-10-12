import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./css/cube.css";
import Cube from "./Cube";

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
  {
    cubeClass: "one-cube",
    title: "Let's get acquainted",
    description:
      "We'll schedule a video meeting to discuss project details and get acquainted. Following that, we'll agree on terms, costs, and finalize the contract.",
  },
  {
    cubeClass: "two-cube",
    title: "Project Planning",
    description:
      "We'll plan all the stages and define the deliverables of the project.",
  },
  {
    cubeClass: "three-cube",
    title: "Design & Development",
    description:
      "The design and development phase starts with creating wireframes and prototypes.",
  },
  {
    cubeClass: "four-cube",
    title: "Testing & Feedback",
    description:
      "Testing the project and gathering feedback for final adjustments.",
  },
  {
    cubeClass: "five-cube",
    title: "Launch",
    description:
      "Finally, we'll launch the project and ensure everything runs smoothly.",
  },
  {
    cubeClass: "six-cube",
    title: "Support & Maintenance",
    description:
      "Ongoing support and maintenance will be provided after the launch.",
  },
];

const Process = () => {
  const containerRef = useRef(null);
  const cubeRef = useRef(null); // Реф для куба
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top center",
      end: "+=2000",
      scrub: true,
      onUpdate: (self) => {
        const step = Math.floor(self.progress * processSteps.length);
        setActiveStep(step);
      },
    });

    return () => trigger.kill();
  }, []);

  return (
    <div className="process-mobile" ref={containerRef}>
      <div className="cube-mobile">
        <Cube ref={cubeRef} cubeClass={processSteps[activeStep].cubeClass} />{" "}
        {/* Передаём класс куба */}
      </div>
      <div className="process-text">
        <h6 className="process-h6">{processSteps[activeStep].title}</h6>{" "}
        {/* Динамическое изменение заголовка */}
        <p className="process-p">{processSteps[activeStep].description}</p>{" "}
        {/* Динамическое изменение описания */}
      </div>
    </div>
  );
};

export default Process;
