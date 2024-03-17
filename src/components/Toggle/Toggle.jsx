'use client';

import React, { useState } from 'react';
import { ToggleSwitch } from 'flowbite-react';

export default function Toggle() {
  const [switch1, setSwitch1] = useState(false);

  return (
    <div className="flex max-w-md flex-col gap-4">
      <ToggleSwitch checked={switch1} onChange={setSwitch1} />
    </div>
  );
}
