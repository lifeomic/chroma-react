import * as React from 'react';

export const testId = 'iconComponent';

export const IconComponent: React.FC<React.SVGProps<SVGSVGElement>> = (
  props
) => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    data-testid={testId}
    {...props}
  />
);
