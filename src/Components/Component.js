import React, { useState, useReducer, useEffect } from 'react';

const Demo = () => {
  const [count, setCount] = useState(0)
  // const state = {count: 0}

  // const countChanger = (currState, action) => {
  //   switch(action.type) {
  //     case 'increase':
  //       return {count: currState.count + 1}
  //     case 'decrease': 
  //     return {count: currState.count - 1}
  //     case 'reset':
  //       return {count: 0}
  //     default:
  //       throw new Error()
  //   }
  // }

  // const [newState, dispatch] = useReducer(countChanger, state)

  useEffect(() => {
    console.log('Component Mounted!')
  }, [])

  useEffect(() =>  {
    console.log('Component Updated!')
  }, [count])

  const increase = () => {
    setCount(count + 1)
  }
  const decrease = () => {
    setCount(count - 1)
  }
  const reset = () => {
    setCount(0)
  }

  return (
    <div> 
      <h1>Component Count : {count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Demo;
