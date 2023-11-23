import React from 'react'

import { useState } from 'react'
import Login from './components/Login'
import Users from './components/Users'
function App() {
  const [user,setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      {isLogin ? <Users setUser={setUser} user={user} /> : <Login setUser={setUser} setIsLogin={setIsLogin} />}
    </>
  )
}

export default App
