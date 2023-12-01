import React, { useContext, useEffect } from 'react'

import { useState } from 'react'
import Login from './components/Login'
import Users from './components/Users'
import { UserContext, UserContextProvider,IsLoginContextProvider, IsLoginContext } from './contexts/'

function App() {
  //const [user,setUser] = useState(null);
 // const [isLogin, setIsLogin] = useState(false);

  const { user, setUser } = useContext(UserContext);
  const {isLogin,setIsLogin} = useContext(IsLoginContext);

  useEffect(() => {
    async function loadData() {
      console.log(await user);
    }
    loadData();
  }, [])
  return (
    <>
      
          {isLogin ? <Users setUser={setUser} user={user} /> : <Login setUser={setUser} setIsLogin={setIsLogin} />}
     




    </>
  )
}

export default App
