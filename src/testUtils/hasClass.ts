export const hasClass = (
  element: HTMLElement | Element | null | undefined,
  className: string
) => {
  if (!element) {
    return;
  }

  const classList = Array.from(element.classList);
  return classList.some((c: string) => c.includes(className));
};
