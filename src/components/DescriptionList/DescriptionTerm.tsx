import clsx from 'clsx';
import * as React from 'react';
import { makeStyles } from '../../styles';
import { GetClasses } from '../../typeUtils';
import { AvatarProps } from '../Avatar';
import { Box } from '../Box';

export const DescriptionTermStylesKey = 'ChromaDescriptionTerm';

export const useStyles = makeStyles(
  (theme) => ({
    root: {
      display: 'flex',
      padding: 0,
      width: '100%',
    },
    alignBaseline: { alignItems: 'baseline' },
    alignCenter: { alignItems: 'center' },
    alignStart: { alignItems: 'start' },
    alignFlexStart: { alignItems: 'flex-start' },
    alignEnd: { alignItems: 'end' },
    alignFlexEnd: { alignItems: 'flex-end' },
    item: {
      alignItems: 'center',
      border: 'none',
      color: theme.palette.text.primary,
      cursor: 'pointer',
      display: 'flex',
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.pxToRem(14),
      letterSpacing: '0.015625em',
      margin: 0,
      outline: 'none',
      overflow: 'hidden',
      padding: 0,
      textAlign: 'left',
      userSelect: 'none',
      width: '100%',
      '&:focus': {
        outline: 'none',
      },
    },
    justifyStart: { justifyContent: 'flex-start' },
    justifyEnd: { justifyContent: 'flex-end' },
    justifyEvenly: { justifyContent: 'space-evenly' },
    justifyBetween: { justifyContent: 'space-between' },
    justifyCenter: { justifyContent: 'center' },
    buttonItem: {
      '&:focus, &:hover': {
        backgroundColor: 'rgba(222,244,252, 0.6)',
      },

      '&:disabled, &[disabled]': {
        '&, & *': {
          color: theme.palette.text.disabled,
        },
      },
    },
    readonlyItem: {
      cursor: 'default',

      '&:focus.focus-visible': {
        backgroundColor: 'rgba(222,244,252, 0.6)',
      },
    },
    avatar: {
      alignSelf: 'flex-start',
      marginRight: theme.spacing(1),
    },
    icon: {
      alignSelf: 'flex-start',
      marginRight: theme.spacing(1),
      minWidth: theme.pxToRem(18),
    },
    text: {
      lineHeight: 1.35,
    },
    secondaryText: {
      color: theme.palette.text.secondary,
      fontSize: theme.pxToRem(12),
    },
    textLeft: { textAlign: 'left' },
    textRight: { textAlign: 'right' },
    textCenter: { textAlign: 'center' },
    textStart: { textAlign: 'start' },
    textEnd: { textAlign: 'end' },
  }),
  { name: DescriptionTermStylesKey }
);

export type DescriptionTermClasses = GetClasses<typeof useStyles>;

export interface DescriptionTermProps
  extends React.ComponentPropsWithoutRef<'li'> {
  align?:
    | 'stretch'
    | 'baseline'
    | 'center'
    | 'start'
    | 'flex-start'
    | 'end'
    | 'flex-end';
  avatar?: React.ReactElement<AvatarProps>;
  children?: React.ReactNode;
  disabled?: boolean;
  icon?: React.MemoExoticComponent<
    (props: React.SVGProps<SVGSVGElement>) => JSX.Element
  >;
  justify?:
    | 'center'
    | 'flex-start'
    | 'space-between'
    | 'space-evenly'
    | 'flex-end';
  onClick?: any;
  text?: string;
  textAlign?: 'left' | 'right' | 'center' | 'start' | 'end';
  secondaryText?: string;
}

export const DescriptionTerm = React.forwardRef<
  HTMLLIElement,
  DescriptionTermProps
>(
  (
    {
      avatar,
      align = 'flex-start',
      className,
      children,
      disabled,
      icon: Icon,
      justify = 'flex-start',
      onClick,
      text,
      textAlign = 'left',
      secondaryText,
      ...rootProps
    },
    ref
  ) => {
    const classes = useStyles({});
    const Tag = !!onClick ? 'button' : 'div';

    return (
      <li
        className={clsx(classes.root, {
          [classes.alignBaseline]: align === 'baseline',
          [classes.alignCenter]: align === 'center',
          [classes.alignStart]: align === 'start',
          [classes.alignFlexStart]: align === 'flex-start',
          [classes.alignEnd]: align === 'end',
          [classes.alignFlexEnd]: align === 'flex-end',
        })}
        ref={ref}
        {...rootProps}
      >
        <Tag
          className={clsx(
            classes.item,
            {
              [classes.justifyBetween]: justify === 'space-between',
              [classes.justifyEnd]: justify === 'flex-end',
              [classes.justifyEvenly]: justify === 'space-evenly',
              [classes.justifyStart]: justify === 'flex-start',
              [classes.justifyCenter]: justify === 'center',
            },
            !!onClick ? classes.buttonItem : classes.readonlyItem,
            className
          )}
          disabled={disabled}
          onClick={onClick}
        >
          {!!Icon && !avatar && (
            <Icon
              role="img"
              aria-hidden
              className={classes.icon}
              width={18}
              height={18}
            />
          )}

          {!!avatar &&
            !Icon &&
            React.cloneElement(React.Children.only(avatar), {
              className: classes.avatar,
              size: 0,
            })}

          <Box
            className={clsx({
              [classes.alignEnd]: justify === 'flex-end',
              [classes.alignStart]: justify === 'flex-start',
              [classes.alignCenter]: justify === 'center',
            })}
            direction="column"
            gap={0.25}
          >
            {!!text && (
              <Box
                className={clsx(classes.text, {
                  [classes.textLeft]: textAlign === 'left',
                  [classes.textRight]: textAlign === 'right',
                  [classes.textCenter]: textAlign === 'center',
                  [classes.textStart]: textAlign === 'start',
                  [classes.textEnd]: textAlign === 'end',
                })}
              >
                {text}
              </Box>
            )}
            <Box
              className={clsx(classes.text, {
                [classes.textLeft]: textAlign === 'left',
                [classes.textRight]: textAlign === 'right',
                [classes.textCenter]: textAlign === 'center',
                [classes.textStart]: textAlign === 'start',
                [classes.textEnd]: textAlign === 'end',
              })}
            >
              {children}
            </Box>
            {!!secondaryText && (
              <Box
                className={clsx(classes.secondaryText, {
                  [classes.textLeft]: textAlign === 'left',
                  [classes.textRight]: textAlign === 'right',
                  [classes.textCenter]: textAlign === 'center',
                  [classes.textStart]: textAlign === 'start',
                  [classes.textEnd]: textAlign === 'end',
                })}
              >
                {secondaryText}
              </Box>
            )}
          </Box>
        </Tag>
      </li>
    );
  }
);
