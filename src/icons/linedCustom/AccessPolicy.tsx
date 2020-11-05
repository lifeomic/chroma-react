import * as React from 'react';

export const AccessPolicy = (props: React.SVGProps<SVGSVGElement>) => {
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
      data-icon="accesspolicy-custom"
      {...props}
    >
      <path d="M12.246 22H18a2.006 2.006 0 002-2V8l-6-6H6a2.006 2.006 0 00-2 2v4.523" />
      <path d="M14 2v6h6M16 13h-3.246M16 17h-2.815M10 9h-.96M7.745 18.6l.6 4.4h-4.9l.6-4.4h0a3.593 3.593 0 01-1.6-2.9 3.4 3.4 0 016.8 0 3.17 3.17 0 01-1.5 2.9h0" />
    </svg>
  );
};
