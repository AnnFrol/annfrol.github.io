import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedText = ({ title, subtitle, text, blockText, imgSrc, page }) => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const textRef = useRef(null);
  const blockTextRef = useRef(null);
  const imgRef = useRef(null);

  const animateText = (ref, staggerOptions, animationOptions) => {
    if (ref.current) {
      const spans = ref.current.querySelectorAll("span");
      gsap.fromTo(
        spans,
        { y: -100, scaleY: 0.2, opacity: 0 },
        {
          scaleY: 1,
          y: 0,
          opacity: 1,
          duration: animationOptions.duration || 0.8,
          stagger: staggerOptions,
          ease: animationOptions.ease || "power4.out",
        }
      );
    }
  };

  const animateTextH5 = (ref, staggerOptions, animationOptions) => {
    if (ref.current) {
      const spans = ref.current.querySelectorAll("span");
      gsap.fromTo(
        spans,
        { opacity: 0.4 },
        {
          opacity: 1,
          duration: animationOptions.duration || 0.8,
          stagger: staggerOptions,
          ease: animationOptions.ease || "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: animationOptions.start || "top 70%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    }
  };

  const animateTextH2 = (ref, staggerOptions, animationOptions) => {
    if (ref.current) {
      const spans = ref.current.querySelectorAll("span");
      gsap.fromTo(
        spans,
        { y: -100, scaleY: 0.3, opacity: 0 },
        {
          scaleY: 1,
          y: 0,
          opacity: 1,
          duration: animationOptions.duration || 0.8,
          stagger: staggerOptions,
          ease: animationOptions.ease || "power4.out",
          scrollTrigger: {
            trigger: ref.current,
            start: animationOptions.start || "top 80%",
            toggleActions: "play none none none",
            once: true, // Чтобы анимация выполнялась только один раз
          },
        }
      );
    }
  };

  const animateImage = (imgRef) => {
    if (imgRef.current) {
      gsap.to(imgRef.current, {
        y: "1400",
        scrollTrigger: {
          trigger: ".about",
          start: "top top",
          end: "bottom 1%",
          scrub: true,
        },
      });
    }
  };

  useEffect(() => {
    if (title) {
      animateText(titleRef, { from: "center", amount: 0.3 }, { duration: 0.8 });
    }
    if (subtitle) {
      animateTextH2(
        subtitleRef,
        { from: "center", amount: 0.3 },
        { duration: 1, start: "top 75%" } // Добавляем параметр start для настройки точки начала
      );
    }
    if (text) {
      animateTextH5(textRef, { from: "start", amount: 0.8 }, { duration: 0.5 });
    }
    if (blockText) {
      gsap.fromTo(
        blockTextRef.current,
        { y: -60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: blockTextRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    }

    // Запуск анимации изображения
    animateImage(imgRef);
  }, [title, subtitle, text, blockText]);

  const renderSpans = (string) => {
    return string.split("\n").map((line, index) => (
      <span key={index} style={{ display: "block" }}>
        {line.split("").map((char, i) => (
          <span
            key={i}
            style={{
              display: "inline-block",
              opacity: 0,
              transform: "translateY(50px)",
              willChange: "opacity, transform",
              marginRight: char === " " ? "0.3em" : "0px",
            }}
          >
            {char}
          </span>
        ))}
      </span>
    ));
  };

  return (
    <div>
      {title && (
        <h1 ref={titleRef} className={`animated-h1 ${page}-animated-h1`}>
          {renderSpans(title)}
        </h1>
      )}
      {subtitle && (
        <h2 ref={subtitleRef} className="animated-h2">
          {renderSpans(subtitle)}
        </h2>
      )}
      {text && (
        <h5 ref={textRef} className="animated-h5">
          {renderSpans(text)}
        </h5>
      )}
      {blockText && (
        <h3 ref={blockTextRef} className="animated-h3">
          {blockText}
        </h3>
      )}
      {imgSrc && (
        <img ref={imgRef} src={imgSrc} alt="About" className="about-SVG" />
      )}
    </div>
  );
};

export default AnimatedText;
