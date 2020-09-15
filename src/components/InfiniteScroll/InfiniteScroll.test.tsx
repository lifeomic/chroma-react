import { act, cleanup } from '@testing-library/react';
import * as React from 'react';
import { renderWithTheme } from '../../testUtils/renderWithTheme';

import { helpers as infiniteScrollFunctions } from '../../hooks/events/useInfiniteScroll';
import { InfiniteScroll } from './';

beforeEach(() => {
  cleanup();

  jest.spyOn(infiniteScrollFunctions, 'getParentSize').mockReturnValue({
    bottom: 0,
  });

  jest.spyOn(infiniteScrollFunctions, 'getMySize').mockReturnValue({
    bottom: 0,
  });
});

afterEach(jest.restoreAllMocks);

const DEFAULT_DEBOUNCE_INTERVAL = 250;

const mockProps = {
  loading: false,
  hasNextPage: true,
  loadMore: jest.fn(),
  scrollContainer: 'parent' as 'parent',
  scrollOffset: 500,
  debounceInterval: DEFAULT_DEBOUNCE_INTERVAL,
};

const buildClientRect = (opts: any): ClientRect => ({
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  height: 0,
  width: 0,
  x: 0,
  y: 0,
  toJSON: () => '',
  ...opts,
});

const windowSize = {
  innerWidth: 1000,
  innerHeight: 1000,
};

type ParentInViewSpec = [string, ClientRect];

jest.useFakeTimers();

describe('InfiniteScroll with parent', () => {
  test('Should load more if hasNextPage and parent child offset is less than scroll offset', async () => {
    const mockLoadMore = jest.fn();

    renderWithTheme(
      <InfiniteScroll {...mockProps} loadMore={mockLoadMore}>
        <div />
      </InfiniteScroll>
    );

    act(
      () =>
        jest.advanceTimersByTime(DEFAULT_DEBOUNCE_INTERVAL) as jest.Mocked<any>
    );
    expect(mockLoadMore).toHaveBeenCalled();
  });

  test('Should not load more if there is not a next page', async () => {
    const mockLoadMore = jest.fn();

    renderWithTheme(
      <InfiniteScroll
        {...mockProps}
        hasNextPage={false}
        loadMore={mockLoadMore}
      >
        <div />
      </InfiniteScroll>
    );

    jest.advanceTimersByTime(DEFAULT_DEBOUNCE_INTERVAL);

    expect(mockLoadMore).not.toHaveBeenCalled();
  });

  const parentSizeSpecs: ParentInViewSpec[] = [
    ['right of', buildClientRect({ left: 1001 })],
    ['left of', buildClientRect({ right: -1 })],
    ['below', buildClientRect({ top: 1001 })],
    ['above', buildClientRect({ bottom: -1 })],
  ];

  test.each(parentSizeSpecs)(
    'Should not load more if parent is %s window',
    (_0, parentPosition) => {
      Object.assign(window, windowSize);
      const mockLoadMore = jest.fn();

      jest.spyOn(infiniteScrollFunctions, 'getParentSize').mockReturnValue({
        ...parentPosition,
      });

      renderWithTheme(
        <InfiniteScroll {...mockProps} loadMore={mockLoadMore}>
          <div />
        </InfiniteScroll>
      );

      jest.advanceTimersByTime(DEFAULT_DEBOUNCE_INTERVAL);

      expect(mockLoadMore).not.toHaveBeenCalled();
    }
  );

  test('Should not load more if child parent left offset is greater than the parents', async () => {
    jest.spyOn(infiniteScrollFunctions, 'getParentSize').mockReturnValue({
      bottom: 0,
    });

    jest.spyOn(infiniteScrollFunctions, 'getMySize').mockReturnValue({
      bottom: 1000,
    });

    const mockLoadMore = jest.fn();

    renderWithTheme(
      <InfiniteScroll {...mockProps} scrollOffset={500} loadMore={mockLoadMore}>
        <div />
      </InfiniteScroll>
    );

    jest.advanceTimersByTime(DEFAULT_DEBOUNCE_INTERVAL);

    expect(mockLoadMore).not.toHaveBeenCalled();
  });

  test('loading should disable loadMore from being called', async () => {
    const mockLoadMore = jest.fn();

    renderWithTheme(
      <InfiniteScroll {...mockProps} loading={true} loadMore={mockLoadMore}>
        <div />
      </InfiniteScroll>
    );

    jest.advanceTimersByTime(DEFAULT_DEBOUNCE_INTERVAL);
    expect(mockLoadMore).not.toHaveBeenCalled();
  });
});
