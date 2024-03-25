import React from 'react';
import Topbar from './components/Topbar/Topbar';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="px-8 pt-8 min-h-screen bg-white dark:bg-black lg:text-lg">
      <div className="sm:max-w-[640px] sm:mx-auto lg:max-w-[768px]">
        <Topbar />
        <Main />
      </div>
    </div>
  );
}

export default App;
