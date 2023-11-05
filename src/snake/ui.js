import { useState } from "react";

import "./snake.scss";

// hw2: using props.dir (with destrucuring & default value of 'up') make it so the snakehead renders in either of the next 2 situations:
// <SneakeHead/> or <SnakeHead dir="right" />

const SnakeHead = () => {
  const [dir, setDir] = useState("up");

  setTimeout(() => {
    console.log("Changed direction");
    setDir("down");
  }, 5000);
  return <div className={`snake__head dir-${dir}`}>snake</div>;
};

export { SnakeHead };
