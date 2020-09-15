import * as React from 'react';
import { FilledIconProps } from './FilledIconProps';

export const Error: React.FC<FilledIconProps> = ({
  size = 24,
  useCurrentColor = false,
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
        d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM10.75 6.75C10.75 6.05964 11.3096 5.5 12 5.5C12.6904 5.5 13.25 6.05964 13.25 6.75V13.25C13.25 13.9404 12.6904 14.5 12 14.5C11.3096 14.5 10.75 13.9404 10.75 13.25V6.75ZM13.25 17.75C13.25 18.4404 12.6904 19 12 19C11.3096 19 10.75 18.4404 10.75 17.75C10.75 17.0596 11.3096 16.5 12 16.5C12.6904 16.5 13.25 17.0596 13.25 17.75Z"
        fill={useCurrentColor ? 'currentColor' : '#E04E3F'}
      />
    </svg>
  );
};
