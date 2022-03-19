import React, { useContext, useEffect, useMemo } from 'react'
import { Hero } from '../ui/Hero'
import { Navbar } from '../ui/Navbar'
import { useNavigate } from 'react-router-dom'
import { ImageContext } from '../../context/imageContext'
import {buildParams} from "../../helpers/url";
import {imgixFilters} from "../../helpers/constants";

export const ImageScreen = () => {
    const { isNavVisible, imageName, filtersApplied } = useContext(ImageContext)

    let navigate = useNavigate();
    
    useEffect(() => navigate(`/${buildParams(imageName, Object.entries(filtersApplied))}`), [filtersApplied, imageName])

    console.log("Cargado ImageScreen")

    const possibleFilters = { ...imgixFilters }

    return (
        <> 
            {useMemo(() => (<Navbar /> ), [isNavVisible, filtersApplied])}
            {useMemo(() => (<Hero { ...{possibleFilters} } /> ), [imageName, filtersApplied])}
        </>
    )
}
