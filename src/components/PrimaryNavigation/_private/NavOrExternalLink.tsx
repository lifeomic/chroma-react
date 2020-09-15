import * as React from 'react';
import { NavLink } from 'react-router-dom';

export const NavOrExternalLink: React.FC<any> = ({
  to,
  children,
  className,
  ...props
}) => {
  if (to.match(/^https?:/)) {
    return (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={to}
        className={className}
      >
        {children}
      </a>
    );
  }
  return (
    <NavLink to={to} className={className} {...props}>
      {children}
    </NavLink>
  );
};
