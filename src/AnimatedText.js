import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Регистрация плагина ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const AnimatedText = ({ title, subtitle, text }) => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
	if (title) {
	  const titleSpans = titleRef.current.querySelectorAll('span');

	  // Анимация для h1 с ScrollTrigger
	  gsap.fromTo(titleSpans, 
		{ y: -100, opacity: 0 }, // Начальное положение (внизу и прозрачные)
		{
		  y: 0, 
		  opacity: 1, // Конечное положение
		  duration: 1,
		  stagger: {
			amount: 0.3,
			from: "center",
		  },
		  ease: "power4.out",
		  scrollTrigger: {
			trigger: titleRef.current,
			start: "top 80%", // Когда верхний край h1 достигает 80% окна
			toggleActions: "play none none none", // Запуск анимации при скролле
			once: true, // Анимация только один раз при скролле
		  },
		}
	  );
	}

	if (subtitle) {
	  const subtitleSpans = subtitleRef.current.querySelectorAll('span');

	  // Анимация для h2 с ScrollTrigger
	  gsap.fromTo(subtitleSpans, 
		{ y: -100, opacity: 0 }, // Начальное положение
		{
		  y: 0, 
		  opacity: 1,
		  duration: 1,
		  stagger: {
			amount: 0.3,
			from: "center",
		  },
		  ease: "power4.out",
		  scrollTrigger: {
			trigger: subtitleRef.current,
			start: "top 80%", // Когда верхний край h2 достигает 80% окна
			toggleActions: "play none none none",
			once: true, // Анимация только один раз при скролле
		  },
		}
	  );
	}

	if (text) {
	  const textLines = textRef.current.querySelectorAll('.text-line');

	  // Анимация для h5 с ScrollTrigger
	  gsap.fromTo(textLines, 
		{ y: -100, opacity: 0 }, // Начальное положение
		{
		  opacity: 1,
		  y: 0,
		  stagger: 0.2,
		  ease: 'power3.out',
		  duration: 1,
		  scrollTrigger: {
			trigger: textRef.current,
			start: "top 50%", // Когда верхний край текста достигает 80% окна
			toggleActions: "play none none none",
			once: true, // Анимация только один раз при скролле
		  },
		}
	  );
	}
  }, [title, subtitle, text]);

  const renderSpans = (string) => {
	return string.split('').map((char, index) => (
	  <span
		key={index}
		style={{
		  display: 'inline-block',
		  opacity: 0,
		  transform: 'translateY(50px)',
		  willChange: 'opacity, transform',
		  marginRight: char === ' ' ? '0.3em' : '0px',
		}}
	  >
		{char}
	  </span>
	));
  };

  const renderLines = (string) => {
	return string.split('\n').map((line, index) => (
	  <div
		key={index}
		className="text-line"
		style={{
		  opacity: 0,
		  transform: 'translateY(50px)',
		  willChange: 'opacity, transform',
		}}
	  >
		{line}
	  </div>
	));
  };

  return (
	<div>
	  {title && (
		<h1 ref={titleRef} className="animated-h1">
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
		  {renderLines(text)}
		</h5>
	  )}
	</div>
  );
};

export default AnimatedText;