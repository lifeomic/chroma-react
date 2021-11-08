export type EventListenerMockContext = {
  /** Sends an event to all registered listeners. */
  sendEvent: (name: keyof WindowEventMap, event: any) => void;
  /** Returns the current set of listeners for the provided event `name`. */
  listeners: (name: keyof WindowEventMap) => Function[];
  /** Mocks of event listener functions. */
  mocks: {
    addEventListener: jest.SpiedFunction<typeof window.addEventListener>;
    removeEventListener: jest.SpiedFunction<typeof window.removeEventListener>;
  };
};

/**
 * Return utils for exercising and making assertions about global event listeners.
 */
export const useEventListenerMocking = (): EventListenerMockContext => {
  /**
   * A local store of listeners. Maps event name -> listeners
   */
  const listeners: Record<string, Function[] | undefined> = {};

  const mocks: EventListenerMockContext['mocks'] = {
    addEventListener: jest
      .spyOn(window, 'addEventListener')
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore We are assuming that `listener` will always be a function,
      // even though TS knows it might not be.
      .mockImplementation((name, listener: Function) => {
        listeners[name] = listeners[name]?.concat(listener) || [listener];
      }),
    removeEventListener: jest
      .spyOn(window, 'removeEventListener')
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore We are assuming that `listener` will always be a function,
      // even though TS knows it might not be.
      .mockImplementation((name, listener: Function) => {
        const eventListeners = listeners[name];

        if (!eventListeners) {
          return;
        }
        const index = eventListeners.indexOf(listener);

        if (index > -1) {
          listeners[name]?.splice(index, 1);
        }
      }),
  };

  beforeEach(() => {
    mocks.addEventListener.mockClear();
    mocks.removeEventListener.mockClear();
  });

  return {
    mocks,
    sendEvent: (name, event) => {
      const eventListeners = listeners[name];
      if (!eventListeners) {
        return;
      }
      for (const listener of eventListeners) {
        listener(event);
      }
    },
    listeners: (name) => listeners[name] || [],
  };
};
