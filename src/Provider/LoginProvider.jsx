import { createContext, useContext, useState } from "react"

const LoginContext = createContext();

export const LoginProvider = ({children}) => {

    const [isUsrLoggedIn, setIsUsrLoggedIn] = useState(false);

    return (
        <LoginContext.Provider value={{isUsrLoggedIn, setIsUsrLoggedIn}}>
            {children}
        </LoginContext.Provider>
    )

}

export const useLogin = () => {
    return useContext(LoginContext);
}