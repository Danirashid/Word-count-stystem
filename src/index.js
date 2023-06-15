import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Home from './home'
import Navbar from './Navbar'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <App />
    <Home />
  </React.StrictMode>
);

