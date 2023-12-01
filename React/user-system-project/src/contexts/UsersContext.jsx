import { createContext, useEffect, useState } from "react"

export const UsersContext = createContext("");


const UsersContextProvider = ({ children }) => {
    let [users, setUsers] = useState([]);

    return <UsersContext.Provider value={{ users, setUsers }}>
        {children}
    </UsersContext.Provider>
}

export default UsersContextProvider