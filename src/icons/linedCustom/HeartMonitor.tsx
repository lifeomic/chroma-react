import * as React from 'react';

/**
 * @deprecated It is recommended you use the Chromicons package directly (https://github.com/lifeomic/chromicons)
 * instead of the icons provided by Chroma.
 *
 * This icon will be removed in a future version of Chroma.
 */
export const HeartMonitor = (props: React.SVGProps<SVGSVGElement>) => {
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
      data-icon="heartmonitor-custom"
      {...props}
    >
      <rect x={2} y={3} width={20} height={14} rx={2} />
      <path d="M8 21h8M12 17v4M12 7.026a1.541 1.541 0 01-.926-.309 2.319 2.319 0 00-1.645-.411 2.094 2.094 0 00-1.132.72 1.9 1.9 0 00-.514 1.337 5.587 5.587 0 00.823 2.572A7.023 7.023 0 0011.28 13.4c.206.1.511.215.72.309.223-.1.514-.206.72-.309a7.023 7.023 0 002.674-2.468 5.587 5.587 0 00.823-2.572 1.9 1.9 0 00-.517-1.334 2.094 2.094 0 00-1.132-.72 2.319 2.319 0 00-1.645.411 1.541 1.541 0 01-.923.309z" />
    </svg>
  );
};
