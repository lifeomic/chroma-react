import * as React from 'react';

export const Heatmap = (props: React.SVGProps<SVGSVGElement>) => {
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
      <path d="M8.3 5H4M20 5h-7.5M11.5 11H4M6.1 16H4M20 16h-2.1M13.6 16h-3.2M9.9 19H4M20 19h-5.9M20 11h-4.3" />
    </svg>
  );
};
