import { fireEvent } from '@testing-library/react';
import * as React from 'react';
import { hasClass } from '../../testUtils/hasClass';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { Modal, ModalProps } from './index';
import { OVERLAY_TEST_ID } from './Modal';

const testId = 'Modal';

const getBaseProps = (): ModalProps => ({
  isOpen: true,
});

const CUSTOM_HEADER_ID = 'customHeaderTest';
const CUSTOM_HEADER = <div data-testid={CUSTOM_HEADER_ID}>Hello World</div>;

test('it renders a Modal', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <Modal {...props} data-testid={testId}>
      <p data-testid="children">Content</p>
    </Modal>
  );

  const root = await findByTestId(testId);
  expect(root).toBeInTheDocument();
  expect(hasClass(root, 'ChromaModal-content')).toBe(true);
  expect(root.getAttribute('role')).toEqual('dialog');
  expect(root.getAttribute('aria-modal')).toEqual('true');
  expect(root.getAttribute('aria-describedby')).toBeTruthy();
  expect(root.getAttribute('aria-labelledby')).toBeTruthy();
  expect(root.getAttribute('tabIndex')).toEqual('-1');

  const children = await findByTestId('children');
  expect(hasClass(children?.parentElement, 'ChromaModal-contentSize0')).toBe(
    true
  );
});

test('it renders a Modal with the specified "title"', async () => {
  const props = getBaseProps();
  const { findByText } = renderWithTheme(
    <Modal {...props} title="Modal Title" data-testid={testId}>
      <p>Content</p>
    </Modal>
  );

  const title = await findByText(/Modal Title/);
  expect(title).toBeInTheDocument();
  expect(title?.parentElement?.getAttribute('id')).toBeTruthy();
  expect(hasClass(title?.parentElement, 'ChromaModal-modalHeader')).toBe(true);
  expect(hasClass(title?.parentElement, 'ChromaModal-verticalPadding')).toBe(
    true
  );
});

test('it renders a Modal with "size={1}"', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <Modal {...props} size={1}>
      <p data-testid={testId}>Content</p>
    </Modal>
  );

  const children = await findByTestId(testId);
  expect(hasClass(children?.parentElement, 'ChromaModal-contentSize1')).toBe(
    true
  );
});

test('it applies the content class for the modal', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <Modal {...props} size={1} contentClassName="custom-class-name">
      <p data-testid={testId}>Content</p>
    </Modal>
  );

  const children = await findByTestId(testId);
  expect(hasClass(children?.parentElement, 'custom-class-name')).toBe(true);
});

test('it calls the provided "onDismiss" on ESC key press', async () => {
  const mockFn = jest.fn();
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <Modal {...props} onDismiss={mockFn} data-testid={testId}>
      <p>Content</p>
    </Modal>
  );

  const root = await findByTestId(testId);

  fireEvent.keyDown(root, { key: 'Escape', code: 27 });
  expect(mockFn).toBeCalledTimes(1);
});

test('it applies the "fullWidth" class', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <Modal {...props} fullWidth data-testid={testId}>
      <p>Content</p>
    </Modal>
  );

  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaModal-contentFullWidth')).toBe(true);
});

// #region modal actions

test('it renders actions', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <Modal
      {...props}
      actions={
        <div data-testid={testId}>
          <button>Button 1</button>
          <button>Button 2</button>
        </div>
      }
    >
      <p>Content</p>
    </Modal>
  );

  const actions = await findByTestId(testId);
  expect(actions).toBeInTheDocument();
  expect(hasClass(actions?.parentElement, 'ChromaModal-modalActions')).toBe(
    true
  );
  expect(hasClass(actions?.parentElement, 'ChromaModal-verticalPadding')).toBe(
    true
  );
});

test('it renders actions with "justifyActions"', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <Modal
      {...props}
      justifyActions="space-between"
      actions={
        <div data-testid={testId}>
          <button>Button 1</button>
          <button>Button 2</button>
        </div>
      }
    >
      <p>Content</p>
    </Modal>
  );

  const actions = await findByTestId(testId);
  expect(
    hasClass(actions?.parentElement, 'ChromaModalActions-justifyBetween')
  ).toBe(true);
});

// #endregion

test('it renders a Modal with the content wrapped in a form when "isFormContent" and "onFormSubmit" is provided', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <Modal
      {...props}
      isFormContent={true}
      onFormSubmit={jest.fn()}
      actions={
        <div data-testid={testId}>
          <button>Button 1</button>
          <button>Button 2</button>
        </div>
      }
    >
      <p>Content</p>
    </Modal>
  );

  const actions = await findByTestId(testId);
  expect(actions?.parentElement?.parentElement?.nodeName).toEqual('FORM');
});

test('it renders a fullscreen Modal', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <Modal {...props} data-testid={testId} isFullScreen={true}>
      <p>Content</p>
    </Modal>
  );

  const root = await findByTestId(testId);
  expect(root).toBeInTheDocument();
  expect(hasClass(root, 'ChromaModal-contentFullScreen')).toBe(true);
});

test('it applies the content class for the fullscreen modal', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <Modal {...props} isFullScreen contentClassName="custom-class-name">
      <p data-testid={testId}>Content</p>
    </Modal>
  );

  const children = await findByTestId(testId);
  expect(hasClass(children?.parentElement, 'custom-class-name')).toBe(true);
});

test('it applies the provided className', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <Modal {...props} data-testid={testId} className="custom-class-name" />
  );

  const root = await findByTestId(testId);
  expect(hasClass(root, 'custom-class-name')).toBe(true);
});

test('it applies the provided className when fullscreen', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <Modal
      {...props}
      data-testid={testId}
      isFullScreen={true}
      className="custom-class-name"
    />
  );

  const root = await findByTestId(testId);
  expect(hasClass(root, 'custom-class-name')).toBe(true);
});

test('it renders the customHeader when not fullscreen', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <Modal
      {...props}
      customHeader={CUSTOM_HEADER}
      data-testid={testId}
      className="custom-class-name"
    />
  );

  const customHeader = await findByTestId(CUSTOM_HEADER_ID);
  expect(customHeader).toBeTruthy();
});

test('it renders the customHeader when fullscreen', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <Modal
      {...props}
      customHeader={CUSTOM_HEADER}
      data-testid={testId}
      isFullScreen={true}
      className="custom-class-name"
    />
  );

  const customHeader = await findByTestId(CUSTOM_HEADER_ID);
  expect(customHeader).toBeTruthy();
});

test('calls "onDismiss" on clicking outside the modal', async () => {
  const onDismissMock = jest.fn();
  const props: ModalProps = {
    ...getBaseProps(),
    onDismiss: onDismissMock,
  };

  const { findByTestId } = renderWithTheme(<Modal {...props} />);
  const overlay = await findByTestId(OVERLAY_TEST_ID);

  fireEvent.mouseDown(overlay);
  fireEvent.click(overlay);

  expect(onDismissMock).toHaveBeenCalledTimes(1);
});

test('disables dismissing by clicking outside the modal based on prop', async () => {
  const onDismissMock = jest.fn();
  const props: ModalProps = {
    ...getBaseProps(),
    onDismiss: onDismissMock,
    disableDismissOnClickOutside: true,
  };

  const { findByTestId } = renderWithTheme(<Modal {...props} />);
  const overlay = await findByTestId(OVERLAY_TEST_ID);

  fireEvent.mouseDown(overlay);
  fireEvent.click(overlay);

  expect(onDismissMock).not.toHaveBeenCalled();
});
