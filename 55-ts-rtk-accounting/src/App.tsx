import { Route, Routes } from 'react-router-dom';
import './App.css';
import Guest from './components/Guest';
import Profile from './components/Profile';

function App() {
  let token = ''
  return (
    <Routes>
      <Route path='/' element={<Guest />}/>
      <Route path='/profile' element={<Profile />}/>
    </Routes>
  );
}

export default App;
