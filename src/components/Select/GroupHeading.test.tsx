import * as React from 'react';
import { hasClass } from '../../testUtils/hasClass';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { GroupHeading, GroupHeadingProps } from './index';

const testId = 'GroupHeading';

const getBaseProps = (): GroupHeadingProps => ({
  ['data-select-role']: 'heading',
});

test('it renders a GroupHeading', async () => {
  const props = getBaseProps();
  const text = 'a heading';
  const { findByTestId } = renderWithTheme(
    <GroupHeading {...props} data-testid={testId}>
      {text}
    </GroupHeading>
  );

  const heading = await findByTestId(testId);
  expect(heading).toBeInTheDocument();
  expect(heading).toHaveTextContent(text);
});

test('it applies the provided className', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <GroupHeading {...props} data-testid={testId} className="custom-class-name">
      Heading
    </GroupHeading>
  );

  const heading = await findByTestId(testId);
  expect(heading).toHaveClass('custom-class-name');
  expect(hasClass(heading, 'custom-class-name')).toBe(true);
});
