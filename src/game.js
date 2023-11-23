import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './game.scss'
import { Snake } from "./snake/ui";

const root = ReactDOM.createRoot(document.getElementById("root"));



const snake = {
  dummy: "something",
  children: [
    { name: "head", dir:"up",coord:{top:100, left:200} },
    { name: "tail", dir:"up",coord:{top:160, left:200} },
  ],
}

/*   console.log(Object.getPrototypeOf(Component))
  console.log(Object.getPrototypeOf(withCoordinate)); */
root.render(
  <React.StrictMode>
    {/* PARENT CONTEXT */}

    <Snake data={snake}/>

    {/* PARENT CONTEXT */}
  </React.StrictMode>
);

// dev & test & performance
reportWebVitals();