import logo from './logo.svg';
import './App.css';
import Student from './components/Student';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <Student name={'Petya'} age={28} />
      <Button />
    </div>
  );
}

export default App;
