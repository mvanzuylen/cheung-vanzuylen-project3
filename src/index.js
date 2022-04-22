import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App';
import { Provider } from 'react-redux';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

ReactDOM.render(
  <div>
  <BrowserRouter>
  <Header />
    <Routes>
      <Route path={"/"} element={<App />}/>
  </Routes>
  </BrowserRouter>
  </div>
,
  document.getElementById('root')
);
