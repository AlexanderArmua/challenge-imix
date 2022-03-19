import { createContext, useState } from "react";

export const ImageContext = createContext({});

const useUIContext = () => {
    const [isNavVisible, setIsNavVisible] = useState(false)
    const changeNavVisibility = () => setIsNavVisible(!isNavVisible)

    const [imageName, setImageName] = useState('')

    const [filtersApplied, setFiltersApplied] = useState({})
    const deleteFilterApplied = (prop) => {
        const newFiltersApplied = { ...filtersApplied }

        Object.keys(prop).forEach(filterKey => newFiltersApplied[filterKey] && delete newFiltersApplied[filterKey])

        setFiltersApplied(newFiltersApplied)
    }
    const addFilterApplied = (prop) => {
        const newFiltersApplied = { ...filtersApplied }

        Object.keys(prop).forEach(filterKey => newFiltersApplied[filterKey] = prop[filterKey].value)

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
