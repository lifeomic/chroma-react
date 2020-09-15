import * as React from 'react';

export const PlotCurve = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      width={24}
      height={24}
      {...props}
    >
      <path d="M8.7 3c.7 4.8 3.5 10.5 12.3 11M21 21H3V3M3 5h1.6M3 9h1.6M3 13h1.6M3 17h1.6" />
    </svg>
  );
};
