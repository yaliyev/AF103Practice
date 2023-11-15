import React from 'react'

const DividionButton = ({firstInputValue,secondInputValue,setResult }) => {
  function divideMathematicalProcess() {
   setResult(firstInputValue / secondInputValue);
  }

  return (
    <button onClick={() => { divideMathematicalProcess() }}>Dividion Button</button>
  )
}

export default DividionButton