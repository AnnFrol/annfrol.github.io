import React, { useState, useEffect } from "react";
import WorksGrid from "./WorksGrid";
import AnimatedText from "./AnimatedText";
import FallingBalls from "./FallingBalls";

const VIEWPORT_BREAKPOINT = 1200;

function WorksPage() {
  const [isWideViewport, setIsWideViewport] = useState(
    typeof window !== "undefined" && window.innerWidth > VIEWPORT_BREAKPOINT
  );

  useEffect(() => {
    const onResize = () => setIsWideViewport(window.innerWidth > VIEWPORT_BREAKPOINT);
    window.addEventListener("resize", onResize);
    onResize();
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div className="works-page" style={{ paddingBottom: "100px" }}>
      <div className="works-h1">
        <AnimatedText page="works" title="Works" />
      </div>
      <FallingBalls page="works" />
      <div className="main_Works" style={{ marginTop: "5vh" }}>
        <div className="bg-desktop">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="bg-desktop-four"
            height="180"
            width="180"
            filter={isWideViewport ? "blur(200px)" : "blur(80px)"}
            style={{ opacity: isWideViewport ? 1 : 0.3 }}
          >
            <circle r="48%" cx="50%" cy="50%" fill="var(--maxgreenyellow)" />
          </svg>
        </div>
        <WorksGrid />
      </div>
    </div>
  );
}

export default WorksPage;
