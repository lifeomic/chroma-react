function gen4Part() {
  return Math.random().toString(16).slice(-4);
}

// TODO: Replace with `useId` when React18 is adopted
export function generateUniqueId(prefix: string) {
  return (prefix || '').concat(
    [
      gen4Part(),
      gen4Part(),
      gen4Part(),
      gen4Part(),
      gen4Part(),
      gen4Part(),
      gen4Part(),
      gen4Part(),
    ].join('')
  );
}
