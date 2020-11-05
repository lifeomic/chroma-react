import * as React from 'react';

export const Fork = (props: React.SVGProps<SVGSVGElement>) => {
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
      data-icon="fork-custom"
      {...props}
    >
      <path d="M18 2v6a4.012 4.012 0 01-4 4h-4a4.012 4.012 0 01-4-4V2M12 2v20" />
    </svg>
  );
};
