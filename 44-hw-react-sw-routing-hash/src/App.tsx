import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { navItems } from './utils/constants';
import { SWContext } from './utils/context';

function App() {

  const [currentPage, setCurrentPage] = useState(navItems[0]);

  return (
    <div className='container-fluid'>
      <SWContext.Provider value={
        {
          changePage: setCurrentPage
        }
      }>
        <Header />
        <Main currentPage={currentPage} />
        <Footer />
      </SWContext.Provider>
    </div>
  );
}

export default App;
