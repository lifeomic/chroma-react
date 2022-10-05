import * as React from 'react';

import useInfiniteScroll, {
  InfiniteScrollProps,
} from '../../hooks/events/useInfiniteScroll';

export interface Props extends InfiniteScrollProps {
  className?: string;
  children: any;
}

/**
 * The InfiniteScroll component provides endless scroll behavior. It is a thin
 * wrapper with hooks that detect if the element is in view, whether to fetch more
 * results based on position offset relative to the parent, etc. You will need to
 * toggle loading on and off to load more results
 *
 * ### Links
 *
 * - [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/InfiniteScroll/InfiniteScroll.tsx)
 * - [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/InfiniteScroll/InfiniteScroll.stories.tsx)
 */
export const InfiniteScroll = ({ children, className, ...props }: Props) => {
  const infiniteRef = useInfiniteScroll({
    ...props,
  });

  return (
    <div ref={infiniteRef} className={className}>
      {children}
    </div>
  );
};
