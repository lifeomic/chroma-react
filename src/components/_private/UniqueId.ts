function gen4Part() {
  return Math.random().toString(16).slice(-4);
}

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
