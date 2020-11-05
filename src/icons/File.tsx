import * as React from 'react';
import { useTheme } from '../styles/index';
import { FilledIconProps } from './FilledIconProps';

export const File: React.FC<FilledIconProps> = ({
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
      data-icon="file-filled"
      {...rootProps}
    >
      <path
        d="M12.875 3H6.75C6.28587 3 5.84075 3.18964 5.51256 3.52721C5.18437 3.86477 5 4.32261 5 4.8V19.2C5 19.6774 5.18437 20.1352 5.51256 20.4728C5.84075 20.8104 6.28587 21 6.75 21H17.25C17.7141 21 18.1592 20.8104 18.4874 20.4728C18.8156 20.1352 19 19.6774 19 19.2V9.3L12.875 3Z"
        fill={useCurrentColor ? 'currentColor' : palette.black[100]}
      />
      <path d="M13 3V9H19" fill={palette.black[400]} />
    </svg>
  );
};
