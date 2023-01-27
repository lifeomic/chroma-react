import { ConditionalWrapper } from '../_private/ConditionalWrapper';
import { GetClasses } from '../../typeUtils';
import { IconButton } from '../IconButton';
import { newMakeStyles } from '../../styles';
import { ModalActions, ModalActionsProps } from './ModalActions';
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  Variants,
} from 'framer-motion';
import { Portal } from 'reakit/Portal';
import { RemoveScroll } from 'react-remove-scroll';
import { Text } from '../Text';
import { useForkedRef } from './helpers';
import { X } from '@lifeomic/chromicons';
import clsx from 'clsx';
import FocusLock from 'react-focus-lock';
import * as React from 'react';
import { composeEventHandlers } from '../../utils';

const ariaDescribedBy = 'modal-content';
const ariaLabelledBy = 'modal-header';

export const ModalStylesKey = 'ChromaModal';

export const OVERLAY_TEST_ID = 'chroma-overlay-testid';

export const useStyles = newMakeStyles({ name: ModalStylesKey })((theme) => ({
  overlay: {
    backgroundColor: theme.hexToRgba(theme.palette.common.black, 0.5),
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    left: 0,
    overflow: 'auto',
    position: 'fixed',
    right: 0,
    top: 0,
    zIndex: theme.zIndex.modal,
    '@media screen and (max-width: 480px)': {
      justifyContent: 'flex-end',
    },
  },
  content: {
    background: theme.palette.common.white,
    borderRadius: theme.pxToRem(10),
    display: 'flex',
    flexDirection: 'column',
    margin: '10vh auto',
    outline: 'none',
    paddingTop: theme.spacing(0.25),
    paddingBottom: theme.spacing(0.25),
    width: theme.pxToRem(384),
    maxWidth: theme.pxToRem(600),
    overflow: 'hidden',
    '@media screen and (max-width: 480px)': {
      marginBottom: theme.spacing(0.75),
      marginLeft: theme.spacing(0.75),
      marginRight: theme.spacing(0.75),
      maxHeight: '95%',
      maxWidth: '480px',
      width: 'unset',
    },
    '& form': {
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
    },
  },
  contentFullWidth: {
    width: 'calc(100% - 6rem)',
    '@media screen and (max-width: 480px)': {
      width: 'unset',
    },
  },
  contentSize0: {
    maxHeight: theme.pxToRem(256),
    '@media screen and (max-width: 480px)': {
      maxHeight: 'unset',
    },
  },
  contentSize1: {
    maxHeight: theme.pxToRem(480),
    '@media screen and (max-width: 480px)': {
      maxHeight: 'unset',
    },
  },
  contentFullScreen: {
    background: theme.palette.common.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    zIndex: theme.zIndex.modal,
  },
  verticalPadding: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  modalHeader: {
    alignItems: 'center',
    borderBottom: `1px solid ${theme.palette.divider}`,
    display: 'flex',
    justifyContent: 'space-between',
    '&:only-child': {
      borderBottom: 'none',
    },
  },
  modalHeaderFullScreen: {
    alignItems: 'center',
    backgroundColor: theme.palette.common.white,
    borderBottom: `1px solid ${theme.palette.divider}`,
    display: 'flex',
    justifyContent: 'space-between',
    paddingBottom: theme.spacing(0.5),
    paddingLeft: theme.spacing(2.5),
    paddingRight: theme.spacing(2.5),
    paddingTop: theme.spacing(0.5),
  },
  modalChildrenContainer: {
    background: theme.palette.background.default,
    // Added padding on the bottom so that the spacing
    // between the title and top of the text ~equals spacing
    // between bottom of content and actions container
    padding: theme.spacing(2, 2, 2.5),
    overflowY: 'auto',
    WebkitOverflowScrolling: 'touch', // Add iOS momentum scrolling.
  },
  modalChildrenContainerFullScreen: {
    background: theme.palette.grey[50],
    height: '100%',
    overflowY: 'auto',
    padding: theme.spacing(4, 3.75, 4, 3.75),
    width: '100%',
    WebkitOverflowScrolling: 'touch', // Add iOS momentum scrolling.
  },
  modalActions: {
    // On mobile, we want to do the following:
    // 1) Vertically stack the buttons
    // 2) Reverse the order of the actions.  On mobile devices,
    //    the negative/cancel action is normally at the *bottom*,
    //    whereas our default behavior with standard modals is
    //    <cancel> <save>
    // 3) Target the buttons and set the widths to take 100%
    // 4) Target the height of buttons and make them taller,
    //    just so that users have a larger tap-target
    '@media screen and (max-width: 480px)': {
      display: 'flex',
      flexDirection: 'column-reverse',
      '& > button': {
        width: '100%',
        height: theme.pxToRem(48),
        // Since we are `column-reverse`, margin on the bottom is now
        // margin top
        marginTop: theme.spacing(1),
        '&:last-of-type': {
          marginTop: 0,
        },
      },
    },
  },
  modalTitle: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
}));

export type ModalClasses = GetClasses<typeof useStyles>;

export interface ModalProps
  extends Pick<
    React.ComponentPropsWithoutRef<'div'>,
    'className' | 'onClick' | 'onMouseDown' | 'onKeyDown'
  > {
  actions?: React.ReactNode;
  allowPinchZoom?: boolean;
  children?: React.ReactNode;
  customHeader?: React.ReactNode;
  contentClassName?: string;
  overlayClassName?: string;
  fullWidth?: boolean;
  isFormContent?: boolean;
  isFullScreen?: boolean;
  isOpen?: boolean;
  justifyActions?: ModalActionsProps['justify'];
  onDismiss?: (props: any) => void;
  disableDismissOnClickOutside?: boolean;
  onFormSubmit?: (data: any) => void;
  poses?: Variants;
  size?: 0 | 1;
  title?: string;
}

const ModalInner = React.forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      allowPinchZoom,
      overlayClassName,
      children,
      onClick,
      onDismiss,
      disableDismissOnClickOutside,
      onMouseDown,
      onKeyDown,
    },
    ref
  ) => {
    const { classes } = useStyles();
    const mouseDownTarget = React.useRef<any>(null);
    const overlayNode = React.useRef(null);
    const thisRef = useForkedRef(overlayNode, ref);

    return (
      // Since we are using FocusLock, we can safely ignore the `autoFocus` ESLint complaint
      // eslint-disable-next-line jsx-a11y/no-autofocus
      <FocusLock autoFocus returnFocus>
        <RemoveScroll allowPinchZoom={allowPinchZoom}>
          <motion.div
            data-testid={OVERLAY_TEST_ID}
            className={clsx(classes.overlay, overlayClassName)}
            onClick={composeEventHandlers([
              onClick,
              (event) => {
                if (mouseDownTarget.current === event.target) {
                  event.stopPropagation();
                  onDismiss &&
                    !disableDismissOnClickOutside &&
                    onDismiss(event);
                }
              },
            ])}
            onMouseDown={composeEventHandlers([
              onMouseDown,
              (event) => {
                mouseDownTarget.current = event.target;
              },
            ])}
            onKeyDown={composeEventHandlers([
              onKeyDown,
              (event) => {
                if (event.key === 'Escape') {
                  event.stopPropagation();
                  onDismiss && onDismiss(event);
                }
              },
            ])}
            ref={thisRef}
            positionTransition
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 0.15, duration: 0.2 },
            }}
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
          >
            {children}
          </motion.div>
        </RemoveScroll>
      </FocusLock>
    );
  }
);

const Overlay = React.forwardRef<HTMLDivElement, ModalProps>(
  ({ allowPinchZoom, isOpen = true, ...rootProps }, ref) => {
    const ownRef = React.useRef(null);
    const thisRef = ref || ownRef;

    return (
      <>
        {isOpen ? (
          <Portal>
            <ModalInner
              allowPinchZoom={allowPinchZoom}
              ref={thisRef}
              {...rootProps}
            />
          </Portal>
        ) : null}
      </>
    );
  }
);

const Content = React.forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      actions,
      className,
      children,
      contentClassName,
      fullWidth,
      justifyActions,
      isFormContent,
      onFormSubmit,
      onClick,
      onDismiss,
      customHeader,
      size,
      title,
      poses = {},
      ...rootProps
    },
    ref
  ) => {
    const { classes } = useStyles();
    const shouldReduceMotion = useReducedMotion();
    const poseVariants = {
      init: poses.init || { y: 50, scale: 0.3 },
      open: poses.open || { y: 0, scale: 1 },
      exit: poses.exit || { scale: 0.5, transition: { duration: 0.15 } },
    };

    return (
      <motion.div
        className={clsx(
          classes.content,
          fullWidth && classes.contentFullWidth,
          className
        )}
        role="dialog"
        aria-modal="true"
        aria-describedby={ariaDescribedBy}
        aria-labelledby={ariaLabelledBy}
        tabIndex={-1}
        onClick={composeEventHandlers([
          onClick,
          (event) => {
            event.stopPropagation();
          },
        ])}
        ref={ref}
        variants={poseVariants}
        initial={shouldReduceMotion ? {} : 'init'}
        animate={shouldReduceMotion ? {} : 'open'}
        exit={shouldReduceMotion ? {} : 'exit'}
        {...rootProps}
      >
        {customHeader ? (
          customHeader
        ) : (
          <div
            id={ariaLabelledBy}
            className={clsx(classes.modalHeader, classes.verticalPadding)}
          >
            {!!title && (
              <Text className={classes.modalTitle} size="subbody" weight="bold">
                {title}
              </Text>
            )}
            <IconButton
              aria-label="Close open modal"
              icon={X}
              size={0}
              tabIndex={0}
              onClick={onDismiss}
              paddingRight={0}
            />
          </div>
        )}
        <ConditionalWrapper
          condition={Boolean(isFormContent && onFormSubmit)}
          wrapper={(children: React.ReactNode) => (
            <form onSubmit={onFormSubmit}>{children}</form>
          )}
        >
          {children && (
            <div
              id={ariaDescribedBy}
              className={clsx(
                classes.modalChildrenContainer,
                classes.verticalPadding,
                {
                  [classes.contentSize0]: size === 0,
                  [classes.contentSize1]: size === 1,
                },
                contentClassName
              )}
            >
              {children}
            </div>
          )}
          {!!actions && (
            <ModalActions
              className={clsx(classes.modalActions, classes.verticalPadding)}
              justify={justifyActions}
            >
              {actions}
            </ModalActions>
          )}
        </ConditionalWrapper>
      </motion.div>
    );
  }
);

const FullScreenContent = React.forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      children,
      className,
      contentClassName,
      onClick,
      onDismiss,
      title,
      customHeader,
      ...rootProps
    },
    ref
  ) => {
    const { classes } = useStyles();

    return (
      <motion.div
        className={clsx(classes.contentFullScreen, className)}
        role="dialog"
        aria-modal="true"
        aria-describedby={ariaDescribedBy}
        aria-labelledby={ariaLabelledBy}
        tabIndex={-1}
        onClick={composeEventHandlers([
          onClick,
          (event) => {
            event.stopPropagation();
          },
        ])}
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.1, ease: [0.16, 1, 0.3, 1] }, // https://easings.net/#easeOutExpo
        }}
        exit={{
          opacity: 0,
          transition: { duration: 0.08, ease: [0.7, 0, 0.84, 0] },
        }} // https://easings.net/#easeInExpo
        {...rootProps}
      >
        {customHeader ? (
          customHeader
        ) : (
          <div id={ariaLabelledBy} className={classes.modalHeaderFullScreen}>
            {!!title && <Text size="subbody">{title}</Text>}
            <IconButton
              aria-label="Close open modal"
              icon={X}
              size={0}
              tabIndex={0}
              onClick={onDismiss}
              paddingRight={0}
            />
          </div>
        )}
        <div
          id={ariaDescribedBy}
          className={clsx(
            classes.modalChildrenContainerFullScreen,
            contentClassName
          )}
        >
          {children}
        </div>
      </motion.div>
    );
  }
);

/**
 * Tab components for conditionally rendering content.
 *
 * ### Accessibility
 *
 * - The Modal has `role="dialog"`.
 * - The Modal has `aria-modal="true"`.
 * - The Modal has the content `aria-describedby` and title `aria-labelledby`
 *   attributes.
 * - The scroll body is locked, to prevent the content behind the Modal from
 *   scrolling.
 * - The focus is locked inside of the modal.
 * - The focus is set to the first tabbable element when open.
 * - Pressing `Escape` closes the modal and returns focus to the anchor element.
 *
 * ### Links
 *
 * - [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/Modal/Modal.tsx)
 * - [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/Modal/Modal.stories.tsx)
 */
export const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      allowPinchZoom,
      isFullScreen,
      isOpen,
      onDismiss,
      disableDismissOnClickOutside,
      size = 0,
      overlayClassName,
      ...rootProps
    },
    ref
  ) => {
    const ownRef = React.useRef(null);

    // If a ref is forwarded, use it; otherwise, use ourselves as the ref
    const thisRef = ref || ownRef;

    return (
      <AnimatePresence>
        {isOpen ? (
          <Overlay
            overlayClassName={overlayClassName}
            allowPinchZoom={allowPinchZoom}
            isOpen={isOpen}
            onDismiss={onDismiss}
            disableDismissOnClickOutside={disableDismissOnClickOutside}
          >
            {isFullScreen ? (
              <FullScreenContent
                ref={thisRef}
                size={size}
                onDismiss={onDismiss}
                {...rootProps}
              />
            ) : (
              <Content
                ref={thisRef}
                size={size}
                onDismiss={onDismiss}
                {...rootProps}
              />
            )}
          </Overlay>
        ) : null}
      </AnimatePresence>
    );
  }
);
