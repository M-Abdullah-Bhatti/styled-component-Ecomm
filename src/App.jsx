import './App.css';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Product from './pages/Product';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import { Route, Routes } from 'react-router-dom'
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <div className="App">
       <Routes>
        <Route  path="/productlist" element={<ProductList />} />
        <Route  path="/product" element={<Product />} />
        <Route  path="/cart" element={<Cart />} />
        <Route  path="/register" element={<Register />} />
        <Route  path="/login" element={<Login />} />
        <Route  path="/" element={<Home />} />
        <Route  path="*" element={<PageNotFound />} />

      </Routes>

    </div>
  );
}

export default App;
