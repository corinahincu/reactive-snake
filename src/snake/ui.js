/* import { useState, useEffect } from "react"; */

import "./snake.scss";



// hw2: using props.dir (with destrucuring & default value of 'up') make it so the snakehead renders in either of the next 2 situations:
// <SneakeHead/> or <SnakeHead dir="right" />



const SnakeHead = ({ dir = "up" }) => {

  return <div className={`snake__head dir-${dir}`}></div>;
};


// varianta in care foloses useState / useEffect
/* const SnakeHead = ({dir = "up"}) => {

  const [dir, setDir] = useState(dir)

  useEffect(() => {
    setTimeout(()=> {
      console.log("change direction")
      setDir("right")
    },5000)
  },[])

  return <div className={`snake__head dir-${dir}`}></div>;
} */

// varianta initiala
/*   const [dir, setDir] = useState("up");

  setTimeout(() => {
    console.log("Changed direction");
    setDir("left");
  }, 5000);
  return <div className={`snake__head dir-${dir}`}></div>;
}; */



export { SnakeHead };
