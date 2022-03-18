import { createContext, useState } from "react";

export const ImageContext = createContext();

const useUIContext = () => {
    const [isNavVisible, setIsNavVisible] = useState(false)
    const changeNavVisibility = () => setIsNavVisible(!isNavVisible)

    const [imageName, setImageName] = useState('')

    const [filtersApplied, setFiltersApplied] = useState({})
    const deleteFilterApplied = (key) => {
        const newFiltersApplied = { ...filtersApplied }
        delete newFiltersApplied[key]
        setFiltersApplied(newFiltersApplied)
    }
    const addFilterApplied = ({ key, value }) => {
        const newFiltersApplied = { ...filtersApplied }
        newFiltersApplied[key] = value
        setFiltersApplied(newFiltersApplied)
    }

    return {
        setIsNavVisible,
        changeNavVisibility,
        isNavVisible,
        imageName,
        setImageName,
        filtersApplied,
        setFiltersApplied,
        deleteFilterApplied,
        addFilterApplied
    }
}
  
export const ImageContextProvider = ({ children }) => {
    const state = useUIContext()

    return <ImageContext.Provider value={state}>{children}</ImageContext.Provider>
}
  