import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { LOADER_COLORS, ANIMATION_DURATION } from "./constants";

const customEase = gsap.parseEase("power2.inOut");

export function PageLoader({ onLoadingComplete }) {
  const pageBgWrapRef = useRef(null);
  const pageOverlayRef = useRef(null);
  const colorBgRef = useRef(null);
  const greyBgRef = useRef(null);

  useEffect(() => {
    const pageBgWrap = pageBgWrapRef.current;
    const colorBg = colorBgRef.current;
    const greyBg = greyBgRef.current;

    const randomColor =
      LOADER_COLORS[Math.floor(Math.random() * LOADER_COLORS.length)];

    colorBg.style.backgroundColor = randomColor;

    const pageToPageAnim = gsap.timeline({
      onComplete: () => {
        onLoadingComplete();
      },
    });

    pageToPageAnim.to(colorBg, {
      y: "0%",
      rotate: 0,
      onStart: () => {
        pageBgWrap.style.opacity = "1";
      },
      duration: ANIMATION_DURATION.SLOW,
      ease: customEase,
    });

    pageToPageAnim.to(
      greyBg,
      {
        y: "0%",
        rotate: 0,
        duration: ANIMATION_DURATION.SLOW,
        ease: customEase,
        onComplete: () => {
          pageBgWrap.style.opacity = "0";
        },
      },
      "-=1.35"
    );

    return () => {
      pageToPageAnim.kill();
    };
  }, [onLoadingComplete]);

  return (
    <div id="loader" ref={pageBgWrapRef}>
      <div id="loaderOverlay" ref={pageOverlayRef}></div>
      <div className="color-bg" ref={colorBgRef}></div>
      <div className="grey-bg" ref={greyBgRef}></div>
    </div>
  );
}
export default PageLoader;
