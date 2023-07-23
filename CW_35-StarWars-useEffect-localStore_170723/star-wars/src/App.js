import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { navItems } from './utils/constants';

function App() {
  const [currentPage, setCurrentPage] = useState(navItems[0]);
  
  // console.log(currentPage);
  
  const changePage = (currentPage) => {
      setCurrentPage(currentPage);
  }

  return (
    <div className='container-fluid'>
      <Header changePage={changePage}/>
      <Main currentPage={currentPage}/>
      <Footer />
    </div>
  );
}

export default App;
