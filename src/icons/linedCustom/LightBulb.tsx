import * as React from 'react';

export const LightBulb = (props: React.SVGProps<SVGSVGElement>) => {
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
      <path d="M15.1 15.4V15a3.6 3.6 0 01.2-1.1 2.178 2.178 0 01.7-.9 5.938 5.938 0 001.8-2.9 5.664 5.664 0 00-.2-3.4 5.1 5.1 0 00-2.2-2.6A6.849 6.849 0 0012 3a5.887 5.887 0 00-3.4 1 5.53 5.53 0 00-2.2 2.6 5.664 5.664 0 00-.2 3.4A5.938 5.938 0 008 12.9a5.5 5.5 0 01.7.9 2.153 2.153 0 01.2 1.1v.5M9.8 18h4.5M10.2 21h3.5" />
      <path d="M12 6.9l-1.7 3.2h3.4l-1.7 3" />
    </svg>
  );
};
