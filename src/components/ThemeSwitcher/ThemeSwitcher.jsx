import React, { useState, useEffect } from 'react';

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="flex items-center">
      <button className="px-2" type="button" onClick={handleThemeSwitch}>
        <div className="flex items-center justify-center">
          <div className="relative">
            <input id="toggle" type="checkbox" className="sr-only" checked={theme === 'dark'} readOnly />
            <div className="w-8 h-4 bg-gray-400 dark:bg-purple-600 rounded-full shadow-inner transition-colors" />
            <div className="absolute w-4 h-4 bg-white rounded-full shadow transform transition-transform dark:translate-x-4 translate-x-0 top-0" />
          </div>
        </div>
      </button>
      <div className="max-h-4 max-w-4">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="none" stroke="#838383" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z" /></svg>
      </div>
    </div>
  );
}
