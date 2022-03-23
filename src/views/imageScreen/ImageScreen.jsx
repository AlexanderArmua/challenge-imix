import React, { useContext, useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { ImageContext } from '../../context/imageContext'
import { buildParams } from "../../helpers/url"
import { Navbar } from '../../containers/navbar/Navbar'
import { Hero } from '../../containers/hero/Hero'

export const ImageScreen = () => {
    const { allFilters, isNavVisible, imageName, filtersApplied, addFilterApplied, deleteFilterApplied, setImageName } = useContext(ImageContext)

    let navigate = useNavigate();
    
    useEffect(() => {
        navigate(`/${buildParams(imageName, Object.entries(filtersApplied))}`)
    }, [imageName, filtersApplied])

    return (
        <> 
            {useMemo(() => (<Navbar {...{allFilters, isNavVisible, filtersApplied, deleteFilterApplied}} /> ), [isNavVisible, filtersApplied])}
            {useMemo(() => (<Hero {...{allFilters, imageName, setImageName, filtersApplied, addFilterApplied, deleteFilterApplied}}/> ), [imageName, filtersApplied])}
        </>
    )
}
