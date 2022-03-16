import { createContext, useState } from "react";

export const ImageContext = createContext();

const useUIContext = () => {
    const [isNavVisible, setIsNavVisible] = useState(false)
    const changeNavVisibility = () => setIsNavVisible(!isNavVisible)

    return {
        setIsNavVisible,
        changeNavVisibility,
        isNavVisible,
    }
}
  
export const ImageContextProvider = ({ children }) => {
    const state = useUIContext()

    return <ImageContext.Provider value={state}>{children}</ImageContext.Provider>
}
  