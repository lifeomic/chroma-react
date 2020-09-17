import { useEffect, useRef, useState } from 'react';
import useInterval from '../utils/useInterval';
import useWindowSize from './useWindowSize';

const WINDOW = 'window';
const PARENT = 'parent';

const getParentSize = function (ref: any) {
  return ref.current.parentNode.getBoundingClientRect();
};

const getMySize = function (ref: any) {
  return ref.current.getBoundingClientRect();
};

export const helpers = {
  getParentSize,
  getMySize,
};

export type InfiniteScrollProps = {
  loading: boolean;
  hasNextPage: boolean;
  loadMore: () => Promise<any>;
  scrollOffset?: number;
  debounceInterval?: number;
  scrollContainer?: 'window' | 'parent';
};

function useInfiniteScroll({
  loading,
  hasNextPage,
  loadMore,
  scrollOffset = 250,
  debounceInterval = 250,
  scrollContainer = WINDOW,
}: InfiniteScrollProps) {
  const ref = useRef() as any;
  const { height: windowHeight, width: windowWidth } = useWindowSize();
  const [listen, setListen] = useState(true);

  useEffect(() => {
    if (!loading) {
      setListen(true);
    }
  }, [loading]);

  function getBottomOffset() {
    const { bottom } = helpers.getMySize(ref);
    let bottomOffset = windowHeight ? bottom - windowHeight : 0;

    if (scrollContainer === PARENT) {
      const { bottom: parentBottom } = helpers.getParentSize(ref);
      // Distance between bottom of list and its parent
      bottomOffset = bottom - parentBottom;
    }

    return bottomOffset;
  }

  function isParentInView() {
    const parent = ref.current ? ref.current.parentNode : null;

    if (parent) {
      const { left, right, top, bottom } = helpers.getParentSize(ref);
      if (windowWidth && left > windowWidth) {
        return false;
      } else if (right < 0) {
        return false;
      } else if (windowHeight && top > windowHeight) {
        return false;
      } else if (bottom < 0) {
        return false;
      }
    }

    return true;
  }

  async function listenBottomOffset() {
    if (listen && !loading && hasNextPage) {
      if (ref.current) {
        if (scrollContainer === PARENT) {
          if (!isParentInView()) {
            // Do nothing if the parent is out of screen
            return;
          }
        }

        // Check if the distance between bottom of the container and bottom of the window or parent
        // is less than the offset
        const bottomOffset = getBottomOffset();
        const validOffset = bottomOffset < scrollOffset;
        if (validOffset) {
          setListen(false);
          await loadMore();
        }
      }
    }
  }

  useInterval(
    () => listenBottomOffset(),
    // Stop interval when there is no next page.
    hasNextPage ? debounceInterval : 0
  );

  return ref;
}

export default useInfiniteScroll;
