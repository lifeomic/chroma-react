import * as React from 'react';

export const Root = (props: React.SVGProps<SVGSVGElement>) => {
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
      data-icon="root-custom"
      {...props}
    >
      <circle cx={11.995} cy={15.48} r={4} />
      <path d="M1.045 15.48h6.95M15.995 15.48h6.96M11.995 11.48V4.52" />
    </svg>
  );
};
