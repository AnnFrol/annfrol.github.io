import { useState, useEffect } from "react";
import { isLowPerformanceDevice } from "../utils/device";

/**
 * Hook for checking device performance
 * @returns {boolean} True if device has low performance
 */
export const usePerformanceCheck = () => {
  const [isLowPerformance, setIsLowPerformance] = useState(false);

  useEffect(() => {
    setIsLowPerformance(isLowPerformanceDevice());
  }, []);

  return isLowPerformance;
};
