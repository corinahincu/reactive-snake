# SNAKE GAME

  > JS: loops, conditionals, functional, OOP, timers
  > DOM: structure, manipulation, events
  > Algorithms 
  > data structure: Tree, Hierarchy, Array, Object, JSON
  > storage /AJAX/FETCH
  > node, webpack
  > jsx
  > react: functional, hooks, state management, routing, forms, ...
  > MUI (material ui design)

  > css: sass
  > TS

  ## Stage 1 / front / react 
    > init 
    > strip down (SPA- single page application) am sters ce nu e necesar 
    > hierarchy (UI,Model)
    > inside-out (de la mic la mare)



    +---------------+
    |               |
    |               |
    |               | <---------
    |               |          Data Layer
    |               | ---------->
    |               |
    |               |
    |               |
    +---------------+





  
  UI

  .
  |
  +---Map (HoC)
       |
       + -- Snake
       |     |
       |     +-- children [
       |                0 ---- SnakeHead
       |                1 ---- SnakeBody  
       |                2 ---- SnakeBody 
       |                .  
       |                n-1 -- SnakeBody
       |                n ---- SnakeTail         
       |             ]
       |           
       |            
       |
       + -- Mouse
       |
       |
       + -- Apple
       |
       .




  component.js <-------- import 'style.scss'
                   |
                   |           ...
                   |         url(../image.jpg)<-------
                  process





    - react : underline layer, cel mai de baza a reactului
    - react-dom : cel care tine cu interactiunea cu dom-ul si formeaza si dom-ul virtual
    - react-scripts : a set of scripts from the create-react-app starter pack which helps you kick off projects without configuring
    - cra-template : the official template for crate react app



    


# SNAKE GAME PART 2

                        (pass from parent context)
                              |
                              v  default
                              v     v
    +------- SnakeHead({dir='up', top=0, left=0})------+          +------------------------------+
    |                                                  |          |                              |
    |        ...                                       |          |                              |
    |        const [_dir,setDir] = <--------- useState(dir)-----------> _dir                     |
    |        const [_top,setTop] = <--------- useState(dir)-----------> _top                     |
    |        const [_left,setLeft] = <--------- useState(dir)-----------> _left                  |
    |        ...                                       |          |                              |
    |        ...                                       |          |                              |
    |        ...{_dir}...                              |          |                              |
    |        ...{_top}...                              |          |                              |
    |        ...{_left}...                             |          |                              |
    |        ...                                       |          |                              |
    |                                                  |          |                              |
    |                                                  |          +------------------------------+
    |                                                  |
    |                                                  |
    |                                                  |
    +--------------------------------------------------+






    OUTSIDE / PARENT CONTEXT 


                               headData = {dir:'up',top=0,left=0}

                               <SnakeHead 
                                 {...headData}
                               />
                                      |
                                      |
                                      |
                                      v
                                    props
                                      |
                                      |
                                      + -- dir
                                      + -- top
                                      + -- left

  +-----------SnakeHead---({dir,top,left})------+





      UI
  component          data
  +--------+      +--------+   
  |        | <--> |        |
  +--------+      +--------+ 
  
  Permite sa scriem logica mai curat, atunci cand separam componenta ui de data.
  Metoda aceasta e similara cu hook-urile, la fel separa componenta vizuala de containerul care se ocupa de state management(amenajarea starii)







### SnakeHead part 3

SnakeHead 

  + direction (specific)

  + coordinate (common)
  + background (common)


  Component 
        \
        + -- class
        + -- background


-----------------------------------------------

                              {name}
                               |
                               v
                    <Component.. />
                      |
                      |
                      v
   withCoordinate(Component)
                      |
                      |    + -- {top,left,name}
                      |    |
                      v    v
                    <div ...>
                      <Component .. />
                    </div>



---------------------------------------------
Functional component:

const FunctionalComponent () => {
  return () <---- JSX like syntax
}

Ordinary function

const ordinaryFunction () => {
  return .. < --- anything else 
}


### Part 4
-----------------------------------------------

                              {name}
                               |
                               v
                    <Component.. />
                      |
                      |
                      |
                      v
withDirection (Component)                      
                      |
                      |    
                      v
withCoordinates(Component)
                      |
                      |
                      v
                  ready to use




---------------------------------------------------

<Snake />
  |
  + --- <Component />
           |
           + -- <SnakeHead />
           |
           + -- <SnakeTail />