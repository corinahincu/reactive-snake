import { useState } from "react";
import "./snake.scss";

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
