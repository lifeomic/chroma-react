import * as React from 'react';

/**
 * @deprecated It is recommended you use the Chromicons package directly (https://github.com/lifeomic/chromicons)
 * instead of the icons provided by Chroma.
 *
 * This icon will be removed in a future version of Chroma.
 */
export const NodeMesh = (props: React.SVGProps<SVGSVGElement>) => {
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
      data-icon="nodemesh-custom"
      {...props}
    >
      <circle cx={4.5} cy={4.5} r={2.5} />
      <circle cx={19.5} cy={19.5} r={2.5} />
      <circle cx={19.5} cy={4.5} r={2.5} />
      <circle cx={4.5} cy={19.5} r={2.5} />
      <circle cx={12} cy={12} r={2.5} />
      <path d="M7.2 10.3A8.561 8.561 0 014.9 7M19.1 7a8.338 8.338 0 01-2.2 3.3M16.9 13.7a7.406 7.406 0 012.2 3.3M4.9 17a8.338 8.338 0 012.2-3.3" />
    </svg>
  );
};
