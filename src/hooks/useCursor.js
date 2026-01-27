import { useEffect } from "react";
import { isSafari } from "../utils/device";

/**
 * Hook for custom cursor functionality
 */
export const useCursor = () => {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    const safari = isSafari();

    if (!safari && cursor) {
      const moveCursor = (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      };

      document.addEventListener("mousemove", moveCursor);

      return () => {
        document.removeEventListener("mousemove", moveCursor);
      };
    } else if (safari) {
      document.body.style.cursor = "auto";
    }
  }, []);
};
