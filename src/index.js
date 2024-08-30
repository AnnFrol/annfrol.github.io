import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './css/reset.css';
import './css/index.css';
import './css/App.css';
import './css/about.css';
import './css/media.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Geologica&display=swap';
link.rel = 'stylesheet';

document.head.appendChild(link);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
	  <App />
  </React.StrictMode>
);

reportWebVitals();
