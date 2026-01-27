import {
  MOBILE_BREAKPOINT,
  MOBILE_PROCESS_BREAKPOINT,
  MIN_HARDWARE_CONCURRENCY,
} from "../constants";

/**
 * Checks if device is mobile
 * @returns {boolean}
 */
export const isMobileDevice = () => {
  return (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ) || window.innerWidth < MOBILE_BREAKPOINT
  );
};

/**
 * Checks if device is iOS
 * @returns {boolean}
 */
export const isIOSDevice = () => {
  return /iPhone|iPad|iPod/i.test(navigator.userAgent);
};

/**
 * Checks if device is Safari
 * @returns {boolean}
 */
export const isSafari = () => {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
};

/**
 * Checks if device has low performance
 * @returns {boolean}
 */
export const isLowPerformanceDevice = () => {
  return (
    isIOSDevice() ||
    (navigator.hardwareConcurrency &&
      navigator.hardwareConcurrency < MIN_HARDWARE_CONCURRENCY)
  );
};

/**
 * Checks if screen width is mobile for process page
 * @returns {boolean}
 */
export const isMobileForProcess = () => {
  return window.innerWidth <= MOBILE_PROCESS_BREAKPOINT;
};
