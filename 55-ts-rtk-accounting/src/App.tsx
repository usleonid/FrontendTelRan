import { Route, Routes } from 'react-router-dom';
import './App.css';
import Guest from './components/Guest';
import Profile from './components/Profile';

function App() {
  let token = 'asdasd'
  return (
    <Routes>
      {token ? (
          <>
            <Route path="/" element={<Profile token={token} />} />
            <Route path="/profile" element={<Profile token={token} />} />
          </>
      ) : (
        <>
          <Route path="/" element={<Guest />} />
          <Route path="/profile" element={<Guest />} />
        </>
      )}
      {/* {token ? (
        <>
          <Route path="/" element={<Navigate to="/profile" />} />
          <Route path="/profile" element={<Profile token={token}/>} />
        </>
      ) : (
        <Route path="/" element={<Guest />} />
      )} */}
    </Routes>
  );
}

export default App;
