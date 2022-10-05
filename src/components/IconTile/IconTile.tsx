import clsx from 'clsx';
import * as React from 'react';
import { makeStyles } from '../../styles';
import { GetClasses } from '../../typeUtils';

export const IconTileStylesKey = 'ChromaIconTile';

export const useStyles = makeStyles(
  (theme) => ({
    root: {
      width: theme.pxToRem(202),
      height: theme.pxToRem(200),
      borderRadius: 10,
      overflow: 'hidden',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      background: theme.palette.common.white,
      boxShadow: theme.boxShadows.table,
    },
    cursorPointer: {
      cursor: 'pointer',
      transition: 'transform 0.5s ease, box-shadow 0.25s ease-out',
      '&:hover, &:focus': {
        outline: 'none',
        transform: 'translate3d(0, -2px, 0)', // GPU acceleration on transition
        boxShadow: theme.boxShadows.elevatedContent,
        '& > * > p,span': {
          transition: 'color 0.5s ease',
          color: theme.palette.primary.main,
        },
      },
    },
  }),
  { name: IconTileStylesKey }
);

export interface IconTileOwnProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children?: React.ReactNode;
}

export type IconTileClasses = GetClasses<typeof useStyles>;

export interface IconTileProps extends IconTileOwnProps {}

/**
 * A tile component for displaying a hero background, icon badge, and minimal text
 * content. Compose the different components together to suit the needs for your
 * application.
 *
 * ### Links
 *
 * - [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/IconTile/IconTile.tsx)
 * - [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/IconTile/IconTile.stories.tsx)
 */
export const IconTile = React.forwardRef<HTMLDivElement, IconTileProps>(
  ({ children, className, onClick, ...rootProps }, ref) => {
    const classes = useStyles({});

    return (
      // We conditionally add the role if `onClick` is provided
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions
      <div
        ref={ref}
        className={clsx(
          classes.root,
          className,
          !!onClick && classes.cursorPointer
        )}
        role={onClick ? 'button' : undefined}
        tabIndex={onClick ? 0 : undefined}
        onClick={onClick}
        {...rootProps}
      >
        {children}
      </div>
    );
  }
);
