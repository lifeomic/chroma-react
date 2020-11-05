import * as React from 'react';

export const Heart = (props: React.SVGProps<SVGSVGElement>) => {
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
      data-icon="heart-custom"
      {...props}
    >
      <path d="M12 6.165a3.181 3.181 0 01-1.91-.636 4.79 4.79 0 00-3.4-.849 4.315 4.315 0 00-2.331 1.485A3.913 3.913 0 003.3 8.925 11.523 11.523 0 005 14.231a14.49 14.49 0 005.518 5.094c.425.212 1.054.444 1.486.637.46-.2 1.061-.425 1.486-.637A14.49 14.49 0 0019 14.231a11.523 11.523 0 001.7-5.306 3.913 3.913 0 00-1.061-2.76 4.315 4.315 0 00-2.333-1.485 4.79 4.79 0 00-3.4.849A3.181 3.181 0 0112 6.165z" />
    </svg>
  );
};
