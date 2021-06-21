import * as React from 'react';

/**
 * @deprecated It is recommended you use the Chromicons package directly (https://github.com/lifeomic/chromicons)
 * instead of the icons provided by Chroma.
 *
 * This icon will be removed in a future version of Chroma.
 */
export const Checklist = (props: React.SVGProps<SVGSVGElement>) => {
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
      data-icon="checklist-custom"
      {...props}
    >
      <path d="M12.768 4.019L6.973 9.82 5.235 8.082" />
      <path d="M12.656 9.793a5.8 5.8 0 11-4.54-6.823l.04.008M16.268 8.143h6.554M14.58 14.143h8.242M4.822 20.143h18" />
    </svg>
  );
};
