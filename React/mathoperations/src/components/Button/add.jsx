import React from 'react'

const AddButton = ({firstInputValue,secondInputValue,setResult }) => {
  function addMathematicalProcess() {
    console.log(firstInputValue + secondInputValue);
   setResult(firstInputValue + secondInputValue);
  }

  return (
    <button onClick={() => { addMathematicalProcess() }}>Add Button</button>
  )
}

export default AddButton