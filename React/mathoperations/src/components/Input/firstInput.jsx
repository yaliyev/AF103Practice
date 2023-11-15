import React from 'react'

const FirstInput = ({setFirstInputValue}) => {
  function renderFirstInputValue(e){
    setFirstInputValue(Number(e.target.value));
  }
  return (
   <input onChange={(e)=>{renderFirstInputValue(e)}} type="text" placeholder='1-ci eded' />
  )
}

export default FirstInput