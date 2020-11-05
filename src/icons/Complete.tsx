import * as React from 'react';
import { useTheme } from '../styles/index';
import { FilledIconProps } from './FilledIconProps';

export const Complete: React.FC<FilledIconProps> = ({
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
      data-icon="complete-filled"
      {...rootProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 23C18.0751 23 23 18.0751 23 12C23 9.91636 22.4207 7.96803 21.4143 6.3073L12.3313 15.6617C12.1272 15.8717 11.8438 16 11.5377 16C11.2316 16 10.9481 15.8717 10.7327 15.6617L7.33161 12.1625C6.88946 11.7076 6.88946 10.9727 7.33161 10.5178C7.77376 10.0629 8.488 10.0629 8.93014 10.5178L11.5377 13.1889L20.011 4.46176C18.0048 2.33062 15.1578 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z"
        fill={useCurrentColor ? 'currentColor' : palette.green[800]}
      />
    </svg>
  );
};
