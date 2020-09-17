import * as React from 'react';

export const useMediaQuery = (query: string) => {
  const mediaQueryListeners = window.matchMedia(query);
  const [matches, setMatches] = React.useState(mediaQueryListeners.matches);

  React.useEffect(() => {
    mediaQueryListeners.addListener(() => {
      setMatches(mediaQueryListeners.matches);
    });
  }, [mediaQueryListeners, query]);

  return matches;
};
