import * as React from 'react';

/**
 * @deprecated It is recommended you use the Chromicons package directly (https://github.com/lifeomic/chromicons)
 * instead of the icons provided by Chroma.
 *
 * This icon will be removed in a future version of Chroma.
 */
export const CornerUpRightSquare = (props: React.SVGProps<SVGSVGElement>) => {
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
      data-icon="corneruprightsquare-custom"
      {...props}
    >
      <path d="M20.03 15.356v3.994a2 2 0 01-2 2H5a2 2 0 01-2-2V6.338a2 2 0 012-2h4.1M17.123 11.405l4.208-4.208L17.135 3" />
      <path d="M21.331 7.2h-6.6a6.486 6.486 0 00-6.487 6.486v2.888" />
    </svg>
  );
};
