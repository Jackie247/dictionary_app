import React, { useEffect, useState } from 'react';

export default function FontSelector() {
  const fonts = ['serif', 'sans-serif', 'mono'];
  const [font, setFont] = useState('serif');
  // const [oldFont, setOldFont] = useState('serif');

  const handleFontChange = (e) => {
    console.log('isCalled');
    setFont(e.target.value);
  };

  const updateFont = () => {
    const root = document.getElementById('root');
    fonts.forEach((font) => root.classList.remove(font));
    root.classList.add(font);
  };

  useEffect(() => {
    updateFont();
  }, [font]);

  return (
    <div className="w-16">
      <select
        className="dark:text-white bg-inherit border-none w-full"
        onChange={handleFontChange}
      >
        {fonts.map((font) => (
          <option key={font} value={font}>
            {font.charAt(0).toUpperCase() + font.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
}
