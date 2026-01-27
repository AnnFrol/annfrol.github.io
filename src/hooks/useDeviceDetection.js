import { useState, useEffect } from "react";
import { isMobileDevice, isMobileForProcess } from "../utils/device";

/**
 * Hook for detecting mobile devices
 * @returns {boolean} True if device is mobile
 */
export const useDeviceDetection = () => {
  const [isMobile, setIsMobile] = useState(isMobileDevice());

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(isMobileDevice());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};

/**
 * Hook for detecting mobile devices for process page
 * @returns {boolean} True if device is mobile for process
 */
export const useMobileForProcess = () => {
  const [isMobile, setIsMobile] = useState(isMobileForProcess());

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(isMobileForProcess());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};
