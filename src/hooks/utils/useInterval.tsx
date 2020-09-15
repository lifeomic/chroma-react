import { useEffect, useRef } from 'react';

function useInterval(callback: Function, delay: number | null) {
  const savedCallback = useRef<Function>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current && savedCallback.current();
    }

    if (delay) {
      const id = setInterval(() => {
        tick();
      }, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default useInterval;
