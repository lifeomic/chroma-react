import * as React from 'react';

export const Batteries = (props: React.SVGProps<SVGSVGElement>) => {
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
      <rect x={1} y={9} width={18} height={12} rx={2} ry={2} />
      <path d="M23 16v-2M1 7V5a2 2 0 012-2h14a2 2 0 012 2v2M23 10V8" />
    </svg>
  );
};
