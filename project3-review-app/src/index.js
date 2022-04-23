import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import RestaurantEntry from './RestaurantEntry';
import Login from './Login';
import CreateUser from './CreateUser';
import Header from './Header';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path={"/"} element={<App />}/>
        <Route path={"/restaurant/:restaurantId"} element={<RestaurantEntry />}/>
        <Route path={"/login"} element={<Login />} />
        <Route path={"/createUser"} element={<CreateUser />} />
    </Routes>
    </BrowserRouter>
      
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// ReactDOM.render(
//   <div>
//   <BrowserRouter>
//   <Header />
//     <Routes>
//       <Route path={"/"} element={<App />}/>
//       {/* <Route path={"/restaurant/:restaurantId"} element={<RestaurantEntry />}/>
//       <Route path={"/login"} element={<Login />} />
//       <Route path={"/createUser"} element={<CreateUser />} /> */}
//   </Routes>
//   </BrowserRouter>
      
//   </div>
// ,
//   document.getElementById('root')
// );
