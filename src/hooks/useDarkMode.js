import { useState, useEffect } from 'react';

export function useDarkMode() {
  const [isDarkMode, setDarkMode] = useState(false);
  const [isChecked, setChecked] = useState(false);

  function handleMatchMedia(mqList) {
    setDarkMode(mqList.matches);
    setChecked(mqList.matches);
  }

  useEffect(() => {
    const mqList = window.matchMedia('(prefers-color-scheme: dark)');
    mqList.addEventListener('change', handleMatchMedia);
    setDarkMode(mqList.matches);
    setChecked(mqList.matches);
    return () => {
      mqList.removeEventListener('change', handleMatchMedia);
    };
  }, []);

  return {
    isDarkMode,
    isChecked,
    setChecked,
    setDarkMode,
  };
}
