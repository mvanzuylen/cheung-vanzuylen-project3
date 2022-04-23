import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import './index.css';
import App from './App';
// import RestaurantEntry from './RestaurantEntry';
import Login from './Login';
import CreateUser from './CreateUser';
import Header from './Header';

  ReactDOM.render(
   <div>
   <BrowserRouter>
      <Header />
     <Routes>
      <Route path={"/"} element={<App />}/>
      <Route path={"/login"} element={<Login />} />
      <Route path={"/createUser"} element={<CreateUser />} />
    </Routes>
   </BrowserRouter>
      
   </div>
 ,
   document.getElementById('root') );
