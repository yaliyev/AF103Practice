import { createContext, useEffect, useState } from "react"

export const UserContext = createContext("");


const UserContextProvider = ({ children }) => {
    let [user, setUser] = useState({});

    return <UserContext.Provider value={{ user, setUser }}>
        {children}
    </UserContext.Provider>
}

export default UserContextProvider