import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Guest from './components/Guest';
import Profile from './components/Profile';
import { useEffect } from 'react';
import { useAppSelector } from './app/hooks';

function App() {
  const token = useAppSelector(state => state.token)
  return (
    <Routes>
      {/* {token ? (
          <>
            <Route path="/" element={<Profile token={token} />} />
            <Route path="/profile" element={<Profile token={token} />} />
          </>
      ) : (
        <>
          <Route path="/" element={<Guest />} />
          <Route path="/profile" element={<Guest />} />
        </>
      )} */}
      
          <Route path={"/"} element={token ? <Navigate to={"/profile"} /> : <Guest />} />
          <Route path={"/profile"} element={token ? <Profile token={token}/> : <Navigate to={"/"} />} />
        
    </Routes>
  );
}

export default App;
