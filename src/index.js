import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import App from './App';
import Results from './routes/Results';
import { BrowserRouter,
  Routes,
  Route, } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path = '/aystafg' element = {<App/>}></Route>
      <Route path = 'results' element = {<Results/>}></Route>
    </Routes>
  </BrowserRouter>
);


