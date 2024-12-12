'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

function ThemeClassManager() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && resolvedTheme) {
      document.body.classList.remove('light', 'dark');
      document.body.classList.add(resolvedTheme);
    }
  }, [mounted, resolvedTheme]);

  return null;
}

export default ThemeClassManager;
