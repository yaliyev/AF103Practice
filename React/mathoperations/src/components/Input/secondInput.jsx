import React from 'react'

const SecondInput = ({setSecondInputValue}) => {
  function renderSecondInputValue(e){
    setSecondInputValue(Number(e.target.value));
  }
  return (
    <input onChange={(e)=>{renderSecondInputValue(e)}} type="text" placeholder='2-ci eded' />
  )
}

export default SecondInput