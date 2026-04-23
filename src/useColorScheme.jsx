import { useEffect, useState } from 'react';

const getInitialAppearance = () => {
  if (typeof window === 'undefined' || !window.matchMedia) return 'light';

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
};

const useColorScheme = () => {
  const [appearance, setAppearance] = useState(getInitialAppearance);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;

    const media = window.matchMedia('(prefers-color-scheme: dark)');

    const listener = (e) => {
      setAppearance(e.matches ? 'dark' : 'light');
    };

    media.addEventListener('change', listener);

    return () => media.removeEventListener('change', listener);
  }, []);

  return { appearance };
};

export { useColorScheme };