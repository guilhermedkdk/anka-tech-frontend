'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center gap-3">
        <span className="text-sm font-medium text-large">Modo claro</span>
        <div className="relative inline-flex h-6 w-11 items-center rounded-full toggle-light">
          <span className="inline-block h-4 w-4 rounded-full toggle-light-thumb shadow-lg toggle-thumb-right" />
        </div>
      </div>
    );
  }

  const isLight = theme === 'light';

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-medium text-large">
        {isLight ? 'Modo claro' : 'Modo escuro'}
      </span>
      <button
        className={`relative inline-flex h-6 w-11 items-center rounded-full focus:outline-none ${
          isLight ? 'toggle-light' : 'toggle-dark'
        }`}
        role="switch"
        aria-checked={isLight}
        aria-label={`Alternar para ${isLight ? 'modo escuro' : 'modo claro'}`}
      >
        <span
          onClick={(e) => {
            e.stopPropagation();
            setTheme(isLight ? 'dark' : 'light');
          }}
          className={`inline-block h-4 w-4 rounded-full shadow-lg ${
            isLight
              ? 'toggle-light-thumb toggle-thumb-right'
              : 'toggle-dark-thumb toggle-thumb-left'
          } cursor-pointer`}
        />
      </button>
    </div>
  );
}
