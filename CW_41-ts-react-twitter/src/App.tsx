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

  const changeName = (name: string) => {
    if (name) {
      setName(name);
    }
  }

  const changeAvatar = (url: string) => {
    if (url) {
      setAvatar(url);
    }
  }

  const changeFollowers = (sum: number) => {
    setFollowers(prevState => {
      const res = prevState + sum;
      return res < 0 ? 0 : res
    })
  }

  const changeFollowing = (sum: number) => {
    setFollowing(prevState => {
      const res = prevState + sum;
      return res < 0 ? 0 : res
    })
  }

  return (
    <div className='app'>
      <UserContext.Provider value={{
        name, avatar, followers, following, changeName, changeAvatar, changeFollowers, changeFollowing
      }}>
        <Navigation />
        <Body />
      </UserContext.Provider>
    </div>
  );
}

export default App;
