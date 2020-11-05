import * as React from 'react';

export const PlotScatter = (props: React.SVGProps<SVGSVGElement>) => {
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
      data-icon="plotscatter-custom"
      {...props}
    >
      <path d="M21 21H3V3M3 5h1.6M3 9h1.6M3 13h1.6M3 17h1.6M10 6h0M11 9h0M14 8h0M13 15h0M16 13h0M19 17h0" />
    </svg>
  );
};
