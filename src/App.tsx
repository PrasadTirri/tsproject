import React from 'react';
import {  Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import './App.css';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Login from './Credentials/Login';
import Products from './pages/products/Products';
import Cart from './pages/cart/Cart';
import MainRouter from './mainRouter/MainRouter';



function App() {

  const routes=createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<MainRouter />}>
      <Route path='/home' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/products' element={<Products  />} />
      <Route path='/cart' element={<Cart />} />
    </Route>
  ))
  
  return (
    <>
<RouterProvider router={routes} />
    </>
  );
}

export default App;
