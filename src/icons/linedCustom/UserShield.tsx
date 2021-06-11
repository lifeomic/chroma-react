import * as React from 'react';

/**
 * @deprecated It is recommended you use the Chromicons package directly (https://github.com/lifeomic/chromicons)
 * instead of the icons provided by Chroma.
 *
 * This icon will be removed in a future version of Chroma.
 */
export const UserShield = (props: React.SVGProps<SVGSVGElement>) => {
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
      data-icon="usershield-custom"
      {...props}
    >
      <path d="M7.619 19.992A10 10 0 012 11V5a2 2 0 012-2h16a2 2 0 012 2v2.927M14.458 18.665h-.128a2.89 2.89 0 00-2.89 2.89V23M19.982 18.665h-5.524M23 23v-1.445a2.89 2.89 0 00-2.89-2.89h-.128" />
      <circle cx={17.22} cy={12.885} r={2.89} />
    </svg>
  );
};
