import * as React from 'react';

export const Versions = (props: React.SVGProps<SVGSVGElement>) => {
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
      <rect x={2} y={9} width={20} height={14} rx={2} />
      <path d="M19 5H5M16 1H8" />
    </svg>
  );
};
