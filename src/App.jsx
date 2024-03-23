import React from 'react';
import Topbar from './components/Topbar/Topbar';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="p-8 h-screen bg-white dark:bg-black">
      <Topbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
