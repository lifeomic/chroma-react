import * as React from 'react';

export const Function = (props: React.SVGProps<SVGSVGElement>) => {
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
      <path d="M8 4a3 3 0 00-3 3v2a3 3 0 01-3 3 3 3 0 013 3v2a3 3 0 003 3M16 20a3 3 0 003-3v-2a3 3 0 013-3 3 3 0 01-3-3V7a3 3 0 00-3-3" />
    </svg>
  );
};
