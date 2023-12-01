import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import UserContextProvider from './contexts/UserContext.jsx'
import IsLoginContextProvider from './contexts/IsLoginContext.jsx'
import UsersContextProvider from './contexts/UsersContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
    <UsersContextProvider>
        <UserContextProvider>
            <IsLoginContextProvider>
                <App />
            </IsLoginContextProvider>
        </UserContextProvider>
    </UsersContextProvider>

)
