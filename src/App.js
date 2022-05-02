import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import LogIn from './Components/Auth/LogIn/LogIn';
import Register from './Components/Auth/Register/Register';
import Home from './Components/Home/Home';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <ToastContainer />

    </div>
  );
}

export default App;
