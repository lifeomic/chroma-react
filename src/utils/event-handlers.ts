/**
 * Composes a series of `handlers` into a single handler. Subsequent handlers
 * will not be invoked after a handler calls `e.preventDefault()`.
 *
 * Useful for allowing external overriding of internal event handlers in
 * a component.
 *
 * @example
 * <div
 *   onClick={
 *     composeEventHandlers([
 *       props.onClick,
 *       (e) => { ... }
 *     ])
 *   }
 * />
 */
export const composeEventHandlers = <Event extends React.SyntheticEvent>(
  handlers: (((e: Event) => void) | undefined)[]
) => (e: Event) => {
  for (const handler of handlers) {
    if (handler && !e.defaultPrevented) {
      handler(e);
    }
  }
};
