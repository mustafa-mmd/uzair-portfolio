import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import profileIcon from './assets/profile.jpeg';

const favicon = document.querySelector("link[rel~='icon']");
if (favicon) {
  favicon.href = profileIcon;
} else {
  const link = document.createElement("link");
  link.rel = "icon";
  link.type = "image/jpeg";
  link.href = profileIcon;
  document.head.appendChild(link);
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
