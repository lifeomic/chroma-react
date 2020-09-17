import * as React from 'react';

import useInfiniteScroll, {
  InfiniteScrollProps,
} from '../../hooks/events/useInfiniteScroll';

export interface Props extends InfiniteScrollProps {
  className?: string;
  children: any;
}

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
