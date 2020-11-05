import * as React from 'react';

export const StackedBar = (props: React.SVGProps<SVGSVGElement>) => {
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
      data-icon="stackedbar-custom"
      {...props}
    >
      <path d="M18 14v-4M18 20v-2M12 12V4M12 20v-4M6 15v-1M6 20v-1" />
    </svg>
  );
};
