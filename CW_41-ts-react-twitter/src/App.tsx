import { useState } from 'react';
import './App.css';
import Body from './components/Body';
import Navigation from './components/Navigation';
import { UserContext } from './utils/userContext';

function App() {

  const [name, setName] = useState('Monster');
  const [avatar, setAvatar] = useState('https://www.gravatar.com/avatar/00000000000000000000000000000000?d=monsterid');
  const [followers, setFollowers] = useState(0);
  const [following, setFollowing] = useState(0);

  return (
    <div className='app'>
      <UserContext.Provider value={{
        name, avatar, followers, following
      }}>
        <Navigation />
        <Body />
      </UserContext.Provider>
    </div>
  );
}

export default App;
