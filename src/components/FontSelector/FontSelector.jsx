import React, { useEffect, useState } from 'react';

export default function FontSelector() {
  const fonts = ['mono', 'serif', 'sans-serif'];
  const [font, setFont] = useState('mono');
  // const [oldFont, setOldFont] = useState('serif');

  const handleFontChange = (e) => {
    setFont(e.target.value);
  };

  const updateFont = () => {
    const root = document.getElementById('root');
    fonts.forEach((font) => root.classList.remove(font));
    if (font) {
      root.classList.add(font);
    }
  };

  useEffect(() => {
    updateFont();
  }, [font]);

  return (
    <div className="w-16 sm:w-24">
      <select
        className="dark:text-white bg-inherit border-none w-full"
        onChange={handleFontChange}
      >
        {fonts.map((font) => (
          <option className="dark:bg-dark-black" key={font} value={font}>
            {font.charAt(0).toUpperCase() + font.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
}
