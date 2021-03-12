import * as React from 'react';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { GroupHeading } from './index';

const testId = 'GroupHeading';

test('it renders a GroupHeading', async () => {
  const text = 'a heading';
  const { findByTestId } = renderWithTheme(
    <GroupHeading data-testid={testId}>{text}</GroupHeading>
  );

  const heading = await findByTestId(testId);
  expect(heading).toBeInTheDocument();
  expect(heading).toHaveTextContent(text);
});

test('it applies the provided className', async () => {
  const { findByTestId } = renderWithTheme(
    <GroupHeading data-testid={testId} className="custom-class-name">
      Heading
    </GroupHeading>
  );

  const heading = await findByTestId(testId);
  expect(heading).toHaveClass('custom-class-name');
});
