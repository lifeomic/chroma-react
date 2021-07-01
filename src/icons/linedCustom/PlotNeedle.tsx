import * as React from 'react';

/**
 * @deprecated It is recommended you use the Chromicons package directly (https://github.com/lifeomic/chromicons)
 * instead of the icons provided by Chroma.
 *
 * This icon will be removed in a future version of Chroma.
 */
export const PlotNeedle = (props: React.SVGProps<SVGSVGElement>) => {
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
      data-icon="plotneedle-custom"
      {...props}
    >
      <path d="M21 21H3V3M3 5h1.6M3 9h1.6M3 13h1.6M3 17h1.6M11 17v4" />
      <circle cx={11} cy={15} r={2} />
      <path d="M17 9v12" />
      <circle cx={17} cy={7} r={2} />
    </svg>
  );
};
