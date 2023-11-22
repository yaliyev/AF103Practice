import React from 'react'
import {useRef}  from 'react'
import '@coreui/coreui/dist/css/coreui.min.css'
import getUser from '../api/users_request'; 
const Search = ({setUser}) => {
   
  let searchInputRef = useRef("");
  async function searchUser(){
  let searchTxt = searchInputRef.current.value.trim();
  let user =   await getUser(searchTxt);
  if(user != undefined){
    console.log(user);
    setUser(user);
  }
  }
  return (
    <div className='form-group position-relative  '>
        <input ref={searchInputRef} className='form-control' placeholder='Search:' type="text" />
        <button onClick={()=>{searchUser()}} className='btn btn-primary position-absolute top-0 end-0 '>Search</button>

    </div>
  )
}

export default Search