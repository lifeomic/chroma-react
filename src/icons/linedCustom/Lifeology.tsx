import * as React from 'react';

export const Lifeology = (props: React.SVGProps<SVGSVGElement>) => {
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
      data-icon="lifeology-custom"
      {...props}
    >
      <path d="M11.947 14.632l9.474-5.79v4.211c0 .178 0 .354-.012.526m-6.3 8.015a9.419 9.419 0 01-2.635.406C4.895 22 3 16.386 3 13.579V6.737A4.471 4.471 0 017.526 2C11 2 11.947 5 11.947 6.737v11.052a4.972 4.972 0 00.121 1.053 3.108 3.108 0 003.037 2.752zm0 0a8.4 8.4 0 006.3-8.015m-9.462-3.158l6.316-4.21-7.158-2.4m10.3 9.764l-9.22 5.712M7.469 6.463h.01" />
    </svg>
  );
};
