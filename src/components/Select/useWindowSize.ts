/* istanbul ignore file */
// https://usehooks.com/useWindowSize/
import * as React from 'react';

interface Size {
  height?: number;
  width?: number;
}

/**
 * @deprecated Use `useWindowSize` from 'hooks/events/useWindowSize` instead. This function
 * will be removed in the next major version of Chroma.
 */
/* istanbul ignore next */
export function useWindowSize() {
  function getSize() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  const [windowSize, setWindowSize] = React.useState<Size>(getSize);

  React.useEffect(() => {
    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}
