import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import  DarkVariantExample  from './slider'
import Homepage from './homepage';

import ThemeSwitcher from './ThemeSwitcher';
import reportWebVitals from './reportWebVitals';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import {Routes, Route, useNavigate} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<ThemeSwitcher/>
   <DarkVariantExample/> 
   <Homepage/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
