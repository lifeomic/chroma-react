import * as React from 'react';

/**
 * @deprecated It is recommended you use the Chromicons package directly (https://github.com/lifeomic/chromicons)
 * instead of the icons provided by Chroma.
 *
 * This icon will be removed in a future version of Chroma.
 */
export const ControlPolicy = (props: React.SVGProps<SVGSVGElement>) => {
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
      data-icon="controlpolicy-custom"
      {...props}
    >
      <path d="M13.25 22H18a2 2 0 002-2V8l-6-6H6a2 2 0 00-2 2v1.572" />
      <path d="M14 2v6h6M3.25 23v-5.25M3.25 14.75V9.5M9.25 23v-6.75M9.25 13.25V9.5M1 17.75h4.5M7 13.25h4.5" />
    </svg>
  );
};
