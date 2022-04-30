import { Route, Routes } from 'react-router-dom';
import './App.css';
import LogIn from './Components/Auth/LogIn/LogIn';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>

    </div>
  );
}

export default App;
