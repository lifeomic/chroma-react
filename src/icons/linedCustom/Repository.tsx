import * as React from 'react';

/**
 * @deprecated It is recommended you use the Chromicons package directly (https://github.com/lifeomic/chromicons)
 * instead of the icons provided by Chroma.
 *
 * This icon will be removed in a future version of Chroma.
 */
export const Repository = (props: React.SVGProps<SVGSVGElement>) => {
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
      data-icon="repository-custom"
      {...props}
    >
      <path d="M22 16v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4M5.966 2.143h12v6h-12z" />
      <path d="M5.966 12h12v6h-12zM9.966 2.143v6M13.966 2.143v6M9.966 12v6M13.966 12v6" />
    </svg>
  );
};
