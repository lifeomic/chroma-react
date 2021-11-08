import { useCallback, useState } from 'react';
import { useWindowEventListener } from './useWindowEventListener';

function useWindowSize() {
  const getSize = useCallback(() => {
    const size = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    return size;
  }, []);

  const [size, setSize] = useState(getSize());

  useWindowEventListener('resize', () => setSize(getSize()), [getSize]);

  return size;
}

export default useWindowSize;
