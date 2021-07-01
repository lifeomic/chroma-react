import * as React from 'react';

/**
 * @deprecated It is recommended you use the Chromicons package directly (https://github.com/lifeomic/chromicons)
 * instead of the icons provided by Chroma.
 *
 * This icon will be removed in a future version of Chroma.
 */
export const OfficeBuilding = (props: React.SVGProps<SVGSVGElement>) => {
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
      data-icon="officebuilding-custom"
      {...props}
    >
      <path d="M9 15.25h0M12 15.25h0M15 15.25h0M9 12.25h0M12 12.25h0M15 12.25h0M9 9.25h0M12 9.25h0M15 9.25h0M9 6.25h0M12 6.25h0M15 6.25h0M12 19.25v2.656" />
      <rect x={5} y={2} width={14} height={20} rx={2} ry={2} />
    </svg>
  );
};
