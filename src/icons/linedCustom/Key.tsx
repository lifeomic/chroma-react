import * as React from 'react';

/**
 * @deprecated It is recommended you use the Chromicons package directly (https://github.com/lifeomic/chromicons)
 * instead of the icons provided by Chroma.
 *
 * This icon will be removed in a future version of Chroma.
 */
export const Key = (props: React.SVGProps<SVGSVGElement>) => {
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
      data-icon="key-custom"
      {...props}
    >
      <circle cx={16.55} cy={7.449} r={2} />
      <path d="M8.613 11.193L1 18.789V23h4.211l1.759-1.82V18.8h.011l.99-1.026h2.432l2.37-2.4a7.449 7.449 0 10-4.165-4.183z" />
    </svg>
  );
};
