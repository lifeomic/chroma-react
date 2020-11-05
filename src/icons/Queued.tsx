import * as React from 'react';
import { useTheme } from '../styles/index';
import { FilledIconProps } from './FilledIconProps';

export const Queued: React.FunctionComponent<FilledIconProps> = ({
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
      xmlns="http://www.w3.org/2000/svg"
      data-icon="queued-filled"
      {...rootProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM16.307 15.879C16.482 15.967 16.657 16 16.8319 16C17.2635 16 17.6717 15.78 17.8817 15.384C18.1616 14.845 17.9283 14.185 17.3568 13.91L13.3328 12.018V6.1C13.3328 5.495 12.8079 5 12.1664 5C11.5249 5 11 5.495 11 6.1V12.7C11 13.118 11.2449 13.503 11.6415 13.679L16.307 15.879Z"
        fill={useCurrentColor ? 'currentColor' : palette.black[400]}
      />
    </svg>
  );
};
