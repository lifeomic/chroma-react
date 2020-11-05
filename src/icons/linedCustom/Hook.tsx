import * as React from 'react';

export const Hook = (props: React.SVGProps<SVGSVGElement>) => {
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
      data-icon="hook-custom"
      {...props}
    >
      <circle cx={12} cy={5.1} r={3} />
      <path d="M14.8 18c1-.6 1.5-2.2 1.5-2.2h0c.2.4.3.9.3 1.3 0 2-1.3 3.8-3.2 4.5-2.5.9-5.2-.3-6-2.8h0c-.2-.5-.3-1-.3-1.6 0-3.2 4.9-4.1 4.9-5.7V8.1" />
    </svg>
  );
};
