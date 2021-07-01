import * as React from 'react';

/**
 * @deprecated It is recommended you use the Chromicons package directly (https://github.com/lifeomic/chromicons)
 * instead of the icons provided by Chroma.
 *
 * This icon will be removed in a future version of Chroma.
 */
export const Oncoprint = (props: React.SVGProps<SVGSVGElement>) => {
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
      data-icon="oncoprint-custom"
      {...props}
    >
      <path d="M4 4v6.4M11.5 4v6.4M14.7 4v6.4M20 4v6.4M20 13.6V20M14.7 13.6V20M7.2 13.6V20M4 13.6V20" />
    </svg>
  );
};
