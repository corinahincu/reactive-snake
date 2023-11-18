/* import { useState } from "react"; */
import "./snake.scss";

// denumirea universala
const Component = ({name}) => {

  return (
    <div className={name}>
    </div>
  )
}

// decorator 
// variabila locala
const withCoordinate = (Component) => {

  return(top,left, ...props) => {

    return (
      <div style={{top:`${top}px`,left:`${left}px`, position: `absolute`}}>
      < Component  {...props}/>
    </div>
    )
  }
}

const SnakeHead = withCoordinate(Component)
const SnakeTail = withCoordinate(Component)


export { SnakeHead ,SnakeTail}
