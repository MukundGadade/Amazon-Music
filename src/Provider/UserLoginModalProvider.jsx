import { createContext, useContext, useState } from "react"

const UserLoginModalContext = createContext();

export const UserLoginModalProvider = ({children}) => {

    const [showUserLoginModal, setShowUserLoginModal] = useState(false);
    const [musicInterval, setMusicInterval] = useState(null);

    return (
        <UserLoginModalContext.Provider value={{showUserLoginModal, setShowUserLoginModal, musicInterval, setMusicInterval}}>
            {children}
        </UserLoginModalContext.Provider>
    )

}

export const useUserLoginModal = () => {
    return useContext(UserLoginModalContext);
}