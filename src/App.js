import React, { useState, useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import gsap from "gsap";
import Home from "./Home";
import WorksPage from "./WorksPage";
import About from "./About";
import Process from "./Process";
import PrivacyPolicy from "./PrivacyPolicy";
import WebsitePrivacyPolicy from "./WebsitePrivacyPolicy";
import ChooseRight from "./ChooseRight";
import Header from "./Header";
import Footer from "./Footer";
import PageLoader from "./PageLoader";
import ScrollToTop from "./ScrollToTop";
import GradientDefs from "./components/GradientDefs/GradientDefs";
import { useCursor } from "./hooks/useCursor";
import { useViewportHeight } from "./hooks/useViewportHeight";
import { ROUTES } from "./constants";

function App() {
  const location = useLocation();
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const contentRef = useRef(null);
  const previousPathRef = useRef(location.pathname);
  const hasLoadedOnceRef = useRef(false);

  useCursor();
  useViewportHeight();

  useEffect(() => {
    if (loadingComplete) {
      gsap.to(contentRef.current, {
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        delay: 0.3,
      });
    }
  }, [loadingComplete]);

  const handleLoadingComplete = () => {
    setLoadingComplete(true);
    setIsTransitioning(false);
    hasLoadedOnceRef.current = true;
  };

  // Handle transitions to chooseright page
  useEffect(() => {
    const currentPath = location.pathname;
    const previousPath = previousPathRef.current;

    // Если переходим на chooseright с другой страницы
    if (currentPath === ROUTES.CHOOSERIGHT && previousPath !== ROUTES.CHOOSERIGHT) {
      // Используем setTimeout чтобы избежать конфликтов с текущим рендером
      setTimeout(() => {
        if (hasLoadedOnceRef.current) {
        setIsTransitioning(true);
        setLoadingComplete(false);
      }
      }, 0);
    }
    // Если уходим с chooseright на другую страницу
    else if (previousPath === ROUTES.CHOOSERIGHT && currentPath !== ROUTES.CHOOSERIGHT) {
      setIsTransitioning(false);
    }

    previousPathRef.current = currentPath;
  }, [location.pathname]);

  const showLoader = !loadingComplete || isTransitioning;

  return (
    <>
      <div className="cursor"></div>
      {showLoader && (
        <PageLoader onLoadingComplete={handleLoadingComplete} />
      )}
      {loadingComplete && !isTransitioning && (
        <div ref={contentRef} style={{ opacity: 0 }}>
          <Header />
          <GradientDefs />
          <main>
            <ScrollToTop />
            <Routes>
              <Route path={ROUTES.HOME} element={<Home />} />
              <Route path={ROUTES.WORKS} element={<WorksPage />} />
              <Route path={ROUTES.ABOUT} element={<About />} />
              <Route path={ROUTES.PROCESS} element={<Process />} />
              <Route path={ROUTES.PRIVACY} element={<PrivacyPolicy />} />
              <Route path={ROUTES.WEBSITE_PRIVACY} element={<WebsitePrivacyPolicy />} />
              <Route path={ROUTES.CHOOSERIGHT} element={<ChooseRight />} />
            </Routes>
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
