import { act, renderHook } from '@testing-library/react-hooks';
import useWindowSize from './useWindowSize';

// https://spectrum.chat/testing-library/help-react/how-to-set-window-innerwidth-to-test-mobile~70aa9572-b7cc-4397-92f5-a09d75ed24b8
window.resizeTo = function resizeTo(width, height) {
  Object.assign(this, {
    innerWidth: width,
    innerHeight: height,
    outerWidth: width,
    outerHeight: height,
  }).dispatchEvent(new this.Event('resize'));
};

describe('useWindowSize', () => {
  it('should be defined', () => {
    expect(useWindowSize).toBeDefined();
  });

  it('should update width', () => {
    const hook = renderHook(() => useWindowSize());
    act(() => {
      window.resizeTo(320, 768);
      hook.rerender();
    });
    expect(hook.result.current.width).toBe(320);
    act(() => {
      window.resizeTo(640, 768);
      hook.rerender();
    });
    expect(hook.result.current.width).toBe(640);
  });

  it('should update height', () => {
    const hook = renderHook(() => useWindowSize());
    act(() => {
      window.resizeTo(320, 500);
      hook.rerender();
    });
    expect(hook.result.current.height).toBe(500);
    act(() => {
      window.resizeTo(320, 1000);
      hook.rerender();
    });
    expect(hook.result.current.height).toBe(1000);
  });
});
