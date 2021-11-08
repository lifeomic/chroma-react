import * as React from 'react';

/**
 * Registers a Window event `listener`, updating the listener based
 * on a provided `dependency` list.
 *
 * @param type The event type.
 * @param listener The event listener.
 * @param dependencies A set of useEffect dependencies to use for
 * re-registering the listener.
 */
export const useWindowEventListener = <K extends keyof WindowEventMap>(
  type: K,
  listener: (event: WindowEventMap[K]) => void,
  dependencies?: React.DependencyList
) => {
  React.useEffect(() => {
    window.addEventListener(type, listener);

    return () => {
      window.removeEventListener(type, listener);
    };
  }, dependencies);
};
