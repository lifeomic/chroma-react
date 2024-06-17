import * as React from 'react';

export const testId = 'iconComponent';

const IconSvg = (props: React.SVGProps<SVGSVGElement>) => (
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

export const IconComponent: React.MemoExoticComponent<(
  props: React.SVGProps<SVGSVGElement>
) => JSX.Element> = React.memo(IconSvg);
