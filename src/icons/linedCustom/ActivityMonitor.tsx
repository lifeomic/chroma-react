import * as React from 'react';

/**
 * @deprecated It is recommended you use the Chromicons package directly (https://github.com/lifeomic/chromicons)
 * instead of the icons provided by Chroma.
 *
 * This icon will be removed in a future version of Chroma.
 */
export const ActivityMonitor = (props: React.SVGProps<SVGSVGElement>) => {
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
      data-icon="activitymonitor-custom"
      {...props}
    >
      <rect x={2} y={3} width={20} height={14} rx={2} />
      <path d="M8 21h8M12 17v4M15.698 10h-1.479l-1.11 3.328-2.218-6.656L9.781 10H8.302" />
    </svg>
  );
};
