import * as React from 'react';
import { AdaptiveIconProps } from './AdaptiveIconProps';

export const ChevronDown: React.FC<AdaptiveIconProps> = ({
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
        d="M11.6464 14.6464L6.85355 9.85355C6.53857 9.53857 6.76165 9 7.20711 9H16.7929C17.2383 9 17.4614 9.53857 17.1464 9.85355L12.3536 14.6464C12.1583 14.8417 11.8417 14.8417 11.6464 14.6464Z"
        fill={fill}
      />
    </svg>
  );
};
