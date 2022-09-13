import * as React from 'react';

export const Insights: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M21 19L17.5 17C17.5 17 17.3 15 16.9 12.5C16.5 9.99999 15.9 7.99999 15.9 7.99999C16.5 7.5 17.5 8 18.5 9.99999C19.3062 11.6125 20 14 21 19Z"
      fill="url(#icon-insights-linear-1)"
    />
    <path
      d="M3.8 8.71909C2.76644 7.68409 1.93333 10.5883 1 13.3922L15 19C15 15.2155 13.6 4.98058 10.8 4.04595C8.60749 3.31409 8.24445 11.5675 6.51112 11.5675C4.77779 11.5675 4.73333 9.65372 3.8 8.71909Z"
      fill="url(#icon-insights-linear-2)"
    />
    <defs>
      <linearGradient
        id="icon-insights-linear-1"
        x1="18.45"
        y1="7.81966"
        x2="18.45"
        y2="19"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E95646" />
        <stop offset="1" stopColor="#D63524" />
      </linearGradient>
      <linearGradient
        id="icon-insights-linear-2"
        x1="8"
        y1="4"
        x2="7.49897"
        y2="20.948"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#09BEEF" />
        <stop offset="1" stopColor="#0096E1" />
      </linearGradient>
    </defs>
  </svg>
);
