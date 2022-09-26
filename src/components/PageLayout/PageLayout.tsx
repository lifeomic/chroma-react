import clsx from 'clsx';
import * as React from 'react';
import PageLayoutDefaultHero from '../../assets/PageLayoutDefaultHero.svg';
import { makeStyles } from '../../styles';
import { GetClasses, StandardProps } from '../../typeUtils';
import { PageHeader, PageHeaderProps } from '../PageHeader';

export const PageLayoutStylesKey = 'ChromaPageLayout';

export const useStyles = makeStyles(
  (theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      minHeight: '100%',
      marginRight: 'auto',
      marginLeft: 'auto',
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
    maxWidth: {
      maxWidth: theme.pxToRem(1344),
    },
    backgroundCover: {
      position: 'relative',
      // Negative margin so that it can stretch
      // outside of the default padding specified by `root`.
      marginLeft: theme.spacing(-4),
      marginRight: theme.spacing(-4),
      background: `url(${PageLayoutDefaultHero}) ${theme.palette.primary.main}`,
      backgroundSize: 'cover',
      marginBottom: theme.spacing(2),
    },
    headerBackgroundPadding: {
      paddingTop: theme.spacing(3),
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
      paddingBottom: theme.spacing(3),
    },
    disclaimer: {
      paddingBottom: theme.spacing(2),
    },
    tabs: {
      padding: theme.spacing(0),
    },
    sidebar: {
      width: theme.pxToRem(192),
      marginRight: theme.spacing(3),
      flexGrow: 0,
      flexShrink: 0,
    },
    layoutContainer: {
      display: 'flex',
      height: '100%',
      marginBottom: theme.spacing(4),
    },
    content: {
      flex: 1,
      width: '100%',
      // Fix for firefox so the content doesn't overflow
      maxWidth: '100%',
    },
  }),
  { name: PageLayoutStylesKey }
);

export type PageLayoutClasses = GetClasses<typeof useStyles>;

export interface PageLayoutProps
  extends StandardProps<HTMLDivElement, PageLayoutClasses> {
  backgroundImage?: string;
  children?: React.ReactNode;
  disclaimer?: React.ReactNode;
  headerActions?: PageHeaderProps['actions'];
  headerAlign?: PageHeaderProps['align'];
  headerCenter?: PageHeaderProps['center'];
  headerCenterClassName?: PageHeaderProps['centerClassName'];
  headerActionsClassName?: PageHeaderProps['actionsClassName'];
  sidebar?: React.ReactNode;
  title?: PageHeaderProps['title'];
  tabs?: React.ReactNode;
  maxWidth?: boolean;
  applyBackgroundCover?: boolean;
  left?: PageHeaderProps['left'];
  leftClassName?: PageHeaderProps['leftClassName'];
}

interface ConditionalWrapperProps {
  condition: boolean;
  wrapper: any;
  children: React.ReactNode;
}

const ConditionalWrapper: React.FC<ConditionalWrapperProps> = ({
  condition,
  wrapper,
  children,
}) => (condition ? wrapper(children) : children);

/**
 * A layout component for content pages within any LifeOmic application. It is
 * recommended this component is the first child of a `<main>` element. The primary
 * goal of this component is to create consistency in an application, so that each
 * main content area is the same from a layout-perspective. There are plenty of
 * options that can be provided to the component, so take a look at the different
 * stories in this section for more information.
 *
 * ### Links
 *
 * - [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/PageLayout/PageLayout.tsx)
 * - [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/PageLayout/PageLayout.stories.tsx)
 *
 */
export const PageLayout = React.forwardRef<HTMLDivElement, PageLayoutProps>(
  (
    {
      backgroundImage,
      headerAlign = 'center',
      headerCenter,
      headerCenterClassName,
      headerActionsClassName,
      children,
      classes: additionalClasses,
      className,
      disclaimer,
      headerActions,
      sidebar,
      title,
      tabs,
      maxWidth = true,
      applyBackgroundCover = false,
      left,
      leftClassName,
      ...rootProps
    },
    ref
  ) => {
    const classes = useStyles({ classes: additionalClasses });

    return (
      <div
        ref={ref}
        className={clsx(
          classes.root,
          maxWidth && !applyBackgroundCover && classes.maxWidth,
          className
        )}
        {...rootProps}
      >
        <ConditionalWrapper
          condition={applyBackgroundCover}
          wrapper={(children: React.ReactNode) => (
            <div
              className={classes.backgroundCover}
              style={
                backgroundImage
                  ? {
                      backgroundImage: `url(${backgroundImage})`,
                    }
                  : undefined
              }
            >
              {children}
            </div>
          )}
        >
          <PageHeader
            align={headerAlign}
            className={
              applyBackgroundCover ? classes.headerBackgroundPadding : ''
            }
            title={title}
            center={headerCenter}
            centerClassName={headerCenterClassName}
            margin="none"
            actions={headerActions}
            actionsClassName={headerActionsClassName}
            color={applyBackgroundCover ? 'inverse' : 'default'}
            left={left}
            leftClassName={leftClassName}
          />
        </ConditionalWrapper>

        {!!disclaimer && <div className={classes.disclaimer}>{disclaimer}</div>}
        {!!tabs && <div className={classes.tabs}>{tabs}</div>}

        <div className={classes.layoutContainer}>
          {!!sidebar && <div className={classes.sidebar}>{sidebar}</div>}
          <div className={classes.content}>{children}</div>
        </div>
      </div>
    );
  }
);
