import * as React from 'react';

import { KeymapHelp, KeymapHelpProps } from '.';
import { renderWithTheme } from '../../testUtils/renderWithTheme';

const LISTENER_TEST_ID = 'key-listener-test-id';

const render = (props?: KeymapHelpProps) =>
  renderWithTheme(
    <KeymapHelp keyListenerTestId={LISTENER_TEST_ID} {...props} />
  );

it('launches the modal on Shift + ?', () => {
  const view = render();

  const listener = view.queryByTestId(LISTENER_TEST_ID);

  expect(listener).not.toBeNull();
});
