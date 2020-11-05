import * as React from 'react';

export const Unavailable = (props: React.SVGProps<SVGSVGElement>) => {
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
      data-icon="unavailable-custom"
      {...props}
    >
      <path d="M21.778 23V3.444A2.445 2.445 0 0019.333 1H4.667a2.445 2.445 0 00-2.445 2.444V23M16.889 14.444H7.111M16.889 18.177H7.111M9.556 21.909H7.111" />
      <circle cx={12} cy={8.004} r={2.892} />
      <path d="M9.956 5.96l4.088 4.089" />
    </svg>
  );
};
