import * as React from 'react';
import {
  IconComponent,
  testId as iconComponentTestId,
} from '../../testUtils/IconComponent';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { MenuButton, MenuButtonProps } from './index';

const testId = 'MenuButton';

const getBaseProps = (): MenuButtonProps => ({});

test('it renders a Button', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <MenuButton {...props} data-testid={testId}>
      MenuButton
    </MenuButton>
  );
  const root = await findByTestId(testId);
  expect(root).toBeInTheDocument();
});

test('it renders a trailing icon', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <MenuButton {...props} data-testid={testId} trailingIcon={IconComponent}>
      MenuButton
    </MenuButton>
  );
  const trailingIcon = await findByTestId(iconComponentTestId);
  expect(trailingIcon).toBeInTheDocument();
});
