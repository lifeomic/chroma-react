import * as React from 'react';

export const Helix = (props: React.SVGProps<SVGSVGElement>) => {
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
      <path d="M16.6 3.3l-1.1 1.1a3.956 3.956 0 00-1 1.5M15 12.7a3.229 3.229 0 01-1 1.7 4.659 4.659 0 01-3.9 1.1c-1.4-.2-2.9-1.2-4.3-.7a8.329 8.329 0 00-3 2.3M20.7 7.4l-1.1 1.1a4.436 4.436 0 01-3.4 1.3 5.782 5.782 0 01-1.4-.5 4.889 4.889 0 00-5.3.7 4 4 0 00-1 1.8M9 18.7a8.486 8.486 0 01-2.1 2.5" />
    </svg>
  );
};
