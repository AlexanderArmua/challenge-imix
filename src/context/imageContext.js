import { createContext, useState } from "react";
import { imgixFilters } from "../helpers/constants";

export const ImageContext = createContext({});

const useUIContext = () => {
    const allFilters = imgixFilters

    const [isNavVisible, setIsNavVisible] = useState(false)
    const changeNavVisibility = () => setIsNavVisible(!isNavVisible)

    const [imageName, setImageName] = useState('')

    const [filtersApplied, setFiltersApplied] = useState({})
    const deleteFilterApplied = (filterKeysToDelete) => {
        const newFiltersApplied = { ...filtersApplied }

        filterKeysToDelete.forEach(keyToDelete => {
            const siblingKeys = Object.keys(allFilters[keyToDelete]?.values || {})

            siblingKeys.forEach(siblingKey => {
                newFiltersApplied[siblingKey] && delete newFiltersApplied[siblingKey]
            })
        })

        setFiltersApplied(newFiltersApplied)
    }
    const addFilterApplied = (prop) => {
        const newFiltersApplied = { ...filtersApplied }

        Object.keys(prop).forEach(filterKey => newFiltersApplied[filterKey] = prop[filterKey].value)

        setFiltersApplied(newFiltersApplied)
    }

    return {
        allFilters,
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
