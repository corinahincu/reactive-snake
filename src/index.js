import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { SnakeHead } from "./snake/ui";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SnakeHead />
  </React.StrictMode>
);

// dev & test & performance
reportWebVitals();