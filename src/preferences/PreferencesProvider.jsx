import { useEffect, useState } from 'react';
import { PreferencesContext } from './PreferencesContext';

const defaultPreferences = {
  theme: 'system',
  language: 'en',
};

export function PreferencesProvider({ children }) {
  const [preferences, setPreferences] = useState(() => {
    const stored = localStorage.getItem('preferences');
    return stored ? JSON.parse(stored) : defaultPreferences;
  });

  useEffect(() => {
    localStorage.setItem('preferences', JSON.stringify(preferences));
  }, [preferences]);

  const setTheme = (theme) => setPreferences((prev) => ({ ...prev, theme }));

  const setLanguage = (language) =>
    setPreferences((prev) => ({ ...prev, language }));

  return (
    <PreferencesContext.Provider
      value={{ ...preferences, setTheme, setLanguage }}
    >
      {children}
    </PreferencesContext.Provider>
  );
}
