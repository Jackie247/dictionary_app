import React from 'react';
import Topbar from './components/Topbar/Topbar';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="px-8 pt-8 min-h-screen bg-white dark:bg-black">
      <div className="h-full sm:max-w-[640px] sm:mx-auto lg:max-w-[768px]">
        <Topbar />
        <Main />
      </div>
    </div>
  );
}

export default App;
