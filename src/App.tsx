import React from 'react';
import {  Navigate, Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import './App.css';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Login from './Credentials/Login';
import Products from './pages/products/Products';
import Cart from './pages/cart/Cart';
import MainRouter from './mainRouter/MainRouter';
import SignUp from './Credentials/SignUp';
import { Provider } from 'react-redux';
import store from './store/store';



function App() {

  // const routes=createBrowserRouter(createRoutesFromElements(
  //   <Route path='/' element={<Login />}>

  //     {/* <Route path='/signup' element={<SignUp />} /> */}
  //     {/* <Route path='/login' element={<Login />} /> */}
  //     <Route path='/home' element={<Home />} />
  //     <Route path='/about' element={<About />} />
  //     <Route path='/products' element={<Products  />} />
  //     <Route path='/cart' element={<Cart />} />
  //   </Route>
  // ))
  
  return (
    <>
{/* <RouterProvider router={routes} /> */}
<Provider store={store} >
<Routes>
<Route path='/signup' element={<SignUp />}></Route>
<Route path='/login' element={<Login />}></Route>
<Route path='/' element={<Navigate to='/signup' />}/>
<Route path='/home' element={<Home />}></Route>
<Route path='/products' element={<Products />}></Route>
<Route path='/about' element={<About />}></Route>
<Route path='/cart' element={<Cart />}></Route>
</Routes>
</Provider>
    </>
  );
}

export default App;
