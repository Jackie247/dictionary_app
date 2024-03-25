import React, { useEffect, useState } from 'react';

export default function FontSelector() {
  const fonts = ['sans-serif', 'serif', 'mono'];
  const [font, setFont] = useState('sans-serif');
  // const [oldFont, setOldFont] = useState('serif');

  const handleFontChange = (e) => {
    setFont(e.target.value);
  };

  const updateFont = () => {
    const root = document.getElementById('root');
    fonts.forEach((fontOption) => root.classList.remove(fontOption));
    if (font) {
      root.classList.add(font);
    }
  };

  useEffect(() => {
    updateFont();
  }, [font]);

  return (
    <div>
      <select
        className="dark:text-white bg-inherit border-none w-full"
        onChange={handleFontChange}
        aria-label="font selector"
      >
        {fonts.map((fontOption) => (
          <option
            className="dark:bg-dark-black"
            key={fontOption}
            value={fontOption}
            aria-label={fontOption}
          >
            {fontOption.charAt(0).toUpperCase() + fontOption.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
}
