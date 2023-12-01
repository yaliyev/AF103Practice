import { createContext, useEffect, useState } from "react"

export const IsLoginContext = createContext("");


const IsLoginContextProvider = ({ children }) => {
    let [isLogin, setIsLogin] = useState(false);

    return <IsLoginContext.Provider value={{ isLogin, setIsLogin }}>
        {children}
    </IsLoginContext.Provider>
}

export default IsLoginContextProvider