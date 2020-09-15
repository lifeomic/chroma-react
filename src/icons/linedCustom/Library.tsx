import * as React from 'react';

export const Library = (props: React.SVGProps<SVGSVGElement>) => {
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
      <path d="M20.332 20L16.844 4M12 20V4M6 20V4" />
    </svg>
  );
};
