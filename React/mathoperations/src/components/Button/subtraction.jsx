import React from 'react'

const SubtractionButton = ({firstInputValue,secondInputValue,setResult }) => {
  function subtractMathematicalProcess() {
   setResult(firstInputValue - secondInputValue);
  }
  return (
    <button onClick={() => { subtractMathematicalProcess() }}>Subtraction Button</button>
  )
}

export default SubtractionButton