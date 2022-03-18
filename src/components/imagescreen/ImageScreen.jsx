import React, { useContext, useEffect, useMemo } from 'react'
import { Hero } from '../ui/Hero'
import { Navbar } from '../ui/Navbar'
import { useNavigate } from 'react-router-dom'
import { ImageContext } from '../../context/imageContext'

export const ImageScreen = () => {
    const { isNavVisible, imageName, filtersApplied } = useContext(ImageContext)

    let navigate = useNavigate();
    
    useEffect(() => {
        const params = Object.keys(filtersApplied).map(key => `${key}=${filtersApplied[key]}`).join('&')
        navigate(`/${imageName}?${params}`)
    }, [filtersApplied, imageName])

    console.log("Cargado ImageScreen")

    return (
        <> 
            {useMemo(() => (<Navbar /> ), [isNavVisible, filtersApplied])}
            {useMemo(() => (<Hero /> ), [imageName, filtersApplied])}
        </>
    )
}
