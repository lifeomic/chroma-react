import * as React from 'react';

export const NodeTree = (props: React.SVGProps<SVGSVGElement>) => {
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
      <circle cx={12} cy={19.5} r={2.5} />
      <circle cx={12} cy={4.5} r={2.5} />
      <path d="M4.5 14.5V14a2.006 2.006 0 012-2h11a2.006 2.006 0 012 2v.5M12 9.5v5" />
      <circle cx={19.5} cy={19.5} r={2.5} />
      <circle cx={4.5} cy={19.5} r={2.5} />
    </svg>
  );
};
