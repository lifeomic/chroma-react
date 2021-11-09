import * as React from 'react';
import { act } from 'react-dom/test-utils';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { Avatar, AvatarBadge, AvatarProps } from './index';

const testId = 'Avatar';

const getBaseProps = (): AvatarProps => ({
  name: 'Tony Ward',
});

test('it renders an Avatar', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <Avatar {...props} data-testid={testId} />
  );
  const avatar = await findByTestId(testId);
  expect(avatar).toBeInTheDocument();
});

test('it renders an Avatar with a "name"', async () => {
  const props = getBaseProps();
  const { findByLabelText } = renderWithTheme(
    <Avatar {...props} data-testid={testId} name="Tony Ward" />
  );
  const avatar = await findByLabelText('Tony Ward');
  expect(avatar).toBeInTheDocument();
});

test('it applies the provided className', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <Avatar {...props} data-testid={testId} className="custom-class-name" />
  );
  const avatar = await findByTestId(testId);
  expect(avatar).toHaveClass('custom-class-name');
});

test('it applies the clickable class when "onClick" is provided', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <Avatar {...props} data-testid={testId} onClick={jest.fn()} />
  );
  const avatar = await findByTestId(testId);
  expect(avatar).toHaveClass('ChromaAvatar-clickable');
});

test('it renders the "src"', async () => {
  const props = getBaseProps();
  const { findByAltText } = renderWithTheme(
    <Avatar {...props} data-testid={testId} src="cool-tony.jpg" />
  );
  const imgTag = await findByAltText(props.name);
  expect(imgTag).toBeInTheDocument();
  expect(imgTag.getAttribute('src')).toEqual('cool-tony.jpg');
});

test('it renders with initials when src fails', async () => {
  const props = getBaseProps();
  const onError = jest.fn();
  const { findByAltText, queryByAltText, findByText } = renderWithTheme(
    <Avatar
      {...props}
      data-testid={testId}
      src="uncool-tony.jpg"
      onError={onError}
    />
  );
  const imgTag = await findByAltText(props.name);
  expect(imgTag).toBeInTheDocument();
  expect(imgTag.getAttribute('src')).toEqual('uncool-tony.jpg');
  const error = new Event('error');

  act(() => {
    imgTag.dispatchEvent(error);
  });

  const imgTagAfterUpdate = queryByAltText(props.name);
  expect(imgTagAfterUpdate).toBeNull();
  // can't assert it was called with the right error due to synthetic events
  // not being trusted
  expect(onError).toHaveBeenCalledTimes(1);

  const initials = await findByText('T'); // initial
  expect(initials).toBeInTheDocument();
});

//#region useDefaultSrc checks
test('it renders with "useDefaultSrc"', async () => {
  const props = getBaseProps();
  const { findByRole } = renderWithTheme(
    <Avatar {...props} data-testid={testId} useDefaultSrc />
  );

  const svg = await findByRole('img');
  expect(svg).toBeInTheDocument();
  expect(svg.tagName).toEqual('svg');
});

test('it renders with "useDefaultSrc" even with src provided', async () => {
  const props = getBaseProps();
  const { findByRole } = renderWithTheme(
    <Avatar {...props} data-testid={testId} src="cool-tony.jpg" useDefaultSrc />
  );

  const svg = await findByRole('img');
  expect(svg).toBeInTheDocument();
  expect(svg.tagName).toEqual('svg');
});

test('it renders with "useDefaultSrc" even with all props provided', async () => {
  const props = getBaseProps();
  const { findByRole } = renderWithTheme(
    <Avatar
      {...props}
      data-testid={testId}
      name=""
      src="cool-tony.jpg"
      useDefaultSrc
    />
  );

  const svg = await findByRole('img');
  expect(svg).toBeInTheDocument();
  expect(svg.tagName).toEqual('svg');
});

//#endregion

test('it renders with `size=0`', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <Avatar {...props} data-testid={testId} size={0} />
  );
  const avatar = await findByTestId(testId);
  expect(avatar).toHaveClass('ChromaAvatar-size0');
});

test('it renders with `size=1`', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <Avatar {...props} data-testid={testId} size={1} />
  );
  const avatar = await findByTestId(testId);
  expect(avatar).toHaveClass('ChromaAvatar-size1');
});

test('it renders with `size=2`', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <Avatar {...props} data-testid={testId} size={2} />
  );
  const avatar = await findByTestId(testId);
  expect(avatar).toHaveClass('ChromaAvatar-size2');
});

test('it renders with AvatarBadge', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <Avatar {...props} data-testid={testId}>
      <AvatarBadge count={1} data-testid="avatar-badge" />
    </Avatar>
  );
  const avatarBadge = await findByTestId('avatar-badge');
  expect(avatarBadge).toBeInTheDocument();
});
