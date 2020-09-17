import * as React from 'react';

export function wrapEvent(theirHandler: any, ourHandler: any) {
  return (event: any) => {
    theirHandler && theirHandler(event);

    if (!event.defaultPrevented) {
      return ourHandler(event);
    }
  };
}

export function useForkedRef(...refs: Array<any>) {
  return React.useMemo(() => {
    if (refs.every((ref) => ref == null)) {
      return null;
    }

    return (node: any) => {
      refs.forEach((ref) => {
        assignRef(ref, node);
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, refs);
}

export function assignRef(ref: any, value: any) {
  if (ref == null) {
    return;
  }

  if (typeof ref === 'function') {
    ref(value);
  } else {
    try {
      ref.current = value;
    } catch (error) {
      throw new Error(`Cannot assign value "${value}" to ref "${ref}"`);
    }
  }
}
