import * as React from 'react';
import { AdaptiveIconProps } from './AdaptiveIconProps';

export const SideBar: React.FC<AdaptiveIconProps> = ({
  size = 24,
  fill = 'currentColor',
  ...rootProps
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rootProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM9.14285 5.57142C8.59057 5.57142 8.14285 6.01914 8.14285 6.57142V17.4286C8.14285 17.9809 8.59057 18.4286 9.14285 18.4286H9.71428C10.2666 18.4286 10.7143 17.9809 10.7143 17.4286V6.57142C10.7143 6.01914 10.2666 5.57142 9.71428 5.57142H9.14285Z"
        fill={fill}
      />
    </svg>
  );
};
