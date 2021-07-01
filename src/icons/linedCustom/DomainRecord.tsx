import * as React from 'react';

/**
 * @deprecated It is recommended you use the Chromicons package directly (https://github.com/lifeomic/chromicons)
 * instead of the icons provided by Chroma.
 *
 * This icon will be removed in a future version of Chroma.
 */
export const DomainRecord = (props: React.SVGProps<SVGSVGElement>) => {
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
      data-icon="domainrecord-custom"
      {...props}
    >
      <path d="M12 22a10 10 0 119.55-12.976M2 12h12.36" />
      <path d="M12 22a15.3 15.3 0 01-4-10 15.3 15.3 0 014-10 15.306 15.306 0 013.572 6.712M18.989 12.112L23 23l-4.011-2.292L14.977 23l4.012-10.888z" />
    </svg>
  );
};
