import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import { navItems } from './utils/constants';

function App() {
  const [currentPage, setCurrentPage] = useState(navItems[0]);
  
  // console.log(currentPage);
  
  const changePage = (currentPage: any) => {
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
