import * as React from 'react';

/**
 * @deprecated It is recommended you use the Chromicons package directly (https://github.com/lifeomic/chromicons)
 * instead of the icons provided by Chroma.
 *
 * This icon will be removed in a future version of Chroma.
 */
export const PasswordPolicy = (props: React.SVGProps<SVGSVGElement>) => {
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
      data-icon="passwordpolicy-custom"
      {...props}
    >
      <path d="M14.66 22H18a2 2 0 002-2V8l-6-6H6a2 2 0 00-2 2v4.521" />
      <path d="M14 2v6h6M16 13h-3.785M16 17h-1.476M10 9H8.87" />
      <rect x={1} y={17.096} width={9.661} height={5.904} rx={1.073} />
      <path d="M3.147 17.1v-2.151a2.684 2.684 0 015.367 0V17.1" />
    </svg>
  );
};
