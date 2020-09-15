import * as React from 'react';
import { Link } from 'react-router-dom';

/**
 * A private component to Chroma, used to generate an `<a>` tag, either the
 * semantic, out of the box version, or a react-router-dom `<Link>`.
 */
export const LinkOrExternalLink: React.FC<any> = ({
  to,
  children,
  className,
  disabled,
  innerRef,
  rel,
  target,
  ...rootProps
}) => {
  const disabledProps: React.AnchorHTMLAttributes<any> = disabled
    ? { 'aria-disabled': true, role: 'button' }
    : {};

  if (to.toString().match(/^https?:/) || disabled) {
    const externalTarget = target || '_blank';
    return (
      <a
        href={disabled ? null : to}
        className={className}
        ref={innerRef}
        {...rootProps}
        {...disabledProps}
        target={externalTarget}
        rel={externalTarget === '_blank' ? 'noopener noreferrer' : rel}
      >
        {children}
      </a>
    );
  }
  return (
    <Link
      to={to}
      className={className}
      innerRef={innerRef}
      target={target}
      rel={rel}
      {...rootProps}
    >
      {children}
    </Link>
  );
};
