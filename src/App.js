import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import LogIn from './Components/Auth/LogIn/LogIn';
import Register from './Components/Auth/Register/Register';
import Home from './Components/Home/Home';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Components/Shared/Header/Navbar/Navbar';
import Footer from './Components/Shared/Footer/Footer';
import Manage from './Components/Pages/Manage/Manage';
import AddItems from './Components/Pages/AddItems/AddItems';
import MyItems from './Components/Pages/MyItems/MyItems';
import ProductDetails from './Components/Pages/ProductDetails/ProductDetails';
import RequireAuth from './Components/Auth/RequireAuth/RequireAuth';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/manage" element={<RequireAuth><Manage /></RequireAuth>} />
        <Route path="/products/:id" element={<RequireAuth><ProductDetails /></RequireAuth>} />
        <Route path="/my-items" element={<RequireAuth><MyItems /></RequireAuth>} />
        <Route path="/add-products" element={<AddItems />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <ToastContainer />
      <Footer></Footer>

    </div>
  );
}

export default App;
