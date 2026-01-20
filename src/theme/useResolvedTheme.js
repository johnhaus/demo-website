import { useEffect, useState } from 'react';

export function useResolvedTheme(themePreference) {
  const getSystemTheme = () =>
    window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';

  const [resolvedTheme, setResolvedTheme] = useState(
    themePreference === 'system' ? getSystemTheme() : themePreference
  );

  useEffect(() => {
    if (themePreference !== 'system') {
      setResolvedTheme(themePreference);
      return;
    }

    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const listener = () => setResolvedTheme(getSystemTheme());

    listener();
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [themePreference]);

  return resolvedTheme;
}
