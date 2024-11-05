import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/styles.css';
import App from './App';
import Results from './routes/Results';
import Game from './routes/Game';
import { BrowserRouter,
  Routes,
  Route, Navigate, } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/game" />}></Route>
      <Route path = '/' element = {<App/>}>
        <Route path = 'results' element = {<Results/>}></Route>
        <Route path = 'game' element = {<Game/>}></Route>
        <Route path="*" element={<Navigate to="game" />} />
      </Route>
      
    </Routes>
  </BrowserRouter>
);


