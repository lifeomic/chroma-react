import * as React from 'react';

export const ClearList = (props: React.SVGProps<SVGSVGElement>) => {
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
      data-icon="clearlist-custom"
      {...props}
    >
      <path d="M3 12h18M3 6h10.867M3 18h18M21 4l-4 4M17 4l4 4" />
    </svg>
  );
};
