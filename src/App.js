import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import LogIn from './Components/Auth/LogIn/LogIn';
import Register from './Components/Auth/Register/Register';
import Home from './Components/Home/Home';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Components/Shared/Header/Navbar/Navbar';
import Footer from './Components/Shared/Footer/Footer';
import AddItems from './Components/Pages/AddItems/AddItems';
import MyItems from './Components/Pages/MyItems/MyItems';
import ProductDetails from './Components/Pages/ProductDetails/ProductDetails';
import RequireAuth from './Components/Auth/RequireAuth/RequireAuth';
import NotFound from './Components/Pages/NotFound/NotFound';
import Inventory from './Components/Pages/Manage/Manage';
import Blog from './Components/Pages/Blog/Blog';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/inventory" element={<RequireAuth><Inventory /></RequireAuth>} />
        <Route path="/inventory/:id" element={<RequireAuth><ProductDetails /></RequireAuth>} />
        <Route path="/my-items" element={<RequireAuth><MyItems /></RequireAuth>} />
        <Route path="/add-products" element={<RequireAuth><AddItems /></RequireAuth>} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      <ToastContainer />
      <Footer></Footer>

    </div>
  );
}

export default App;
