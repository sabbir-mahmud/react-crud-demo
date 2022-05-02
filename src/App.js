import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import LogIn from './Components/Auth/LogIn/LogIn';
import Register from './Components/Auth/Register/Register';
import Home from './Components/Home/Home';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Components/Shared/Header/Navbar/Navbar';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <ToastContainer />

    </div>
  );
}

export default App;
