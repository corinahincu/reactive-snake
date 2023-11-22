import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Snake } from "./snake/ui";

const root = ReactDOM.createRoot(document.getElementById("root"));
/*   console.log(Object.getPrototypeOf(Component))
  console.log(Object.getPrototypeOf(withCoordinate)); */
root.render(
  <React.StrictMode>
    {/* PARENT CONTEXT */}

    <Snake />

    {/* PARENT CONTEXT */}
  </React.StrictMode>
);

// dev & test & performance
reportWebVitals();