import React from 'react'

const MultiplyButton = ({firstInputValue,secondInputValue,setResult }) => {
  function multiplyMathematicalProcess() {
    setResult(firstInputValue * secondInputValue);
   }
  return (
    <button onClick={() => { multiplyMathematicalProcess() }}>MultiplyButton</button>
  )
}

export default MultiplyButton