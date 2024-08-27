import React, { useState, useEffect, useRef } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Header from './Header';
import Footer from './Footer';
import PageLoader from './PageLoader';
import gsap from 'gsap';
  
function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const contentRef = useRef(null);

useEffect(() => {
	  const cursor = document.querySelector('.cursor');
	  
	  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  
	  if (!isSafari) {
		const moveCursor = (e) => {
		  cursor.style.left = `${e.clientX}px`;
		  cursor.style.top = `${e.clientY}px`;
		};
  
		document.addEventListener('mousemove', moveCursor);
		
			  return () => {
				document.removeEventListener('mousemove', moveCursor);
			  };
			} else {
			  // Убедитесь, что курсор в Safari становится стандартным
			  document.body.style.cursor = 'auto';
			}
		  }, []);

  useEffect(() => {
	if (loadingComplete) {
	  gsap.to(contentRef.current, {
		opacity: 1,
		duration: 1,
		ease: 'power2.inOut',
		delay: 0.3,
	  });
	}
  }, [loadingComplete]);

  const handleLoadingComplete = () => {
	setLoadingComplete(true);
  };

  return (
	<div className="App">
	<div className="cursor"></div>
	  {!loadingComplete && <PageLoader onLoadingComplete={handleLoadingComplete} />}
	  {loadingComplete && (
		<div ref={contentRef} style={{ opacity: 0 }}>
		  <Header />
		  <svg className="absolute">
				<defs><linearGradient id="za" x1="28.334" x2="22.36" y1="1.61" y2="14.559" gradientUnits="userSpaceOnUse"><stop stopColor="#FFA1A1"/><stop offset=".458" stopColor="#EDD1CD"/><stop offset="1" stopColor="#CDE052"/></linearGradient>
				</defs>
				<defs><linearGradient id="abc" x1="-57.4342" y1="65.4236" x2="114.541" y2="-201.413" gradientUnits="userSpaceOnUse">
				<stop stopColor="#FFA1A1"/>
				<stop offset="0.458333" stopColor="#EDD1CD"/>
				<stop offset="1" stopColor="#CDE052"/>
				</linearGradient>
				<linearGradient id="abcd" x1="6.91775" y1="31.5455" x2="61.2941" y2="2.45737" gradientUnits="userSpaceOnUse">
					<stop stopColor="#FFA1A1" />
					<stop offset="0.458333" stopColor="#EDD1CD" />
					<stop offset="1" stopColor="#CDE052" />
				</linearGradient>
				</defs>							
				<defs><linearGradient id="a" x1="5.84" x2="53.28" y1="28.806" y2="5.343" gradientUnits="userSpaceOnUse"><stop stopColor="#FFA1A1"/><stop offset=".458" stopColor="#EDD1CD"/><stop offset="1" stopColor="#CDE052"/></linearGradient></defs>
				<defs><linearGradient id="ab" x1="-26.299" x2="69.89" y1="43.316" y2="-89.4" gradientUnits="userSpaceOnUse"><stop stopColor="#FFA1A1"/><stop offset=".458" stopColor="#EDD1CD"/><stop offset="1" stopColor="#CDE052"/></linearGradient></defs>
			</svg>
		  <Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/projects" element={<Projects />} />
		  </Routes>
		  <Footer />
		</div>
	  )}
	</div>
  );
}

export default App;