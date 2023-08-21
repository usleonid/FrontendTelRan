import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { navItems } from './utils/constants';
import { SWContext } from './utils/context';

function App() {

  return (
    <div className='container-fluid'>
        <Header />
        <Main />
        <Footer />
    </div>
  );
}

export default App;
