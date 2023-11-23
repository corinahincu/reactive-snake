/* import { useState } from "react"; */
import "./style.scss";

//common components / denumirea universala
const Component = ({name,children}) => {

  return (
    <div className={name}>
      {children}
    </div>
  )
}



// decorators 
// variabila locala
const withCoordinate = (Component) => {

  return({coord:{top,left}, ...props}) => {

    return (
      <div style={{top:`${top}px`,left:`${left}px`, position: `absolute`}}>
      < Component  {...props}/>
    </div>
    )
  }
}

const withDirection = (Component) => {
  return ({dir, ...props}) => {
    return(
      <div className={`dir-${dir}`}>
        <Component {...props} />
      </div>
    )
  }
}



// SNAKE PARTS
const SnakeHead = withCoordinate(withDirection(Component));
const SnakeTail = withCoordinate(withDirection(Component));

const Snake = ({data: {children}}) => {
  return (
    <Component name="snake">
      {
        children.map( (childData,idx) => {
          
          return (
            (childData.name === "head" && (
              <SnakeHead key={`k-${idx}`} {...childData} />
            )) ||
            (childData.name === "tail" && <SnakeTail key={`k-${idx}`} {...childData} />)
          );
          
        })
      }
    </Component>
  );
}



export { Snake }


// HW1: make sure you add the BODY component

