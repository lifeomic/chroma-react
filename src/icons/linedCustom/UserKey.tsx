import * as React from 'react';

export const UserKey = (props: React.SVGProps<SVGSVGElement>) => {
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
      data-icon="userkey-custom"
      {...props}
    >
      <path d="M11.5 13H5a4 4 0 00-4 4v2" />
      <circle cx={9} cy={5} r={4} />
      <path d="M15.484 16.827L11.5 20.8V23h2.2l.92-.952V20.8h.005l.518-.536h1.277l1.239-1.255a3.9 3.9 0 10-2.178-2.188zM19.634 14.869h0" />
    </svg>
  );
};
