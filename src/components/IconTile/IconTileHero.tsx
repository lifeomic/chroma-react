import clsx from 'clsx';
import * as React from 'react';
import { makeStyles } from '../../styles/index';
import { GetClasses, StandardProps } from '../../typeUtils';

export const IconTileHeroStylesKey = 'ChromaIconTileHero';

export const useStyles = makeStyles(
  () => ({
    root: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      height: '43%',
    },
    background: ({
      backgroundUrl,
      backgroundColor = 'linear-gradient(45deg, #C947FD 0%, #2B4EFB 46.4%, #02BFF1 99.89%, rgba(48,177,251,0.85) 100%, #50D8FC 100%)',
    }: IconTileHeroOwnProps) => ({
      background: `url(${backgroundUrl}), ${backgroundColor}`,
      width: '100%',
      height: '100%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right top',
      backgroundSize: 'cover',
    }),
  }),
  { name: IconTileHeroStylesKey }
);

export type IconTileHeroClasses = GetClasses<typeof useStyles>;

export interface IconTileHeroOwnProps {
  backgroundColor?: string;
  backgroundUrl?: string;
  children?: React.ReactNode;
}

export interface IconTileHeroProps
  extends IconTileHeroOwnProps,
    StandardProps<HTMLDivElement, IconTileHeroClasses> {}

export const IconTileHero = React.forwardRef<HTMLDivElement, IconTileHeroProps>(
  (props, ref) => {
    const {
      children,
      className,
      // remove unsafeRootProps
      backgroundColor,
      backgroundUrl,
      classes: additionalClasses,
      ...rootProps
    } = props;
    const classes = useStyles(props);

    return (
      <div ref={ref} className={clsx(classes.root, className)} {...rootProps}>
        {!!backgroundUrl && <div className={classes.background} />}
        {children}
      </div>
    );
  }
);
