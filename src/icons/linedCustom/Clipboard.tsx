import * as React from 'react';

export const Clipboard = (props: React.SVGProps<SVGSVGElement>) => {
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
      <path d="M19.1 2.7h.1a2.112 2.112 0 012.1 2.1v15.5a2.112 2.112 0 01-2.1 2.1H4.8a2.112 2.112 0 01-2.1-2.1V4.8a2.112 2.112 0 012.1-2.1h.1" />
      <path d="M16.1 2v3a1 1 0 01-1 1H8.9a1 1 0 01-1-1V2M10.7 10h5.6M7.7 10h.2M10.7 13.3h5.6M7.7 13.3h.2M10.7 16.5h2.8M7.7 16.5h.2M10.5 2.5a1.5 1.5 0 013 0" />
    </svg>
  );
};
