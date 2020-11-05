import * as React from 'react';
import { useTheme } from '../styles/index';
import { FilledIconProps } from './FilledIconProps';

export const Info: React.FC<FilledIconProps> = ({
  size = 24,
  useCurrentColor = false,
  ...rootProps
}) => {
  const { palette } = useTheme();

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-icon="info-filled"
      {...rootProps}
    >
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        fill={useCurrentColor ? 'currentColor' : palette.blue[600]}
        stroke={useCurrentColor ? 'currentColor' : palette.blue[600]}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 17V11"
        stroke={palette.common.white}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="7" r="1" fill={palette.common.white} />
    </svg>
  );
};
