import React from "react";

/**
 * Reusable SVG gradient definitions component
 */
const GradientDefs = () => {
  return (
    <svg className="absolute">
      <defs>
        <linearGradient
          id="za"
          x1="28.334"
          x2="22.36"
          y1="1.61"
          y2="14.559"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFA1A1" />
          <stop offset=".458" stopColor="#EDD1CD" />
          <stop offset="1" stopColor="#CDE052" />
        </linearGradient>
      </defs>
      <defs>
        <linearGradient
          id="abc"
          x1="-57.4342"
          y1="65.4236"
          x2="114.541"
          y2="-201.413"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFA1A1" />
          <stop offset="0.458333" stopColor="#EDD1CD" />
          <stop offset="1" stopColor="#CDE052" />
        </linearGradient>
        <linearGradient
          id="abcd"
          x1="6.91775"
          y1="31.5455"
          x2="61.2941"
          y2="2.45737"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFA1A1" />
          <stop offset="0.458333" stopColor="#EDD1CD" />
          <stop offset="1" stopColor="#CDE052" />
        </linearGradient>
      </defs>
      <defs>
        <linearGradient
          id="a"
          x1="5.84"
          x2="53.28"
          y1="28.806"
          y2="5.343"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFA1A1" />
          <stop offset=".458" stopColor="#EDD1CD" />
          <stop offset="1" stopColor="#CDE052" />
        </linearGradient>
      </defs>
      <defs>
        <linearGradient
          id="ab"
          x1="-26.299"
          x2="69.89"
          y1="43.316"
          y2="-89.4"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFA1A1" />
          <stop offset=".458" stopColor="#EDD1CD" />
          <stop offset="1" stopColor="#CDE052" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default GradientDefs;
