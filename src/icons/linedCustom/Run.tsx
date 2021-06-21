import * as React from 'react';

/**
 * @deprecated It is recommended you use the Chromicons package directly (https://github.com/lifeomic/chromicons)
 * instead of the icons provided by Chroma.
 *
 * This icon will be removed in a future version of Chroma.
 */
export const Run = (props: React.SVGProps<SVGSVGElement>) => {
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
      data-icon="run-custom"
      {...props}
    >
      <circle cx={16.5} cy={3.9} r={1.9} />
      <path d="M15.9 21.9V17L10 13.2M2 18.5h3.8l8.1-10.3" />
      <path d="M21.8 7.9l-3 3-9.4-5.3-3.3 2.9" />
    </svg>
  );
};
