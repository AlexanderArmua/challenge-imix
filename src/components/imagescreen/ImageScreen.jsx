import React, { useContext, useState } from 'react'
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
    const queryValues = queryString.parse(search)
    
    const historial = Object.entries(queryValues).map(([nombre, valor]) => ({ nombre, valor }))

    const deleteHistorial = (nombre) => {
        queryValues[nombre] && delete queryValues[nombre]

        const params = queryString.stringify(queryValues)

        navigate(`${pathname}?${params}`, { replace: false });
    }

    const addElement = ({ nombre, valor }) => {
        if (queryValues[nombre] && queryValues[nombre] === valor) {
            return
        }

        queryValues[nombre] = valor

        const params = queryString.stringify(queryValues)

        navigate(`${pathname}?${params}`, { replace: false });
    }

    console.log("Cargado ImageScreen")

    return (
        <> 
            <Navbar {...{isNavVisible, historial, onDelete: deleteHistorial}} /> 
            <Hero {...{imageId, historial, onAddElement: addElement}}/>
        </>
    )
}
