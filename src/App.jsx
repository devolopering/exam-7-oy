import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/main/Home';
import Product from './components/main/Product'; 
import Cart from './components/cart/Cart';
import Footer from './components/footer/Footer';

function App() {
  const [sortBy, setSortBy] = useState("");

  return (
    <div className='select-none m-0 p-0 box-border'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home sortBy={sortBy} setSortBy={setSortBy} />} />
          <Route path='/products/:id' element={<Product />} /> 
          <Route path='/cart' element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
