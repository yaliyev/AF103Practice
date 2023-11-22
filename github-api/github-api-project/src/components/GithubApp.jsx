import React, { useState } from 'react'
import '@coreui/coreui/dist/css/coreui.min.css'
import Search from './Search'
import ResultCard from './ResultCard'

const GithubApp = () => {
  const [user,setUser] = useState({avatar_url: "",name:"",bio:"",location:"",company:""});
  return (
    <div className='container mt-2'>
      <Search setUser={setUser} />
      <ResultCard user={user} />
    </div>
  )
}

export default GithubApp