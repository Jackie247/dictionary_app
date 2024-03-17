import { Flowbite } from 'flowbite-react';
import React from 'react';
import Topbar from './components/Topbar/Topbar';
import Searchbar from './components/Searchbar/Searchbar';

function App() {
  return (
    <Flowbite>
      <Topbar />
      <Searchbar />
    </Flowbite>
  );
}

export default App;
