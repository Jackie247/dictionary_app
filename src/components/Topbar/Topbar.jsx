import React from 'react';
import FontSelector from '../FontSelector/FontSelector';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';

export default function Topbar() {
  return (
    <header className="flex items-center">
      <div className="logo-svg h-8 sm:h-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
          viewBox="0 0 34 38"
        >
          <g fill="none" fillRule="evenodd" stroke="#838383" strokeLinecap="round" strokeWidth="1.5">
            <path d="M1 33V5a4 4 0 0 1 4-4h26.8A1.2 1.2 0 0 1 33 2.2v26.228M5 29h28M5 37h28" />
            <path strokeLinejoin="round" d="M5 37a4 4 0 1 1 0-8" />
            <path d="M11 9h12" />
          </g>
        </svg>
      </div>

      <div className="flex-grow" />

      <FontSelector />

      <ThemeSwitcher />
    </header>
  );
}
