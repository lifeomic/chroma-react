import * as React from 'react';
import { useTheme } from '../styles/index';
import { FilledIconProps } from './FilledIconProps';

export const Folder: React.FC<FilledIconProps> = ({
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
      data-icon="folder-filled"
      {...rootProps}
    >
      <path
        d="M3 18.5V5.5C3 4.67157 3.67157 4 4.5 4H9.6L11.4 7.07692H19.5C20.3284 7.07692 21 7.7485 21 8.57692V18.5C21 19.3284 20.3284 20 19.5 20H4.5C3.67157 20 3 19.3284 3 18.5Z"
        fill={useCurrentColor ? 'currentColor' : palette.blue[600]}
        stroke={useCurrentColor ? 'currentColor' : palette.blue[600]}
      />
    </svg>
  );
};
