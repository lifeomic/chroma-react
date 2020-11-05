import * as React from 'react';

export const Procedure = (props: React.SVGProps<SVGSVGElement>) => {
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
      data-icon="procedure-custom"
      {...props}
    >
      <path d="M10 5H6M11.932 12H18.5a3.5 3.5 0 000-7H14M10 19H5.5a3.5 3.5 0 010-7h3.408M18 19h-4" />
      <circle cx={4} cy={5} r={2} />
      <circle cx={12} cy={5} r={2} />
      <path d="M14.231 9.701L11.932 12l2.299 2.299" />
      <circle cx={12} cy={19} r={2} />
      <circle cx={20} cy={19} r={2} />
    </svg>
  );
};
