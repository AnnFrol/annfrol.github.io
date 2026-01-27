import { useEffect } from "react";

/**
 * Hook for fixing viewport height on mobile devices
 */
export const useViewportHeight = () => {
  useEffect(() => {
    const updateVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    updateVh();

    const handleResize = () => {
      updateVh();
      // Additional delay for Safari iOS
      if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
        setTimeout(updateVh, 100);
      }
    };

    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("orientationchange", handleResize, {
      passive: true,
    });

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, []);
};
