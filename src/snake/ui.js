import { useState } from "react";
import "./snake.scss";

// hw2: using props.dir (with destrucuring & default value of 'up') make it so the snakehead renders in either of the next 2 situations:
// <SneakeHead/> or <SnakeHead dir="right" />

const SnakeHead = ({ dir = "up", top=0, left=0 }) => {
  const [_dir, setDir] = useState(dir)
  const [_top, setTop] = useState(top)
  const [_left, setLeft] = useState(left)
  return (
    <div
      className={`snake__head dir-${_dir}`}
      style={{
        top: `${_top}px`,
        left: `${_left}px`,
      }}
    ></div>
  );
};


export { SnakeHead };
