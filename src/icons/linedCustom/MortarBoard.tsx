import * as React from 'react';

export const MortarBoard = (props: React.SVGProps<SVGSVGElement>) => {
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
      data-icon="mortarboard-custom"
      {...props}
    >
      <path d="M12 4.5l-10 5 10 5 10-5-10-5z" />
      <path d="M16.998 19.472L16.999 12l-5.001-2.5" />
      <path d="M19.801 14.056v1.593L12 19.5l-7.801-3.87v-1.57" />
    </svg>
  );
};
