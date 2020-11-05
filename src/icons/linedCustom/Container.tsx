import * as React from 'react';

export const Container = (props: React.SVGProps<SVGSVGElement>) => {
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
      data-icon="container-custom"
      {...props}
    >
      <path d="M5 8.5h14v7H5zM9.667 8.5v7M14.333 8.5v7" />
    </svg>
  );
};
