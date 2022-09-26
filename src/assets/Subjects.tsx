import * as React from 'react';

export const Subjects: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.2897 7.60908C13.8386 7.02087 14.538 5.0791 13.8517 3.27202C13.1655 1.46494 11.3535 0.476844 9.80458 1.06505C8.25565 1.65326 7.55631 3.59503 8.24255 5.40211C8.9288 7.20919 10.7408 8.19728 12.2897 7.60908Z"
      fill="url(#icon-subjects-linear-1)"
    />
    <path
      d="M11.5 10.0219C7.85789 8.79146 5.56747 10.9755 5.09228 14.2205C4.97737 15.0052 5.46861 15.7281 6.19452 16.0475L16.0973 20.4047C16.7582 20.6955 17.4953 20.2103 17.4183 19.4924C17.042 15.9826 15.327 12.2988 11.5 10.0219Z"
      fill="url(#icon-subjects-linear-2)"
    />
    <defs>
      <linearGradient
        id="icon-subjects-linear-1"
        x1="9.80458"
        y1="1.06505"
        x2="12.374"
        y2="8.54809"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#09BEEF" />
        <stop offset="1" stopColor="#0096E1" />
      </linearGradient>
      <linearGradient
        id="icon-subjects-linear-2"
        x1="11.25"
        y1="9.6741"
        x2="11.25"
        y2="21.0219"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E95646" />
        <stop offset="1" stopColor="#D63524" />
      </linearGradient>
    </defs>
  </svg>
);
