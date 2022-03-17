import React, { useContext, useEffect, useMemo, useState } from 'react'
import queryString from 'query-string'
import { Hero } from '../ui/Hero'
import { Navbar } from '../ui/Navbar'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { ImageContext } from '../../context/imageContext'

export const ImageScreen = () => {
    const { isNavVisible } = useContext(ImageContext)

    let navigate = useNavigate();

    const { imageId } = useParams()
    const { pathname, search } = useLocation();
    
    const [historial, setHistorial] = useState({})

    useEffect(() => setHistorial(queryString.parse(search)), [])

    useEffect(() => {
        const params = Object.keys(historial).map(key => `${key}=${historial[key]}`).join('&')
        navigate(`${pathname}?${params}`)
    }, [historial])

    const deleteHistorial = (key) => {
        const newHistorial = { ...historial }
        delete newHistorial[key]

        setHistorial(newHistorial)
    }

    const addElement = (filterElement) => {
        const { key, value } = filterElement

        if (historial[key]) {
           return 
        }

        setHistorial({...historial, [key]: value})
    }

    console.log("Cargado ImageScreen")

    return (
        <> 
            {useMemo(() => (<Navbar {...{isNavVisible, historial, onDelete: deleteHistorial}} /> ), [isNavVisible, historial])}
            {useMemo(() => (<Hero {...{imageId, historial, onAddElement: addElement}} /> ), [imageId, historial])}
        </>
    )
}
