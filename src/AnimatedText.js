import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const AnimatedText = ({ title, text }) => {
  const titleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
	const titleSpans = titleRef.current.querySelectorAll('span');
	const textSpans = textRef.current.querySelectorAll('span');

	gsap.to(titleSpans, {
	  opacity: 1,
	  y: 0,
	  stagger: 0.1,
	  ease: 'power3.out',
	  duration: 1,
	});

	gsap.to(textSpans, {
	  opacity: 1,
	  y: 0,
	  stagger: 0.05,
	  ease: 'power3.out',
	  duration: 1,
	  delay: 0.5, // Небольшая задержка для начала анимации текста
	});
  }, []);

  return (
	<div>
	  <h1 ref={titleRef} className="projects-title-h1">
		{title.split('').map((letter, index) => (
		  <span key={index} style={{ display: 'inline-block', opacity: 0, transform: 'translateY(50px)', willChange: 'opacity, transform' }}>
			{letter}
		  </span>
		))}
	  </h1>
	  <p ref={textRef}>
		{text.split('').map((letter, index) => (
		  <span key={index} style={{ display: 'inline-block', opacity: 0, transform: 'translateY(50px)', willChange: 'opacity, transform' }}>
			{letter}
		  </span>
		))}
	  </p>
	</div>
  );
};

export default AnimatedText;
