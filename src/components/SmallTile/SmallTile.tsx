import clsx from 'clsx';
import * as React from 'react';
import { newMakeStyles } from '../../styles';
import { GetClasses } from '../../typeUtils';

export const SmallTileStylesKey = 'ChromaSmallTile';

export const useStyles = newMakeStyles({ name: SmallTileStylesKey })(
  (theme) => ({
    root: {
      width: theme.pxToRem(172),
      height: theme.pxToRem(115),
      borderRadius: 5,
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
        '& > * > p': {
          transition: 'color 0.5s ease',
          color: theme.palette.primary.main,
        },
      },
    },
  })
);

export interface SmallTileOwnProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children?: React.ReactNode;
}

export type SmallTileClasses = GetClasses<typeof useStyles>;

export interface SmallTileProps extends SmallTileOwnProps {}

/**
 * A tile component for displaying a minimal amount of content. Compose the
 * different components together to suit the needs for your application.
 *
 * ### Links
 *
 * - [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/SmallTile/SmallTile.tsx)
 * - [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/SmallTile/SmallTile.stories.tsx)
 */
export const SmallTile = React.forwardRef<HTMLDivElement, SmallTileProps>(
  ({ children, className, onClick, ...rootProps }, ref) => {
    const { classes } = useStyles();

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
