// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; 
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap here
import './index.css'; // Import your custom styles
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App within the Router and StrictMode
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
