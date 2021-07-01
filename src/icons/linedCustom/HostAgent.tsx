import * as React from 'react';

/**
 * @deprecated It is recommended you use the Chromicons package directly (https://github.com/lifeomic/chromicons)
 * instead of the icons provided by Chroma.
 *
 * This icon will be removed in a future version of Chroma.
 */
export const HostAgent = (props: React.SVGProps<SVGSVGElement>) => {
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
      data-icon="hostagent-custom"
      {...props}
    >
      <path d="M10.348 16H4a2 2 0 01-2-2v-4a2 2 0 012-2h16a2 2 0 012 2v4a1.982 1.982 0 01-.109.652M6 12h0" />
      <path d="M23 18.652h-1.932L19.619 23l-2.899-8.695-1.449 4.347h-1.932" />
    </svg>
  );
};
