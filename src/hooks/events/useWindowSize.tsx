import { useCallback, useEffect, useState } from 'react';

function useWindowSize() {
  const getSize = useCallback(() => {
    const size = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    return size;
  }, []);

  const [size, setSize] = useState(getSize());

  useEffect(() => {
    function handleResize() {
      setSize(getSize());
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [getSize]);

  return size;
}

export default useWindowSize;
