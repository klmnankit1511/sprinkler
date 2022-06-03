import React from 'react';
import ReactDOM from 'react-dom/client';
// import Contact from './Contact/Contact';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Services from './Services/Services';
import Sport from './Sport/Sport';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Contact /> */}
    {/* <Services /> */}
    <Sport />
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
