import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { navItems } from './utils/constants';
import { SWContext } from './utils/context';

function App() {
  const getItemByRoute = () => {
    const route = window.location.hash.split('/')[1];
    const item = navItems.find(i => i.route === route);
    return item ?? navItems[0];
  }
  const [currentPage, setCurrentPage] = useState(getItemByRoute());

  useEffect(() => {
    window.addEventListener('hashchange', () => {
      const item = getItemByRoute();
      setCurrentPage(item);
    })
  }, [])


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
