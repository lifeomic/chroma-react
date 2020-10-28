import clsx from 'clsx';
import * as React from 'react';
import { makeStyles } from '../../styles';
import { GetClasses } from '../../typeUtils';
import { AvatarSizeContext } from './AvatarSizeContext';

export const AvatarStylesKey = 'ChromaAvatar';

export const useStyles = makeStyles(
  (theme) => ({
    root: {
      alignItems: 'center',
      backgroundColor: theme.palette.primary.main,
      border: `${theme.pxToRem(1)} solid ${theme.palette.black[100]}`,
      borderRadius: 9999,
      color: theme.palette.common.white,
      display: 'inline-flex',
      flexShrink: 0,
      justifyContent: 'center',
      outline: 'none',
      position: 'relative',
      transition: 'opacity 0.25s ease, border 0.25s ease',
      userSelect: 'none',
      '&:focus': {
        opacity: 0.85,
        border: `${theme.pxToRem(2)} solid ${theme.palette.black[700]}`,
      },
    },
    size0: {
      fontSize: theme.typography.caption.fontSize,
      fontWeight: theme.typography.fontWeightBold,
      width: theme.pxToRem(22),
      height: theme.pxToRem(22),
    },
    size1: {
      fontSize: theme.typography.body1.fontSize,
      width: theme.pxToRem(32),
      height: theme.pxToRem(32),
    },
    size2: {
      fontSize: theme.typography.h5.fontSize,
      width: theme.pxToRem(42),
      height: theme.pxToRem(42),
    },
    img: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      maxWidth: '100%',
      verticalAlign: 'middle',
      borderRadius: 9999,
    },
    defaultSrc: {
      fill: theme.palette.common.white,
    },
    clickable: {
      cursor: 'pointer',
      '&:hover': {
        opacity: 0.85,
        border: `${theme.pxToRem(1)} solid ${theme.palette.black[700]}`,
      },
    },
  }),
  { name: AvatarStylesKey }
);

export type AvatarClasses = GetClasses<typeof useStyles>;

export interface AvatarProps extends React.ComponentPropsWithoutRef<'div'> {
  name: string;
  size?: 0 | 1 | 2;
  src?: string;
  useDefaultSrc?: boolean;
}

const getInitials = (name: string) => {
  if (!name) {
    return '';
  }

  const [firstName] = name.split(' ');

  return firstName?.charAt(0)?.toUpperCase();
};

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      className,
      children,
      name = '',
      onClick,
      size = 1,
      src,
      useDefaultSrc = false,
      ...rootProps
    },
    ref
  ) => {
    const classes = useStyles({});

    // We need to be *super* careful to not display any self identifying information
    // (name or image src) if "useDefaultSrc" is provided.  This will ensure
    // that our "masked mode" when dealing with healthcare information is respected
    return (
      // We conditionally add the role if `onClick` is provided
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions
      <div
        ref={ref}
        className={clsx(
          classes.root,
          {
            [classes.size0]: size === 0,
            [classes.size1]: size === 1,
            [classes.size2]: size === 2,
          },
          onClick && classes.clickable,
          className
        )}
        onClick={onClick}
        aria-label={!src && name && !useDefaultSrc ? name : undefined}
        role={onClick ? 'button' : undefined}
        tabIndex={onClick ? 0 : undefined}
        {...rootProps}
      >
        {!src && !useDefaultSrc ? getInitials(name) : null}
        {src && !useDefaultSrc && (
          <img className={classes.img} src={src} alt={name} />
        )}
        {useDefaultSrc && (
          <svg
            className={clsx(classes.img, classes.defaultSrc)}
            fill="currentColor"
            viewBox="0 0 128 128"
            role="img"
          >
            <g>
              <path d="M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z" />
              <path d="M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24" />
            </g>
          </svg>
        )}
        {children && (
          <AvatarSizeContext.Provider value={{ size }}>
            {children}
          </AvatarSizeContext.Provider>
        )}
      </div>
    );
  }
);
