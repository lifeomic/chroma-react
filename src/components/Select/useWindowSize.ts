// https://usehooks.com/useWindowSize/
import * as React from 'react';
import { useWindowEventListener } from '../../hooks/events/useWindowEventListener';

interface Size {
  height?: number;
  width?: number;
}

export function useWindowSize() {
  function getSize() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  const [windowSize, setWindowSize] = React.useState<Size>(getSize);
  useWindowEventListener(
    'resize',
    () => setWindowSize(getSize()),
    // Empty array ensures that effect is only run on mount and unmount
    []
  );

  return windowSize;
}
