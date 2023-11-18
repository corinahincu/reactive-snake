import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { SnakeHead, SnakeTail } from "./snake/ui";

const root = ReactDOM.createRoot(document.getElementById("root"));
/*   console.log(Object.getPrototypeOf(Component))
  console.log(Object.getPrototypeOf(withCoordinate)); */
root.render(
  <React.StrictMode>
    {/* PARENT CONTEXT */}

    <SnakeHead top={100} left={200} name="head" />
    <SnakeTail top={200} left={200} name="tail" />

    {/* PARENT CONTEXT */}
  </React.StrictMode>
);

// dev & test & performance
reportWebVitals();