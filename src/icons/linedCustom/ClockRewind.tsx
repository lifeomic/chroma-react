import * as React from 'react';

export const ClockRewind = (props: React.SVGProps<SVGSVGElement>) => {
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
      <path d="M12 7.237v5.398l3.599 1.8M1 5v5h5" />
      <path d="M3.51 15A9 9 0 0012 21h0a9 9 0 008.486-12h0A9 9 0 005.64 5.64L1 10" />
    </svg>
  );
};
